using SDs.FiveM.Controller.Controller.ChartView;
using SDs.FiveM.Model.Item.AdminView;
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
        private ChartViewController controller = null;

        private int currRowIndex { get; set; }
        private int currColIndex { get; set; }
        private long statusPrice { get; set; } // realTime Money Price
        #endregion

        #region CONTRUCT AREA ******************************
        public ChartView()
        {
            InitializeComponent();

            this.currRowIndex = 0;
            this.currColIndex = 0;

            this.controller = new ChartViewController();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += ChartView_Load;

            this.grd_StockStatusList.CellClick += Grd_StockStatusList_CellClick;
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
