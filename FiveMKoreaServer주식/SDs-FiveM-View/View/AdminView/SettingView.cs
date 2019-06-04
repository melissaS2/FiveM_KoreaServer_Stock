using SDs.FiveM.Model.Setting;
using SDs.FiveM.Model.Util;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.View.View.AdminView
{
    public partial class SettingView : Form
    {
        #region PROPERTY AREA ******************************
        List<TextBox> txtBoxList = null;
        #endregion

        #region CONTRUCT AREA ******************************
        public SettingView()
        {
            InitializeComponent();
            this.txtBoxList = new List<TextBox>();
            this.ListInit();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += SettingView_Load;
            this.btnApply.Click += BtnApply_Click;
            this.btnClose.Click += BtnClose_Click;

            for(int i = 0; i < txtBoxList.Count; i++)
            {
                this.txtBoxList[i].KeyPress += TextBox_KeyPress;
            }
        }

        private void ListInit()
        {
            this.txtBoxList.Add(txtOnePercent_1);
            this.txtBoxList.Add(txtOnePercent_2);
            this.txtBoxList.Add(txtOnePercent_3);
            this.txtBoxList.Add(txtFourPercent_1);
            this.txtBoxList.Add(txtFifteenPercent_1);
            this.txtBoxList.Add(txtFifteenPercent_2);
            this.txtBoxList.Add(txtTwentyPercent_1);
            this.txtBoxList.Add(txtTwentyPercent_2);
            this.txtBoxList.Add(txtThirtyPercent_1);
            this.txtBoxList.Add(txtThirtyPercent_2);
            this.txtBoxList.Add(txtFourtyPercent_1);
            this.txtBoxList.Add(txtFourtyPercent_2);
            this.txtBoxList.Add(txtTimerSecond);
        }

        private void TextBox_KeyPress(object sender, KeyPressEventArgs e)
        {
            TextBox txt = (TextBox)sender;


            //if (txt.Text.IndexOf(Convert.ToChar(Keys.Insert)) >=0){
            //    return;
            //}
            //숫자만 입력되도록 필터링
            if (!(char.IsDigit(e.KeyChar) 
                || e.KeyChar == Convert.ToChar(Keys.Back) 
                || e.KeyChar == Convert.ToChar(Keys.OemMinus)
                || e.KeyChar == Convert.ToChar(Keys.Subtract)
                || e.KeyChar == Convert.ToChar(Keys.Insert)
                ))
            {
                e.Handled = true;
            }
        }

        private void BtnClose_Click(object sender, EventArgs e)
        {
            try
            {
                this.Close();
            }
            //catch (TsbBaseException tsbEx)
            //{
            //    MessageManager.Show(tsbEx);
            //}
            catch (Exception ex)
            {
                //MSG : An unexpected error occurred. An internal system error message is [{0}]. Please, contact your administrator.
                //MessageManager.Show(new TsbBaseException(ex, this.ObjectID, "MSG_FTCO_99998", DefaultMessage.NON_REG_WRD + ex.Message));
                MessageBox.Show(ex.ToString());
            }
        }

        private void BtnApply_Click(object sender, EventArgs e)
        {
            try
            {
                this.DoApply();
                
                //FiveMConfigXMLHandler cfgHdl = new FiveMConfigXMLHandler();
                //cfgHdl.Save();

            }
            //catch (TsbBaseException tsbEx)
            //{
            //    MessageManager.Show(tsbEx);
            //}
            catch (Exception ex)
            {
                //MSG : An unexpected error occurred. An internal system error message is [{0}]. Please, contact your administrator.
                //MessageManager.Show(new TsbBaseException(ex, this.ObjectID, "MSG_FTCO_99998", DefaultMessage.NON_REG_WRD + ex.Message));
                MessageBox.Show(ex.ToString());
            }
        }

        private void DoApply()
        {
            //Sets the config of CTMS Calculation;

            FiveMConfig.OnePercent_1 = FiveMUtilClass.StringToParseInt(this.txtOnePercent_1.Text);
            FiveMConfig.OnePercent_2 = FiveMUtilClass.StringToParseInt(this.txtOnePercent_2.Text);
            FiveMConfig.OnePercent_3 = FiveMUtilClass.StringToParseInt(this.txtOnePercent_3.Text);

            FiveMConfig.FourPercent_1 = FiveMUtilClass.StringToParseInt(this.txtFourPercent_1.Text);

            FiveMConfig.FifteenPercent_1 = FiveMUtilClass.StringToParseInt(this.txtFifteenPercent_1.Text);
            FiveMConfig.FifteenPercent_2 = FiveMUtilClass.StringToParseInt(this.txtFifteenPercent_2.Text);

            FiveMConfig.TwentyPercent_1 = FiveMUtilClass.StringToParseInt(this.txtTwentyPercent_1.Text);
            FiveMConfig.TwentyPercent_2 = FiveMUtilClass.StringToParseInt(this.txtTwentyPercent_2.Text);

            FiveMConfig.ThirtyPercent_1 = FiveMUtilClass.StringToParseInt(this.txtThirtyPercent_1.Text);
            FiveMConfig.ThirtyPercent_2 = FiveMUtilClass.StringToParseInt(this.txtThirtyPercent_2.Text);

            FiveMConfig.FourtyPercent_1 = FiveMUtilClass.StringToParseInt(this.txtFourtyPercent_1.Text);
            FiveMConfig.FourtyPercent_2 = FiveMUtilClass.StringToParseInt(this.txtFourtyPercent_2.Text);

            FiveMConfig.TimerSecond = FiveMUtilClass.StringToParseInt(this.txtTimerSecond.Text);
        }

        private void DoLoad()
        {
            this.txtOnePercent_1.Text = FiveMConfig.OnePercent_1.ToString();
            this.txtOnePercent_2.Text = FiveMConfig.OnePercent_2.ToString();
            this.txtOnePercent_3.Text = FiveMConfig.OnePercent_3.ToString();

            this.txtFourPercent_1.Text = FiveMConfig.FourPercent_1.ToString();

            this.txtFifteenPercent_1.Text = FiveMConfig.FifteenPercent_1.ToString();
            this.txtFifteenPercent_2.Text = FiveMConfig.FifteenPercent_2.ToString();

            this.txtTwentyPercent_1.Text = FiveMConfig.TwentyPercent_1.ToString();
            this.txtTwentyPercent_2.Text = FiveMConfig.TwentyPercent_2.ToString();

            this.txtThirtyPercent_1.Text = FiveMConfig.ThirtyPercent_1.ToString();
            this.txtThirtyPercent_2.Text = FiveMConfig.ThirtyPercent_2.ToString();

            this.txtFourtyPercent_1.Text = FiveMConfig.FourtyPercent_1.ToString();
            this.txtFourtyPercent_2.Text = FiveMConfig.FourtyPercent_2.ToString();

            //Timer Second Setting
            this.txtTimerSecond.Text = FiveMConfig.TimerSecond.ToString();
        }

        private void SettingView_Load(object sender, EventArgs e)
        {
            try
            {
                this.DoLoad();
            }
            //catch (TsbBaseException tsbEx)
            //{
            //    MessageManager.Show(tsbEx);
            //}
            catch (Exception ex)
            {
                //MSG : An unexpected error occurred. An internal system error message is [{0}]. Please, contact your administrator.
                MessageBox.Show(ex.ToString());
            }
        }
        #endregion

        #region EVENT AREA **********************************
        #endregion
    }
}
