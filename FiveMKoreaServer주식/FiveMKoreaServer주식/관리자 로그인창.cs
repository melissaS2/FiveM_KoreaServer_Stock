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
    public partial class 관리자_로그인창 : Form
    {
        public 관리자_로그인창()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            try
            {
                DbMgr mgr = new DbMgr();
                bool flag = mgr.LoginAdmin(adminid.Text, adminpw.Text);
                if (flag)
                {
                    this.Hide();
                    adminstar adminstar1 = new adminstar();
                    adminstar1.Show();
                }
                //MySqlConnection conn;
                //conn = new MySqlConnection("Server=183.109.83.28;Database=jusik;Uid=root;Pwd=!!wjddk4455;CharSet=utf8;");
                //conn.Open();
                //MySqlCommand cmd = new MySqlCommand();
                //cmd.CommandText = @"SELECT nikname,count(*) as cnt FROM `adminuser` WHERE adminid=@adminid and adminpw=@adminpw";
                //cmd.Parameters.AddWithValue("@adminid", );
                //cmd.Parameters.AddWithValue("@adminpw", );

                //cmd.Connection = conn;
                //MySqlDataReader reader = cmd.ExecuteReader();
                //while (reader.Read())
                //{

                //    if (reader["cnt"].ToString() == "1")
                //    {
                //        MessageBox.Show(reader["nikname"].ToString() + "님 환영합니다");

                //        this.Hide();

                //        adminstar adminstar1 = new adminstar();
                //        adminstar1.Show();

                //    }
                //    else
                //    {
                //        MessageBox.Show("아이디와 비밀번호를 확인해주세요");
                //    }
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
    }
}
