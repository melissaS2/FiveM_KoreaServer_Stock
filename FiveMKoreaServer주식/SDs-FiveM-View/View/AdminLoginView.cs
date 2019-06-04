using SDs.FiveM.Controller.Controller.AdminLoginView;
using SDs.FiveM.Model.Item.AdminLoginView;
using SDs.FiveM.Model.Param.AdminLoginView;
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
    public partial class AdminLoginView : Form
    {
        #region PROPERTY AREA ******************************
        private AdminLoginViewController controller = null;
        #endregion

        #region CONTRUCT AREA ******************************
        public AdminLoginView()
        {
            InitializeComponent();
            this.AddEventHandler();
            this.controller = new AdminLoginViewController();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.btnLogin.Click += new EventHandler(BtnLogin_Click);
            this.btnExit.Click += new EventHandler(BtnExit_Click);
        }
        #endregion

        #region EVENT AREA **********************************
        private void BtnExit_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            Environment.Exit(0);
        }

        private void BtnLogin_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            try
            {
                AdminLoginParam param = new AdminLoginParam();
                param.adminid = this.txtId.Text;
                param.adminpw = this.txtPw.Text;
                AdminLoginItem item = this.controller.DoLogin(param);

                if (item != null)
                {
                    this.Hide();
                    SDs.FiveM.View.View.AdminView.AdminView view = 
                        new SDs.FiveM.View.View.AdminView.AdminView();
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
