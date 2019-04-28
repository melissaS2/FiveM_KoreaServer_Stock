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
    public partial class 회원가입 : Form
    {
        public 회원가입()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            string constring = "Server=183.109.83.28;Database=jusik;Uid=root;Pwd=!!wjddk4455;CharSet=utf8;";
            string Query = "insert into jusik.user (id,pw,money) values('" + this.addid.Text + "','" + this.addpw.Text + "','" + this.addmoney.Text + "');";

            MySqlConnection conDatabase = new MySqlConnection(constring);
            MySqlCommand cmdDatabase = new MySqlCommand(Query, conDatabase);
            MySqlDataReader MyReader;


            addid.Clear();
            addpw.Clear();
            addmoney.Clear();

            try
            {
                conDatabase.Open();
                MyReader = cmdDatabase.ExecuteReader();
                MessageBox.Show("주식 테스트 프로그램 가입을 환영 합니다.");
                Environment.Exit(0);
                while (MyReader.Read())
                {

                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            addid.Clear();
            addpw.Clear();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
