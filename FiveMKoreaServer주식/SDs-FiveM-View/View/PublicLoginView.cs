using SDs.FiveM.Controller.Controller;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
using SDs.FiveM.Model.Util;
using SDs.FiveM.View.View.Lotto;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.View.View
{
    public partial class PublicLoginView : Form, PublicLoginViewInterface
    {
        #region PROPERTY AREA ******************************
        public string LOGIN_ID { get; set; }
        public long MONEY { get; set; }
        public int user_id { get; set; }
        public long lotto_money { get; set; }

        private PublicLoginViewController controller = null;
        #endregion

        #region CONTRUCT AREA ******************************
        public PublicLoginView()
        {
            InitializeComponent();
            this.AddEventHandler();
            this.controller = new PublicLoginViewController();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.btnLogin.Click += new EventHandler(BtnLogin_Click);
            this.btnExit.Click += new EventHandler(BtnExit_Click);
            this.btnSingUp.Click += new EventHandler(BtnSingUp_Click);
            this.btnHomePg.Click += new EventHandler(BtnHomePg_Click);
            this.btnProgramInfo.Click += new EventHandler(BtnProgramInfo_Click);
            this.btnAdminLogin.Click += new EventHandler(BtnAdminLogin_Click);
        }
        #endregion

        #region EVENT AREA **********************************
        private void BtnAdminLogin_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.Hide();
            AdminLoginView view = new AdminLoginView();
            view.Show();
        }
        private void BtnProgramInfo_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            FiveMUtilClass.GetMessageBox("준비 중 입니다.", "알림", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
        private void BtnHomePg_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            FiveMUtilClass.GetMessageBox("준비 중 입니다.", "알림", MessageBoxButtons.OK, MessageBoxIcon.Information);
        }
        private void BtnSingUp_Click(object sender, EventArgs e)
        {
            try
            {
                //throw new NotImplementedException();
                SignUpView view = new SignUpView();
                view.StartPosition = FormStartPosition.Manual;
                view.Location = new Point(Control.MousePosition.X, Control.MousePosition.Y);
                view.ShowDialog();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        private void BtnExit_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            Environment.Exit(0);
        }
        private void BtnLogin_Click(object sender, EventArgs e)
        {
            try
            {
                LoginParam param = new LoginParam();
                param.id = this.idbox.Text;
                param.pw = this.pwbox.Text;
                LoginItem item = this.controller.DoLogin(param);

                if (item != null)
                {
                    this.Hide();
                    this.LOGIN_ID = item.id;
                    this.MONEY = item.money;
                    this.user_id = item.user_id;
                    this.lotto_money = item.LOTTO_MONEY;

                    //주식프로그램
                    //ChartView view = new ChartView(this);
                    //view.Show();

                    //로또프로그램
                    LottoMakerView view = new LottoMakerView(this);
                    view.Show();
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        #endregion
    }
}
