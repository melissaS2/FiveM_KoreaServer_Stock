using SDs.FiveM.Controller.Controller.ChartView;
using SDs.FiveM.Model.Item.AdminView;
using SDs.FiveM.Model.Item.ChartView;
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

            this.currRowIndex = 0;
            this.currColIndex = 0;

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

            this.grd_StockStatusList.CellClick += Grd_StockStatusList_CellClick;

            this.btnExit.Click += BtnExit_Click;
            this.btnLogOut.Click += BtnLogOut_Click;
            this.btnBuyStock.Click += BtnBuyStock_Click;
        }

        private void BtnBuyStock_Click(object sender, EventArgs e)
        {
            UserCompanyBuyItem userCompanyBuyItem = new UserCompanyBuyItem();

            string msgBoxText = "";
            string msgBoxCaption = "";

            string companyName = this.tbxBuyCompanyName.Text;
            long ju = FiveMUtilClass.StringToParseLong(this.tbxBuyStockCount.Text);
            long userMoney = this.publicLoginView.MONEY; // 사용자 보유 돈
            long buyStockPrice = FiveMUtilClass.StringToParseLong(this.tbxBuyMoney.Text); // 매수액
            long JuMoney = FiveMUtilClass.StringToParseLong(this.grd_StockStatusList.Rows[currRowIndex].Cells[2].FormattedValue.ToString()); // 구매단가

            if(JuMoney < 0)
            {
                msgBoxText = "해당 주식은 현재 구매할 수 없습니다.";
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
                //msgBoxText = "구매 하시겠습니까? \r\n 회사명 : " + companyName + " \r\n 주 : " + ju + "개 \r\n 구매단가 : " + 구매단가;
                //msgBoxCaption = "매수 알림";
                //if (Util.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.YesNo, MessageBoxIcon.Information) == DialogResult.Yes)
                {
                    userCompanyBuyItem.userid = this.publicLoginView.LOGIN_ID;
                    userCompanyBuyItem.company = companyName;
                    userCompanyBuyItem.won = JuMoney;
                    //userCompanyBuyItem.ju = ju;
                    IList <UserCompanyBuyItem> list = this.controller.DoGetCompanyJuCnt(userCompanyBuyItem);
                    if (list.Count > 1)
                    {
                        msgBoxText = "데이터 조작 오류 발생 \r\n 관리자 문의 바랍니다.";
                        msgBoxCaption = "데이터 오류";
                        //유저 : 회사 > 1:1 관계에서 1: N 관계로 데이터 조작 오류 발생. 1:1관계로 변경 필요
                        FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        return;
                    }

                    else if(list.Count == 0){ 
                        this.controller.DoInsertCompanyJu(userCompanyBuyItem);
                    }

                    else if(list.Count == 1) {
                        userCompanyBuyItem.ju = ju + userCompanyBuyItem.ju; // 가지고 있던 주 갯수 + 새로 살 갯수
                        this.controller.DoUpdateCompanyJu(userCompanyBuyItem);
                    }


                }
            }
        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void BtnLogOut_Click(object sender, EventArgs e)
        {
            PublicLoginView view = new PublicLoginView();
            view.Show();
        }

        private void DoRetriveJusikData() // Do not direct call
        {
            IList<AdminViewItem> list = this.controller.DoRetriveJusikData();
            this.grd_StockStatusList.DataSource = list;
        }
        #endregion

        #region EVENT AREA **********************************
        private void Grd_StockStatusList_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                if (e.RowIndex == - 1)
                {
                    return;
                }

                this.currRowIndex = e.RowIndex;//현재 선택 Index
                this.currColIndex = e.ColumnIndex;

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

        private void ChartView_Load(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            Timer timer = new Timer();
            timer.Interval = 1000; // 1 초
            timer.Tick += new EventHandler(NewEventArgsTimer_Tick);
            timer.Start();
        }

        private void NewEventArgsTimer_Tick(object sender, EventArgs e)
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
        #endregion
    }
}
