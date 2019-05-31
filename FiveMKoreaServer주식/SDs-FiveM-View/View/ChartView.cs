using SDs.FiveM.Controller.Controller.ChartView;
using SDs.FiveM.Model.Item.AdminView;
using SDs.FiveM.Model.Item.ChartView;
using SDs.FiveM.Model.Item.PublicLoginView;
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
    public partial class ChartView : Form
    {
        #region PROPERTY AREA ******************************
        public PublicLoginViewInterface publicLoginView { get; set; }

        private ChartViewController controller = null;

        private int currRowIndex { get; set; }
        private int currColIndex { get; set; }
        private long statusPrice { get; set; } // realTime Money Price
        #endregion

        #region CONTRUCT AREA ******************************
        public ChartView(PublicLoginViewInterface view)
        {
            InitializeComponent();
            this.publicLoginView = view;

            this.currRowIndex = -1;
            this.currColIndex = -1;

            this.controller = new ChartViewController();
            this.SetBindingControls();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void SetBindingControls()
        {
            this.txtId.Text = this.publicLoginView.LOGIN_ID;
            this.txtMoney.Text = this.publicLoginView.MONEY.ToString();
        }

        private void AddEventHandler()
        {
            this.Load += ChartView_Load;
            this.FormClosed += ChartView_FormClosed;
            //
            this.grd_StockStatusList.CellClick += Grd_StockStatusList_CellClick;
            this.btnExit.Click += BtnExit_Click;
            this.btnLogOut.Click += BtnLogOut_Click;
            //매수
            //this.tbxBuyStockCount.TextChanged += TbxBuyStockCount_TextChanged;
            /* Timer에서 실시간 데이터를 변경해 주기 
             * 때문에 여기서도 변경 해 주면 2번 호출이 됨 
             * */
            this.btnBuyStock.Click += BtnBuyStock_Click;
            this.btnBuyRefresh.Click += BtnBuyRefresh_Click;
            //매도
            //this.tbxSellStockCount.TextChanged += TbxBuyStockCount_TextChanged;
            /* Timer에서 실시간 데이터를 변경해 주기 
            * 때문에 여기서도 변경 해 주면 2번 호출이 됨 
            * */
            this.btnSellStock.Click += BtnSellStock_Click;
            this.btnSellRefresh.Click += BtnBuyRefresh_Click;
            //기록 화면
            this.btnRecordRefresh.Click += BtnRecordRefresh_Click;
            this.btnRefill.Click += BtnRefill_Click;
        }

        private void DoLoad()
        {
            try
            {
                this.DoRetriveJusikData();

                if (currRowIndex >= 0)
                {
                    this.statusPrice = FiveMUtilClass.StringToParseLong(this.grd_StockStatusList.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 현재 주가

                    //매수
                    //if (this.tbxCompanyName.Text != "")
                    {
                        if (this.tbxBuyStockCount.Text == "")
                        {
                            this.tbxBuyStockCount.Text = "1";
                        }

                        this.tbxBuyMoney.Text = (this.statusPrice *
                            FiveMUtilClass.StringToParseLong(tbxBuyStockCount.Text)).ToString(); // 매수액 실시간 업데이트
                    }


                    //매도
                    //if (this.tbxCompanyName1.Text != "")
                    {
                        if (this.tbxSellStockCount.Text == "")
                        {
                            this.tbxSellStockCount.Text = "1";
                        }
                        this.tbxSellMoney.Text = (this.statusPrice *
                            FiveMUtilClass.StringToParseLong(tbxSellStockCount.Text)).ToString();// 매도액 실시간 업데이트
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        
        private void HistoryGridColumnChange(DataGridView grid)
        {
            grid.Columns[0].HeaderText = "아이디";
            grid.Columns[1].HeaderText = "회사명";
            grid.Columns[2].HeaderText = "거래단가";
            grid.Columns[3].HeaderText = "거래갯수";
            grid.Columns[4].HeaderText = "단가 * 갯수";
            grid.Columns[5].HeaderText = "거래 시간";

            grid.Columns[0].Visible = false;
            grid.Columns[5].Width = 120;
        }

        private void StockridColumnChange(DataGridView grid)
        {
            grid.Columns[0].HeaderText = "번호";
            grid.Columns[1].HeaderText = "회사명";
            grid.Columns[2].HeaderText = "거래단가";
            grid.Columns[3].HeaderText = "거래 가능 주";

            grid.Columns[2].Width = 200;
        }

        private void GridPropertyChange(DataGridView grid)
        {
            //그리드 뷰 전체 선택 할 수 있도록
            grid.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            //그리드 뷰 젤앞열 지우기
            grid.RowHeadersVisible = false;
            //그리드 뷰 컬럼폭 채우기
            //grid.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.AllCells;
            //데이터 그리드 뷰 가득 채우기
            //grid.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
            //마지막 행 삭제
            //grid.AllowUserToAddRows = false;
        }

        private void DoHIstoryBuyRetriveData() // History Refresh
        {
            IList<HistoryItem> list = this.controller.DoRefreshBuyHistory(this.publicLoginView.LOGIN_ID);
            grid_BuyHistory.DataSource = list;
            this.HistoryGridColumnChange(grid_BuyHistory);
            this.GridPropertyChange(grid_BuyHistory);
        }

        private void DoHIstorySellRetriveData()
        {
            IList<HistoryItem> list = this.controller.DoRefreshSellHistory(this.publicLoginView.LOGIN_ID);
            grid_SellHistory.DataSource = list;
            this.HistoryGridColumnChange(grid_SellHistory);
            this.GridPropertyChange(grid_SellHistory);
        }

        private void DoHistoryRefresh()
        {
            this.DoHIstoryBuyRetriveData();
            this.DoHIstorySellRetriveData();
        }

        private void Initailization(List<TextBox> txtBox)
        {
            foreach (TextBox txt in txtBox)
            {
                txt.Text = "";
            }

            this.currColIndex = -1;
            this.currRowIndex = -1;
        }

        private void DoUpdateUserMoney(long leftUserMoney) // Do not Direct Call
        {
            LoginItem item = new LoginItem();

            item.id = this.publicLoginView.LOGIN_ID;
            item.money = leftUserMoney;

            this.controller.DoUpdateUserMoney(item);
        }

        private void DoRetriveJusikData() // Do not direct call
        {
            IList<AdminViewItem> list = this.controller.DoRetriveJusikData();
            this.grd_StockStatusList.DataSource = list;
            this.StockridColumnChange(grd_StockStatusList);
            this.GridPropertyChange(grd_StockStatusList);
            if (currRowIndex != -1)
            {
                this.grd_StockStatusList.CurrentCell = grd_StockStatusList.Rows[currRowIndex].Cells[0];
            }
        }
        #endregion

        #region EVENT AREA **********************************
        private void BtnExit_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void BtnLogOut_Click(object sender, EventArgs e)
        {
            this.Close();

            PublicLoginView view = new PublicLoginView();
            view.Show();
        }

        private void Grd_StockStatusList_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                if (e.RowIndex == - 1)
                {
                    return;
                }

                this.currRowIndex = e.RowIndex;//현재 선택 Index
                this.currColIndex = e.ColumnIndex;//

                string companyName = this.grd_StockStatusList.Rows[currRowIndex].Cells[1].FormattedValue.ToString(); // 회사명

                this.tbxBuyCompanyName.Text = companyName;
                this.tbxSellCompanyName.Text = companyName;

                //long StatusPrice = FiveMUtilClass.StringToParseLong(this.grd_StockStatusList.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 현재 주가

                if (currRowIndex >= 0)
                {
                    if (tbxBuyStockCount.Text == "")
                    {
                        tbxBuyStockCount.Text = "1";
                    }

                    if (tbxSellStockCount.Text == "")
                    {
                        tbxSellStockCount.Text = "1";
                    }

                    this.tbxBuyMoney.Text = (statusPrice * FiveMUtilClass.StringToParseLong(tbxBuyStockCount.Text)).ToString(); // 매수액 실시간 업데이트
                    this.tbxSellMoney.Text = (statusPrice * FiveMUtilClass.StringToParseLong(tbxSellStockCount.Text)).ToString();// 매도액 실시간 업데이트
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }
        }

        private void BtnBuyStock_Click(object sender, EventArgs e)
        {
            try
            {
                string msgBoxText = "";
                string msgBoxCaption = "";

                if (currRowIndex == -1)
                {
                    msgBoxText = "회사를 먼저 선택하세요.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }
                AdminViewItem companyItem = new AdminViewItem();
                UserCompanyItem userCompanyBuyItem = new UserCompanyItem();

                string companyName = this.tbxBuyCompanyName.Text;
                long buyJuCount = FiveMUtilClass.StringToParseLong(this.tbxBuyStockCount.Text);//구매하고자 하는 주 갯수
                long userMoney = this.publicLoginView.MONEY; // 사용자 보유 돈
                long buyStockPrice = FiveMUtilClass.StringToParseLong(this.tbxBuyMoney.Text); // 매수액

                //그리드 데이터
                int no = FiveMUtilClass.StringToParseInt(this.grd_StockStatusList.Rows[currRowIndex].Cells[0].FormattedValue.ToString()); //번호
                string CompanyName = this.grd_StockStatusList.Rows[currRowIndex].Cells[1].FormattedValue.ToString(); //회사이름
                long ju= FiveMUtilClass.StringToParseLong(this.grd_StockStatusList.Rows[currRowIndex].Cells[3].FormattedValue.ToString()); //회사 남은 주 갯수
                long juMoney = FiveMUtilClass.StringToParseLong(this.grd_StockStatusList.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 구매단가

                companyItem.No = no;
                companyItem.CompanyName = CompanyName;

                if (ju < 0)
                {
                    msgBoxText =  companyName +"회사의 구매 가능한 주 갯수가 없습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (ju < buyJuCount)
                {
                    msgBoxText = companyName + "회사의 구매 가능한 주 보다 \r\n많은 갯수를 구매신청 하였습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (this.tbxBuyMoney.Text == "")
                {
                    msgBoxText = "먼저 매수 할 회사를 선택하셔야 됩니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (tbxBuyStockCount.Text == "" || tbxBuyStockCount.Text == "0")
                {
                    msgBoxText = "매수 수량을 입력하세요.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (userMoney < buyStockPrice)
                {
                    msgBoxText = "보유 자금이 부족합니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                else if (userMoney >= buyStockPrice)
                {
                    long leftMoney = userMoney - buyStockPrice;
                    long leftJu = ju - buyJuCount;
                    //if (Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
                    {
                        userCompanyBuyItem.userid = this.publicLoginView.LOGIN_ID;
                        userCompanyBuyItem.company = companyName;
                        userCompanyBuyItem.won = juMoney;
                        //userCompanyBuyItem.ju = leftJu;
                        userCompanyBuyItem.totalprice = buyStockPrice;

                        //유저 별 해당 회사 가지고 있는 주 갯수
                        IList<UserCompanyItem> list = this.controller.DoGetCompanyJuCnt(userCompanyBuyItem);

                        if (list.Count > 1)
                        {
                            msgBoxText = "데이터 조작 오류 발생 \r\n 관리자 문의 바랍니다.";
                            msgBoxCaption = "데이터 오류";
                            //유저 : 회사 > 1:1 관계에서 1: N 관계로 데이터 조작 오류 발생. 1:1관계로 변경 필요
                            FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                            return;
                        }

                        else if (list.Count == 0)
                        {
                            userCompanyBuyItem.ju = buyJuCount;
                            this.controller.DoInsertCompanyJu(userCompanyBuyItem);
                        }

                        else if (list.Count == 1)
                        {
                            userCompanyBuyItem.ju = buyJuCount + userCompanyBuyItem.ju; // 가지고 있던 주 갯수 + 새로 살 갯수
                            this.controller.DoUpdateCompanyJu(userCompanyBuyItem);
                        }

                        companyItem.LeftCnt = leftJu;

                        this.controller.DoInsertBuyHistory(userCompanyBuyItem);
                        this.DoUpdateUserMoney(leftMoney);
                        this.controller.DoUpdateCompanyLeftJuCnt(companyItem);
                        this.txtMoney.Text = leftMoney.ToString();
                        this.DoHIstoryBuyRetriveData();

                        msgBoxText = "구매 완료 \r\n 회사명 : " + companyName + " \r\n 주 : " + buyJuCount + "개 \r\n 구매단가 : " + juMoney + "\r\n 거래 후 잔액 : " + leftMoney;
                        msgBoxCaption = "구매 완료";
                        FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);

                        this.publicLoginView.MONEY = leftMoney;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void ChartView_Load(object sender, EventArgs e)
        {
            this.DoHistoryRefresh();

            //throw new NotImplementedException();
            Timer timer = new Timer();
            timer.Interval = 1000; // 1 초
            timer.Tick += new EventHandler(NewEventArgsTimer_Tick);
            timer.Start();
        }

        private void NewEventArgsTimer_Tick(object sender, EventArgs e)
        {
            this.DoLoad();
        }

        private void ChartView_FormClosed(object sender, FormClosedEventArgs e)
        {
            Environment.Exit(0);
        }

        private void BtnRefill_Click(object sender, EventArgs e)
        {
            Form frm = FiveMUtilClass.GetForm("ChargeWithdrawView");
            if (frm == null)
            {
                ChargeWithdrawView view = new ChargeWithdrawView(publicLoginView);
                view.Name = "ChargeWithdrawView";
                view.Show();
            }
            else
            {
                frm.BringToFront();
            }
        }

        private void BtnSellStock_Click(object sender, EventArgs e)
        {
            try
            {
                string msgBoxText = "";
                string msgBoxCaption = "";


                if (currRowIndex == -1)
                {
                    msgBoxText = "회사를 먼저 선택하세요.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                AdminViewItem companyItem = new AdminViewItem();
                UserCompanyItem userCompanySellItem = new UserCompanyItem();

                string companyName = this.tbxSellCompanyName.Text;
                long sellJuCount = FiveMUtilClass.StringToParseLong(this.tbxSellStockCount.Text); // 매도 할 주 갯수
                long userMoney = this.publicLoginView.MONEY; // 사용자 보유 돈
                long sellStockPrice = FiveMUtilClass.StringToParseLong(this.tbxSellMoney.Text); // 매도액

                //그리드 데이터
                int no = FiveMUtilClass.StringToParseInt(this.grd_StockStatusList.Rows[currRowIndex].Cells[0].FormattedValue.ToString()); //번호
                string CompanyName = this.grd_StockStatusList.Rows[currRowIndex].Cells[1].FormattedValue.ToString(); //회사이름
                long JuMoney = FiveMUtilClass.StringToParseLong(this.grd_StockStatusList.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 판매단가

                userCompanySellItem.userid = this.publicLoginView.LOGIN_ID;
                userCompanySellItem.company = companyName;
                userCompanySellItem.won = JuMoney;

                IList<UserCompanyItem> list = this.controller.DoGetCompanyJuCnt(userCompanySellItem);

                if (list.Count > 1)
                {
                    msgBoxText = "데이터 오류. 관리자 문의 바람";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    //사용자 1명당 한 회사에 대해서 2개의 Row를 가지고 있는 것임
                    return;
                }
                if (list.Count == 0)
                {
                    msgBoxText = "해당 회사 주식이 없습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (JuMoney < 0)
                {
                    //주가가 마이너스 라서
                    msgBoxText = "해당 주식은 현재 매도할 수 없습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (this.tbxSellMoney.Text == "")
                {
                    msgBoxText = "먼저 매도 할 회사를 선택하셔야 됩니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (tbxSellStockCount.Text == "" || tbxSellStockCount.Text == "0")
                {
                    msgBoxText = "매도 수량을 입력하세요.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (list[0].ju < sellJuCount)
                {
                    msgBoxText = companyName + " 회사의 보유하고 계신 주 보다 \r\n 많은 양의 주를 매도 신청 하셨습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (list[0].ju == 0)
                {
                    msgBoxText = "해당 회사 주식이 없습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                else if (list[0].ju > 0)
                {
                    long leftMoney = userMoney + sellStockPrice;
                    //if (Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
                    userCompanySellItem.ju = list[0].ju - sellJuCount;
                    userCompanySellItem.totalprice = sellStockPrice;
                    {
                        //STEP 1. Upddate User's Ju Count Where Company
                        this.controller.DoUpdateCompanyJu(userCompanySellItem);
                        //STEP 2. Insert History Table
                        this.controller.DoInsertSellHistory(userCompanySellItem);
                        //STEP 3. UPDATE USER LEFT MONEY
                        this.DoUpdateUserMoney(leftMoney);
                    }

                    msgBoxText = "매도 완료 \r\n 회사명 : " + companyName + " \r\n 주 : " + sellJuCount + "개 \r\n 판매단가 : " + JuMoney + "\r\n 거래 후 잔액 : " + leftMoney;
                    msgBoxCaption = "구매 완료";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Exclamation);

                    this.txtMoney.Text = leftMoney.ToString();
                    this.publicLoginView.MONEY = leftMoney;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

       

        private void BtnRecordRefresh_Click(object sender, EventArgs e)
        {
            try
            {
                this.DoHistoryRefresh();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void TbxBuyStockCount_TextChanged(object sender, EventArgs e)
        {
            //try
            //{
            //    TextBox txtbox = (TextBox)sender;
            //    if (txtbox.Text == "" & txtbox.Text == null)
            //    {
            //        this.txtMoneyValue = 1;
            //        txtbox.Text = "1";
            //    }
            //    else
            //    {
            //        this.txtMoneyValue = Util.StringToParseLong(txtbox.Text);
            //    }
            //    this.tbxMoney.Text = (StatusPrice * this.txtMoneyValue).ToString();
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.StackTrace);
            //}
        }

        private void BtnBuyRefresh_Click(object sender, EventArgs e)
        {
            List<TextBox> list = new List<TextBox>();
            Button button = (Button)sender;
            if (button.Name == "BuyRefresh")
            {
                list.Add(this.tbxBuyCompanyName);
                list.Add(this.tbxBuyMoney);

                this.tbxBuyStockCount.Text = "0";
            }
            else if (button.Name == "SellRefresh")
            {
                list.Add(this.tbxSellCompanyName);
                list.Add(this.tbxSellMoney);

                this.tbxSellStockCount.Text = "0";
            }

            this.Initailization(list);
        }
        #endregion
    }
}
