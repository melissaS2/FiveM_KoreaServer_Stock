using SDs.FiveM.Controller.Controller.AdminChargeWithdrawView;
using SDs.FiveM.Controller.Controller.ChargeWithdrawView;
using SDs.FiveM.Model.Item.ChargeWithdrawView;
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
    public partial class AdminChargeWithdrawView : Form
    {
        #region PROPERTY AREA ******************************
        public AdminChargeWithdrawViewController controller { get; set; }
        #endregion


        #region CONTRUCT AREA ******************************
        public AdminChargeWithdrawView()
        {
            InitializeComponent();
            this.controller = new AdminChargeWithdrawViewController();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += AdminChargeWithdrawView_Load;

            this.btnApply.Click += BtnApply_Click;
            this.btnCancel.Click += BtnCancel_Click;
            this.btnRefresh.Click += BtnRefresh_Click;
        }

        private void BtnCancel_Click(object sender, EventArgs e)
        {
            try
            {
                bool isTrue = false;
                int activeTab = this.tabControl.SelectedIndex;

                DataGridView grid = null;

                if (activeTab == 0)
                    grid = this.grid_GameMoney;
                else if (activeTab == 1)
                    grid = this.grid_StockMoney;

                for (int i = 0; i < grid.RowCount; i++)
                {
                    string text = grid.Rows[i].Cells[0].FormattedValue.ToString();
                    if (text == "True")
                    {
                        isTrue = true;
                        RefillMoneyApplicationItem refillItem = new RefillMoneyApplicationItem();
                        //no , id , refillMoney , Type 
                        //Type S  , I 인지에 따라 Controller에서 map파일 다르게 ㄱ
                        //S 일때 취소 시 인게임 돈 증가 , I 일때 취소 시 주식 돈 증가
                        refillItem.no = FiveMUtilClass.StringToParseInt(grid.Rows[i].Cells[1].FormattedValue.ToString());
                        refillItem.id = grid.Rows[i].Cells[2].FormattedValue.ToString();
                        refillItem.user_id = FiveMUtilClass.StringToParseInt(grid.Rows[i].Cells[3].FormattedValue.ToString());
                        refillItem.refillMoney = FiveMUtilClass.StringToParseInt(grid.Rows[i].Cells[4].FormattedValue.ToString()); ;
                        refillItem.type = grid.Rows[i].Cells[5].FormattedValue.ToString();

                        this.controller.DoUpdateRefillMoney(refillItem);
                        this.controller.DoDeleteRefillMoney(refillItem);
                    }
                }

                if (isTrue)
                {
                    string msgBoxText = "취소 완료";
                    string msgBoxCaption = "알림";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                }

                this.DoRefresh();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void BtnApply_Click(object sender, EventArgs e)
        {
            
        }

        private void DoRefresh()
        {
            try
            {
                RefillMoneyApplicationItem item = new RefillMoneyApplicationItem();
                ChargeWithdrawViewController controller = new ChargeWithdrawViewController();

                //item.id = this.view.LOGIN_ID;
                item.type = "S";

                IList<RefillMoneyApplicationItem> gaemMoneylist = controller.DoRetriveGameMoneyRefillData(item);

                item.type = "I";
                IList<RefillMoneyApplicationItem> stockMoneylist = controller.DoRetriveGameMoneyRefillData(item);
                this.grid_GameMoney.DataSource = gaemMoneylist;
                this.grid_StockMoney.DataSource = stockMoneylist;

                this.GridColumnHandler(this.grid_GameMoney);
                this.GridColumnHandler(this.grid_StockMoney);

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void GridColumnHandler(DataGridView grid)
        {

            grid.Columns[1].Visible = false; // 인덱스 번호
            grid.Columns[2].Visible = true; // 유저 ID
            grid.Columns[3].Visible = true; // 고유번호
            grid.Columns[5].Visible = false; // TYPE

            grid.Columns[0].HeaderText = "신청 취소";
            grid.Columns[2].HeaderText = "유저 ID";
            grid.Columns[3].HeaderText = "번호";
            grid.Columns[4].HeaderText = "신청 금액";
            grid.Columns[0].Width = 80;
            grid.Columns[2].Width = 100;
            grid.Columns[3].Width = 70;
            grid.Columns[4].Width = 200;
            //grid.DataSource = cars;
        }
        #endregion

        #region EVENT AREA **********************************
        private void BtnRefresh_Click(object sender, EventArgs e)
        {
            this.DoRefresh();
        }

        private void AdminChargeWithdrawView_Load(object sender, EventArgs e)
        {
            try
            {
                this.DoRefresh();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        #endregion
    }
}
