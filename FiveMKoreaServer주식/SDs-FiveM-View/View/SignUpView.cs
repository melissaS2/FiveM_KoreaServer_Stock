using SDs.FiveM.Model.Util;
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
    public partial class SignUpView : Form
    {
        #region PROPERTY AREA ******************************
        #endregion

        #region CONTRUCT AREA ******************************
        public SignUpView()
        {
            InitializeComponent();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.btnComplete.Click += new EventHandler(BtnComplete_Click);
            this.btnExit.Click += new EventHandler(BtnExit_Click);
            this.btnReset.Click += new EventHandler(BtnReset_Click);
            this.txtMoney.TextChanged += TxtMoney_TextChanged;
        }

        private void TxtMoney_TextChanged(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            if(this.txtMoney.Text == "")
            {
                this.txtMoney.Text = "0";
            }
        }

        private void BtnReset_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.txtId.Text = "";
            this.txtPw.Text = "";
            this.txtMoney.Text = "0";
        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.Close();

            //PublicLoginView view = new PublicLoginView();
            //view.Show();
            //Environment.Exit(0);
        }

        private void BtnComplete_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            if (this.txtId.Text == "" || this.txtId.Text == null)
            {
                FiveMUtilClass.GetMessageBox("ID와 Password는 빈칸이 될 수 없습니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }

            if (this.txtPw.Text == "" || this.txtPw.Text == null)
            {
                FiveMUtilClass.GetMessageBox("ID와 Password는 빈칸이 될 수 없습니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }

            //if (this.txtMoney.Text == "" || this.txtMoney.Text == null)
            //{
            //    FiveMUtilClass.GetMessageBox("ID와 Password는 빈칸이 될 수 없습니다.","경고",MessageBoxButtons.OK,MessageBoxIcon.Warning);
            //}
        }
        #endregion

        #region EVENT AREA **********************************
        #endregion
    }
}
