using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FiveMKoreaServer주식
{
    public partial class Chart : Form
    {
        private const string dbconnectionString = "Server=183.109.83.28;Database=jusik;Uid=root;Pwd=!!wjddk4455;CharSet=utf8;";
        private Random rndNum;
        private MySqlConnection connection { get; set; }
        private MySqlDataAdapter adatpterData { get; set; }
        private MySqlCommand command { get; set; }
        private MySqlDataReader MyReader { get; set; }
        private string Query { get; set; }
        private long StatusPrice { get; set; }
        private int currRowIndex { get; set; }
        private int currColIndex { get; set; }
        private long txtMoneyValue { get; set; }
        private string priID { get; set; }
        private string priMoney { get; set; }

        public Chart(string money)
        {
            this.priID = ApplicationState.GetInstance().UserID;
            this.currRowIndex = 0;
            this.currColIndex = 0;
            this.priMoney = money;
            InitializeComponent();
            rndNum = new Random();
            this.AddEventHandler();
        }

        private void AddEventHandler()
        {
            //this.Load += new EventHandler(Chart_Load);
            //this.dataGridView1.CellClick += new DataGridViewCellEventHandler(DataGridView1_CellClick);//
            //this.tbxUserStockPrice.TextChanged += new EventHandler(TbxStockPrice_TextChanged);
            //this.tbxUserStockPrice1.TextChanged += new EventHandler(TbxStockPrice_TextChanged);
            //this.Refresh.Click += Refresh_Click;
            //this.Refresh1.Click += Refresh_Click;
            //this.btBuyStock.Click += BtBuyStock_Click; // 매수 //
            this.btSellStock.Click += BtSellStock_Click; // 매도
            //this.btRecord.Click += btRecord_Click;
            this.btnRefill.Click += BtnRefill_Click;
        }

        private void BtnRefill_Click(object sender, EventArgs e)
        {
            충천및출금 충전및출금1 = new 충천및출금();
            충전및출금1.ShowDialog();
        }

        private void btRecord_Click(object sender, EventArgs e)
        {
            this.DoHIstoryBuyRetriveData();
            this.DoHIstorySellRetriveData();
        }

        private void BtSellStock_Click(object sender, EventArgs e)
        {
            DbMgr mgr = new DbMgr();
            UserItem item = new UserItem();
            bool flag = false;

            string companyName = this.tbxCompanyName1.Text;
            item.Id = this.priID;
            item.Company = companyName;
            item = mgr.SelectMyJu(item);

            string msgBoxText = "";
            string msgBoxCaption = "";
            long ju = Util.StringToParseLong(this.tbxUserStockPrice1.Text);
            long statusOwnMoney = Util.StringToParseLong(this.moneyview.Text);
            long sellStockPrice = Util.StringToParseLong(this.tbxMoney1.Text);
            long 판매단가 = Util.StringToParseLong(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString());

            item.Id = this.priID;

            if (판매단가 < 0)
            {
                msgBoxText = "해당 주식은 현재 매도할 수 없습니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            if (this.tbxMoney.Text == "")
            {
                msgBoxText = "먼저 매도 할 회사를 선택하셔야 됩니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            if (item.MyJu < ju)
            {
                msgBoxText = companyName + " 회사의 보유하고 계신 주 보다 \r\n 많은 양의 주를 매도 신청 하셨습니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            if (item.MyJu <= 0)
            {
                msgBoxText = "해당 회사 주식이 없습니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            else if (item.MyJu > 0)
            {
                long leftMoney = statusOwnMoney + sellStockPrice;
                msgBoxText = "매도 하시겠습니까? \r\n 회사명 : " + companyName + " \r\n 주 : " + ju + "개 \r\n 매도단가 : " + 판매단가;
                msgBoxCaption = "매도 알림";
                if (Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
                {
                    //UPDATE USERLIST 
                    item.Ju = item.MyJu - ju;
                    item.Company = companyName;
                    flag = mgr.UpdateUserList(item);//UPDATE USER LIST 주식 갯수 변경
                    //INSERT HISTORY
                    item.Ju = ju;
                    item.판매단가 = 판매단가;
                    item.SellStockPrice = sellStockPrice;
                    mgr.InsertSellHistory(item);//INSERT HISTORY
                    // update user > money
                    item.LeftMoney = leftMoney;
                    flag = mgr.UpdateLeftMoney(item);//UPDATE LEFT MONEY
                    if (flag)
                    {
                        this.moneyview.Text = leftMoney.ToString();
                        msgBoxText = "매도 완료 \r\n 회사명 : " + item.Company + " \r\n 주 : " + item.Ju + "개 \r\n 매도단가 : " + item.판매단가 + "\r\n 잔액 : " + item.LeftMoney;
                        msgBoxCaption = "매도 완료";
                        Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    }
                }
            }
        }

        private void BtBuyStock_Click(object sender, EventArgs e)
        {
            UserItem item = new UserItem();
            bool flag = false;
            string companyName = this.tbxCompanyName.Text;

            string msgBoxText = "";
            string msgBoxCaption = "";
            
            long ju = Util.StringToParseLong(this.tbxUserStockPrice.Text);
            long statusOwnMoney = Util.StringToParseLong(this.moneyview.Text);
            long buyStockPrice = Util.StringToParseLong(this.tbxMoney.Text);
            long 구매단가 = Util.StringToParseLong(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString());
            if(구매단가 < 0)
            {
                msgBoxText = "해당 주식은 현재 구매할 수 없습니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            if (this.tbxMoney.Text == "")
            {
                msgBoxText = "먼저 매수 할 회사를 선택하셔야 됩니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            if(statusOwnMoney < buyStockPrice)
            {
                msgBoxText = "보유 자금이 부족합니다.";
                msgBoxCaption = "경고";
                Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            else if(statusOwnMoney >= buyStockPrice)
            {
                long leftMoney = statusOwnMoney - buyStockPrice;
                msgBoxText = "구매 하시겠습니까? \r\n 회사명 : "+companyName+" \r\n 주 : "+ju+"개 \r\n 구매단가 : "+ 구매단가;
                msgBoxCaption = "매수 알림";
                if(Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
                {
                    item.Id = this.priID;
                    item.Company = companyName;
                    DbMgr mgr = new DbMgr();
                    item = mgr.GetCompanyJu(item);


                    if (!item.IsData) // insert
                    {
                        item.구매단가 = 구매단가;
                        item.Ju = ju;
                        flag = mgr.InsertUserList(item);
                       
                    }
                    else // update
                    {
                        item.Ju = ju;
                        mgr.UPDATEUserList(item);//UPDATE USER LIST 주식 갯수 변경
                    }

                    
                    item.Ju = ju;
                    item.구매단가 = 구매단가;
                    item.BuyStockPrice = buyStockPrice;
                    mgr.InsertBuyHistory(item);//INSERT HISTORY

                    // update user > money
                    item.LeftMoney = leftMoney;
                    flag = mgr.UpdateLeftMoney(item);//UPDATE LEFT MONEY
                    if (flag)
                    {
                        this.moneyview.Text = leftMoney.ToString();
                        msgBoxText = "구매 완료 \r\n 회사명 : " + item.Company + " \r\n 주 : " + item.Ju + "개 \r\n 구매단가 : " + item.구매단가 + "\r\n 잔액 : " + item.LeftMoney;
                        msgBoxCaption = "구매 완료";
                        Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);
                    }
                }   
            }
        }

        private void Refresh_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            List<TextBox> list = new List<TextBox>();
            Button button = (Button)sender;
            if(button.Name == "Refresh")
            {
                list.Add(this.tbxCompanyName);
                list.Add(this.tbxUserStockPrice);
                list.Add(this.tbxMoney);
            }
            else if(button.Name == "Refresh1")
            {
                list.Add(this.tbxCompanyName1);
                list.Add(this.tbxUserStockPrice1);
                list.Add(this.tbxMoney1);
            }

            this.RefreshGroup(list);
        }

        private void Chart_Load(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.idview.Text = this.priID;
            this.moneyview.Text = this.priMoney;

            this.DBConnection();
            //타이머 시작
            Timer timer = new Timer();
            timer.Interval = 1000; // 1 초
            timer.Tick += new EventHandler(newEventArgsTimer_Tick);
            timer.Start();


        }

        private void TbxStockPrice_TextChanged(object sender, EventArgs e)
        {
            try
            {
                TextBox txtbox = (TextBox)sender;
                if (txtbox.Text == "" & txtbox.Text == null)
                {
                    this.txtMoneyValue = 1;
                    txtbox.Text = "1";
                }
                else
                {
                    this.txtMoneyValue = Util.StringToParseLong(txtbox.Text);
                }
                this.tbxMoney.Text = (StatusPrice * this.txtMoneyValue).ToString();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }
        }

        private void DataGridView1_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                if (e.RowIndex == this.dataGridView1.RowCount - 1)
                {
                    return;
                }

                this.currRowIndex = e.RowIndex;//현재 선택 Index
                this.currColIndex = e.ColumnIndex;

                string companyName = this.dataGridView1.Rows[currRowIndex].Cells[1].FormattedValue.ToString(); // 회사명

                this.tbxCompanyName.Text = companyName;
                this.tbxCompanyName1.Text = companyName;

                this.StatusPrice = Util.StringToParseLong(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 현재 주가

                if (currRowIndex >= 0)
                {
                    //this.StatusPrice = int.Parse(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 현재 주가
                    if (tbxUserStockPrice.Text == "")
                    {
                        tbxUserStockPrice.Text = "1";
                    }

                    if (tbxUserStockPrice1.Text == "")
                    {
                        tbxUserStockPrice1.Text = "1";
                    }

                    this.tbxMoney.Text = (this.StatusPrice * Util.StringToParseLong(tbxUserStockPrice.Text)).ToString(); // 매수액 실시간 업데이트
                    this.tbxMoney1.Text = (this.StatusPrice * Util.StringToParseLong(tbxUserStockPrice1.Text)).ToString();// 매도액 실시간 업데이트
                }

                //this.currRowIndex = e.RowIndex;

                //int leftStock = int.Parse(this.dataGridView1.Rows[currRowIndex].Cells[3].FormattedValue.ToString());
                //int StockPrice = int.Parse(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString());
                //string companyName = this.dataGridView1.Rows[currRowIndex].Cells[1].FormattedValue.ToString();

                //this.StatusPrice = StockPrice;

                //int price = int.Parse(this.tbxStockPrice.Text);
                //this.tbxCompanyName.Text = companyName;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }
        }

        private void 매수액변화()
        {
            long StockPrice = Util.StringToParseLong(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString());

            //this.tbxMoney.Text = (StatusPrice * this.txtMoneyValue).ToString();
        }


        private void newEventArgsTimer_Tick(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            //UPDATE `list` SET `주가` = '9980' WHERE `list`.`No` = 1;
            try
            {
                //100까지 있을때 1~20 나오면은 
                /*
                 1~100 랜덤 돌리는데
                    10 % = + 100  (1~10)
                    20 % = - 100  ( 11~30)
                    5 % = + 1000  ( 31~35)
                 * */
                /*for (int i = 0; i < this.dataGridView1.Rows.Count - 1; i++)
                {
                    int num = rndNum.Next(1, 102);
                    long value = Util.StringToParseInt(this.dataGridView1.Rows[i].Cells[2].FormattedValue.ToString());
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

                    this.Query = "UPDATE `list` SET `주가` = '" + value + "' WHERE `list`.`No` = " + (i + 1);
                    this.command = new MySqlCommand(Query, connection);
                    this.command.CommandText = Query;
                    this.command.ExecuteNonQuery();

                    //6this.MyReader = command.ExecuteReader();
                }*/
                this.DBConnection();

                if (currRowIndex >= 0)
                {
                    
                    this.StatusPrice = Util.StringToParseLong(this.dataGridView1.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 현재 주가

                    //매수
                    if (this.tbxCompanyName.Text != "")
                    {
                        if (tbxUserStockPrice.Text == "")
                        {
                            tbxUserStockPrice.Text = "1";
                        }

                        this.tbxMoney.Text = (this.StatusPrice * Util.StringToParseLong(tbxUserStockPrice.Text)).ToString(); // 매수액 실시간 업데이트
                    }


                    //매도
                    if (this.tbxCompanyName1.Text != "")
                    {
                        if (tbxUserStockPrice1.Text == "")
                        {
                            tbxUserStockPrice1.Text = "1";
                        }
                        this.tbxMoney1.Text = (this.StatusPrice * Util.StringToParseLong(tbxUserStockPrice1.Text)).ToString();// 매도액 실시간 업데이트
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }
        }

        private void DBConnection()
        {
            this.DoRetriveData();
            

            /* 1. 데이터 가져온다.
             * 2. 가져온 데이터 주가 + / - 적용 해준다
             * 3. DB예 CRUD 햬준다
             * 4. datagridview 새로고침 해준다. 
            * */

            //connection.Close();
            this.dataGridView1.Rows[0].Cells[0].Selected = false;
            this.dataGridView1.Rows[currRowIndex].Cells[currColIndex].Selected = true;
        }
        private void DoHIstorySellRetriveData()
        {
            DbMgr mgr = new DbMgr();
            MySqlDataAdapter adapter = mgr.SelectJusikHistorSellList(this.priID);
            DataSet dst = new DataSet();
            adapter.Fill(dst, "list");
            gridSell.DataSource = dst.Tables["list"];
            this.ColumnWidthHandlerHistoryGrid(this.gridSell);
        }

        private void DoHIstoryBuyRetriveData() // History Refresh
        {
            DbMgr mgr = new DbMgr();
            MySqlDataAdapter adapter = mgr.SelectJusikHistorBuyList(this.priID);
            DataSet dst = new DataSet();
            adapter.Fill(dst, "list");
            gridBuy.DataSource = dst.Tables["list"];
            this.ColumnWidthHandlerHistoryGrid(this.gridBuy);
        }


        private void DoRetriveData()
        {
            DbMgr mgr = new DbMgr();
            MySqlDataAdapter adapter = mgr.SelectJusikList(this.priID);
            DataSet dst = new DataSet();
            adapter.Fill(dst, "list");
            dataGridView1.DataSource = dst.Tables["list"];

            this.dataGridView1.Rows[currRowIndex].Selected = true;
            this.ColumnWidthHandler();
            this.매수액변화();
        }

        private void ColumnWidthHandlerHistoryGrid(DataGridView grid)
        {
            //this.dataGridView1.Columns[0].Width = 30; //No
            grid.Columns[0].Width = 120; //Company
            grid.Columns[1].Width = 70; // 단가
            grid.Columns[2].Width = 70; // 주 갯수
            grid.Columns[3].Width = 70; // 금액
            grid.Columns[4].Width = 140; // 시간
        }

        private void ColumnWidthHandler()
        {
            this.dataGridView1.Columns[0].Width = 50;
            this.dataGridView1.Columns[1].Width = 120;
            this.dataGridView1.Columns[2].Width = 70;
            this.dataGridView1.Columns[3].Width = 70;
            this.dataGridView1.Columns[4].Width = 70;
        }

        protected override CreateParams CreateParams
        {
            get
            {
                CreateParams parms = base.CreateParams;
                parms.ClassStyle |= 0x200;
                return parms;
            }
        }

        private void button6_Click(object sender, EventArgs e)
        {
            this.Close();

            로그인 로그인1 = new 로그인();
            로그인1.Show();

        }

        private void button5_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void RefreshGroup(List<TextBox> txtBox)
        {
            foreach(TextBox txt in txtBox)
            {
                txt.Text = "";
            }
        }
    }
}
