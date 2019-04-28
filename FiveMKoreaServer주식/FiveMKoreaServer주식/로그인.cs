using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using MySql.Data.MySqlClient;
using MySql.Data;

namespace FiveMKoreaServer주식
{
    public partial class 로그인 : Form
    {
        public 로그인()
        {
            InitializeComponent();
            this.btnLogin.Click += button1_Click;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                string money = string.Empty;
                DbMgr mgr = new DbMgr();
                bool flag = mgr.Login(this.idbox.Text, this.pwbox.Text,out money);
                if (flag)
                {
                    this.Hide();

                    Chart 차트1 = new Chart(money);
                    차트1.Show();
                }
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
            회원가입 회원가입1 = new 회원가입();
            회원가입1.Show();
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

            관리자_로그인창 관리자_로그인창1 = new 관리자_로그인창();
            관리자_로그인창1.Show();
        }
    }
}
