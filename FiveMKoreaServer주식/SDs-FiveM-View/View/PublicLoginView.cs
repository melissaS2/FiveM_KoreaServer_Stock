using SDs.FiveM.Controller.Controller;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
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
    public partial class PublicLoginView : Form
    {
        #region PROPERTY AREA ******************************
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
            MessageBox.Show("준비중 입니다.");
        }
        private void BtnHomePg_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            MessageBox.Show("준비중 입니다.");
        }
        private void BtnSingUp_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            SignUpView signUpView = new SignUpView();
            signUpView.Show();
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

                string money = string.Empty;

                if (item != null)
                {
                    this.Hide();
                    ChartView view = new ChartView();
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
