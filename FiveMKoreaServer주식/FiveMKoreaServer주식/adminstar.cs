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
    public partial class adminstar : Form
    {
        private System.Threading.Timer timer;
        private Random rndNum;
        private UserItem item = null;
        private bool cellClick = false;
        private bool userGridCellClick = false;
        private bool btUserAddClick = false;

        private int currRowIndex { get; set; }
        private int currColIndex { get; set; }

        private int userGridCurrRowIdx { get; set; }
        private int userGridCurrColIdx { get; set; }

        public adminstar()
        {
            InitializeComponent();
            item = new UserItem();
            rndNum = new Random();
            this.AddEventHandler();

            Bitmap image = new Bitmap(FiveMKoreaServer주식.Properties.Resources.goal);
            
        }

        private void AddEventHandler()
        {
            this.Load += adminstar_Load;
            this.btRefresh.Click += btRefresh_Click;
            this.btExit.Click += btExit_Click;
            this.btAdd.Click += btAdd_Click;
            this.btStop.Click += btStop_Click;
            this.btPlay.Click += btPlay_Click;
            this.btDelete.Click += btDelete_Click;
            this.btUpdate.Click += btUpdate_Click;

            this.newcompany.TextChanged += newcompany_TextChanged;
            this.newmoney.TextChanged += newmoney_TextChanged;
            this.newju.TextChanged += newju_TextChanged;

            this.dataGridView1.CellClick += new DataGridViewCellEventHandler(DataGridView1_CellClick);

            this.ButtonEnabled(true);


            //User
            this.btUserAdd.Click += btUserAdd_Click;
            this.btUserSave.Click += btUserSave_Click;
            this.gridUser.CellClick += gridUser_CellClick;
            this.btUserDelete.Click += btUserDelete_Click;
            this.btUserRefresh.Click += btUserRefresh_Click;
            
        }

        private void btUserRefresh_Click(object sender, EventArgs e)
        {
            this.DoRetriveUserData();
        }

        private void btUserDelete_Click(object sender, EventArgs e)
        {
            if (userGridCellClick)
            {
                userGridCellClick = false;
                DbMgr mgr = new DbMgr();
                bool flag = mgr.DeleteUser(item);
                if (flag)
                {
                    string msgBoxText = item.Id + "사용자 삭제 성공";
                    string msgBoxCaption = "알림";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    return;
                }
                else
                {
                    string msgBoxText = item.Id + "사용자 삭제 실패";
                    string msgBoxCaption = "알림";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }
            }

            this.DoRetriveUserData();
        }

        private void gridUser_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex == this.gridUser.RowCount - 1)
            {
                return;
            }

            userGridCellClick = true;

            item.Id = this.gridUser.Rows[e.RowIndex].Cells[1].FormattedValue.ToString();
            item.Password = this.gridUser.Rows[e.RowIndex].Cells[2].FormattedValue.ToString();
            item.UserMoney = Util.StringToParseLong(this.gridUser.Rows[e.RowIndex].Cells[3].FormattedValue.ToString());

            this.txtId.Text = item.Id;
            this.txtPassword.Text = item.Password.ToString();
            this.txtUserMoney.Text = item.UserMoney.ToString();

            this.userGridCurrRowIdx = e.RowIndex;//현재 선택 Index
            this.userGridCurrColIdx = e.ColumnIndex;
        }

        private void btUserSave_Click(object sender, EventArgs e)
        {
            try
            {
                if (this.txtId.Text == "")
                {
                    string msgBoxText = "아이디를 입력하세요.";
                    string msgBoxCaption = "경고";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (this.txtPassword.Text == "")
                {
                    string msgBoxText = "비밀번호를 입력하세요.";
                    string msgBoxCaption = "경고";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (this.txtUserMoney.Text == "")
                {
                    string msgBoxText = "돈을 입력하세요.";
                    string msgBoxCaption = "경고";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                DbMgr mgr = new DbMgr();

                if (btUserAddClick)
                {
                    this.btUserAddClick = false;

                    UserItem item = new UserItem();
                    item.Id = this.txtId.Text;
                    item.Password = this.txtPassword.Text;
                    item.UserMoney = Util.StringToParseLong(this.txtUserMoney.Text);

                    bool flag = mgr.InsertNewUser(item);
                    if (flag)
                    {
                        string msgBoxText = "신규 사용자 등록이 성공하였습니다.";
                        string msgBoxCaption = "알림";
                        Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                }
            }
            catch (Exception ex)
            {

            }

            this.DoRetriveUserData();
        }

        private void btUserAdd_Click(object sender, EventArgs e)
        {
            this.btUserAddClick = true;

            this.txtId.Text = "";
            this.txtPassword.Text = "";
            this.txtUserMoney.Text = "";
            
        }

        private void newju_TextChanged(object sender, EventArgs e)
        {
            item.LeftCnt = Util.StringToParseLong(((TextBox)sender).Text);
        }

        private void newmoney_TextChanged(object sender, EventArgs e)
        {
            item.JuMoney = Util.StringToParseLong(((TextBox)sender).Text);
        }

        private void newcompany_TextChanged(object sender, EventArgs e)
        {
            item.Company = ((TextBox)sender).Text;
        }

        private void ButtonEnabled(bool flag)
        {

            this.btPlay.Enabled = !flag;
            this.btStop.Enabled = flag;
            this.btDelete.Enabled = !flag;
            this.btUpdate.Enabled = !flag;
        }

        private void btUpdate_Click(object sender, EventArgs e)
        {
            DbMgr mgr = new DbMgr();

            if (cellClick)
            {
                bool flag = mgr.UpdateCompany(item);
                if (flag)
                {
                    string msgBoxText = item.Company + " 회사 정보가 수정 되었습니다.";
                    string msgBoxCaption = "알림";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    cellClick = false;

                    this.DoRetriveJusikData();
                }
            }
            
        }

        private void btDelete_Click(object sender, EventArgs e)
        {
            DbMgr mgr = new DbMgr();

            if (cellClick)
            {
                bool flag = mgr.DeleteCompany(item);

                if (flag)
                {
                    string msgBoxText = item.Company +" 회사가 삭제 되었습니다.";
                    string msgBoxCaption = "알림";
                    Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    cellClick = false;

                    this.DoRetriveJusikData();
                }

            }
            else
            {
                string msgBoxText = item.Company + "먼저 삭제 할 회사를 선택하세요";
                string msgBoxCaption = "알림";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void btPlay_Click(object sender, EventArgs e)
        {
            this.ButtonEnabled(true);
            //this.btPlay.Enabled = false;
            //this.btStop.Enabled = true;

            try
            {
                if (timer == null)
                {
                    System.Threading.TimerCallback callback = DoTimer;
                    timer = new System.Threading.Timer(callback, 1, 1000, 5 * 1000);
                }
            }
            catch (Exception ex)
            {

            }
        }

        private void btStop_Click(object sender, EventArgs e)
        {
            //this.btPlay.Enabled = true;
            //this.btStop.Enabled = false;
            this.ButtonEnabled(false);


            if (timer != null)
            {
                timer.Dispose();
                timer = null;
            }

        }
        private void DataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex == this.dataGridView1.RowCount - 1)
            {
                return;
            }

            cellClick = true;

            item.No = int.Parse(this.dataGridView1.Rows[e.RowIndex].Cells[0].FormattedValue.ToString());
            item.Company = this.dataGridView1.Rows[e.RowIndex].Cells[1].FormattedValue.ToString();
            item.JuMoney = Util.StringToParseLong(this.dataGridView1.Rows[e.RowIndex].Cells[2].FormattedValue.ToString());
            item.LeftCnt = Util.StringToParseLong(this.dataGridView1.Rows[e.RowIndex].Cells[3].FormattedValue.ToString());

            this.newcompany.Text = item.Company;
            this.newmoney.Text = item.JuMoney.ToString();
            this.newju.Text = item.LeftCnt.ToString();

            this.currRowIndex = e.RowIndex;//현재 선택 Index
            this.currColIndex = e.ColumnIndex;
        }

        private void btAdd_Click(object sender, EventArgs e)
        {
            
            DbMgr mgr = new DbMgr();
            item.Company = this.newcompany.Text;
            item.JuMoney = Util.StringToParseLong(this.newmoney.Text);
            item.LeftCnt = Util.StringToParseLong(this.newju.Text);

            if (item.Company == "")
            {
                string msgBoxText = "회사명을 먼저 입력하세요";
                string msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            bool flag = mgr.InsertNewCompany(item);

            if (flag)
            {
                string msgBoxText = item.Company + " 회사가 추가 되었습니다.";
                string msgBoxCaption = "알림";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                this.DoRetriveJusikData();
            }
            
        }

        private void btRefresh_Click(object sender, EventArgs e)
        {
            item.Company = "";
            item.JuMoney = 0;
            item.LeftCnt = 0;

            this.newcompany.Text = "";
            this.newmoney.Text = "0";
            this.newju.Text = "0";
        }

        private void adminstar_Load(object sender, EventArgs e)
        {
            this.DoRetriveJusikData();
            this.DoRetriveUserData();

            //Timer timer = new Timer();
            //timer.Interval = 5000; // 5 초
            //timer.Tick += new EventHandler(newEventArgsTimer_Tick);
            //timer.Start();

            System.Threading.TimerCallback callback = DoTimer;
            timer = new System.Threading.Timer(callback, 1, 1000, 5 * 1000);
            //timer = DoTimer;
            //timer.Interval = 5000; // 5 초
            //timer.Tick += new EventHandler(newEventArgsTimer_Tick);
            //timer.Start();
        }
        private void DoUpdateJusikData()
        {
            try
            {
                Console.WriteLine("newEventArgsTimer_Tick " + DateTime.Now);
                //100까지 있을때 1~20 나오면은 
                /*
                 1~100 랜덤 돌리는데
                    10 % = + 100  (1~10)
                    20 % = - 100  ( 11~30)
                    5 % = + 1000  ( 31~35)
                 * */
                for (int i = 0; i < this.dataGridView1.Rows.Count - 1; i++)
                {
                    int num = rndNum.Next(1, 215);
                    long value = Util.StringToParseLong(this.dataGridView1.Rows[i].Cells[2].FormattedValue.ToString());
                    int No = int.Parse(this.dataGridView1.Rows[i].Cells[0].FormattedValue.ToString());
                    Console.WriteLine("Grid Row: "+(i+1) +" Value :  "+ value);

                    #region 주가변동
                    if (num >= 1 & num <= 30) // 30 % = + 4000  (1)
                    {
                        value = value + 20;
                    }
                    else if (num >= 31 & num <= 100) // 70 % = - 300  ( 2~11)
                    {
                        value = value - 10;
                    }
                    else if (num >= 101 & num <= 101) // 1 % = + 150  ( 12~22)
                    {
                        value = value - 100;
                    }
                    else if (num >= 102 & num <= 102) // 1 % = + 150  ( 12~22)
                    {
                        value = value + 500;
                    }
                    // 51%
                    #endregion

                    if (num >= 1 & num <= 30) // 30 %
                    {
                        value = value + 1;
                    }
                    else if (num >= 31 & num <= 60) // 30 %
                    {
                        value = value - 1;
                    }
                    else if (num >= 61 & num <= 100) // 40 %
                    {
                        value = value - 2;
                    }
                    else if (num >= 101 & num <= 140) // 40 %
                    {
                        value = value + 2;
                    }
                    else if (num >= 141 & num <= 141) // 1 %
                    {
                        value = value + 20;
                    }
                    else if (num >= 142 & num <= 142) // 1 %
                    {
                        value = value - 20;
                    }
                    else if (num >= 143 & num <= 163) // 20 %
                    {
                        value = value - 5;
                    }
                    else if (num >= 164 & num <= 184) // 20 %
                    {
                        value = value + 5;
                    }
                    else if (num >= 185 & num <= 200) // 15 %
                    {
                        value = value + 4;
                    }
                    else if (num >= 201 & num <= 215) // 15 %
                    {
                        value = value + 4;
                    }
                    else if (num >= 216 & num <= 220) // 4 %
                    {
                        value = value - 300;
                    }
                    else if (num >= 221 & num <= 221) // 1 %
                    {
                        value = value - 5000;
                    }
                    Console.WriteLine((i + 1) + " 번째 데이터 " + value);

                    string Query = "UPDATE `list` SET `JuMoney` = '" + value + "' WHERE `list`.`No` = " + No;

                    MySqlCommand command = new MySqlCommand(Query, DbConnector.GetInstance());
                    command.CommandText = Query;
                    command.ExecuteNonQuery();

                    this.DoRetriveJusikData();
                    this.DoRetriveUserData();
                }

            }
            catch (Exception ex)
            {

            }
        }

        private void DoTimer(object param)
        {
            if (this.InvokeRequired)
            {
                this.BeginInvoke(new MethodInvoker(delegate
                {
                    this.DoUpdateJusikData();
                }));
            }
            else
            {
                this.DoUpdateJusikData();
            }
        }


        private void DoRetriveUserData()
        {
            DbMgr mgr = new DbMgr();
            MySqlDataAdapter adapter = mgr.SelectUserLstAll();
            DataSet dst = new DataSet();
            adapter.Fill(dst, "list");
            gridUser.DataSource = dst.Tables["list"];
            this.ColumnWidthHandler(this.gridUser);
        }

        private void DoRetriveJusikData()
        {
            DbMgr mgr = new DbMgr();
            MySqlDataAdapter adapter = mgr.SelectJusikListAll();
            DataSet dst = new DataSet();
            adapter.Fill(dst, "lists");
            dataGridView1.DataSource = dst.Tables["lists"];

            this.dataGridView1.Rows[currRowIndex].Selected = true;
            this.ColumnWidthHandler(this.dataGridView1);

            this.dataGridView1.Rows[0].Cells[0].Selected = false;
            this.dataGridView1.Rows[currRowIndex].Cells[currColIndex].Selected = true;
        }

        private void ColumnWidthHandler(DataGridView grid)
        {
            grid.Columns[0].Width = 50;
            grid.Columns[1].Width = 120;
            grid.Columns[2].Width = 70;
            grid.Columns[3].Width = 70;
        }

        private void btExit_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        #region TRASH *********************************************************
        private void newEventArgsTimer_Tick(object sender, EventArgs e)
        {
            try
            {
                Console.WriteLine("newEventArgsTimer_Tick " + DateTime.Now);
                //100까지 있을때 1~20 나오면은 
                /*
                 1~100 랜덤 돌리는데
                    10 % = + 100  (1~10)
                    20 % = - 100  ( 11~30)
                    5 % = + 1000  ( 31~35)
                 * */
                for (int i = 0; i < this.dataGridView1.Rows.Count - 1; i++)
                {
                    int num = rndNum.Next(1, 102);
                    long value = Util.StringToParseLong(this.dataGridView1.Rows[i].Cells[2].FormattedValue.ToString());
                    if (num >= 1 & num <= 30) // 30 % = + 4000  (1)
                    {
                        value = value + 20;
                    }
                    else if (num >= 31 & num <= 100) // 70 % = - 300  ( 2~11)
                    {
                        value = value - 10;
                    }
                    else if (num >= 101 & num <= 101) // 1 % = + 150  ( 12~22)
                    {
                        value = value - 100;
                    }
                    else if (num >= 102 & num <= 102) // 1 % = + 150  ( 12~22)
                    {
                        value = value + 500;
                    }
                    // 51%
                    Console.WriteLine((i + 1) + " 번째 데이터 " + value);

                    string Query = "UPDATE `list` SET `JuMoney` = '" + value + "' WHERE `list`.`No` = " + (i + 1);

                    MySqlCommand command = new MySqlCommand(Query, DbConnector.GetInstance());
                    command.CommandText = Query;
                    command.ExecuteNonQuery();

                    this.DoRetriveJusikData();
                    this.DoRetriveUserData();
                }

            }
            catch (Exception ex)
            {

            }
        }
        #endregion
    }
}
