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
        private PublicLoginViewController controller = null;

        public PublicLoginView()
        {
            InitializeComponent();
            this.AddEventHandler();
            this.controller = new PublicLoginViewController();
        }

        private void AddEventHandler()
        {
            this.btnLogin.Click += new EventHandler(BtnLogin_Click);
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

                    //ChartView view = new ChartView()
                }
                //DbMgr mgr = new DbMgr();
                //bool flag = mgr.Login(this.idbox.Text, this.pwbox.Text, out money);
                //if (flag)
                //{
                //    this.Hide();

                //    Chart 차트1 = new Chart(money);
                //    차트1.Show();
                //}
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());

            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void button1_Click_1(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            //회원가입 회원가입1 = new 회원가입();
            //회원가입1.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            MessageBox.Show("준비중 입니다.");
        }

        private void button5_Click(object sender, EventArgs e)
        {
            MessageBox.Show("준비중 입니다.");
        }

        private void button6_Click(object sender, EventArgs e)
        {
            this.Hide();

            //관리자_로그인창 관리자_로그인창1 = new 관리자_로그인창();
            //관리자_로그인창1.Show();
        }
    }
}
