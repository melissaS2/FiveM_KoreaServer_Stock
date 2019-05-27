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
        #endregion


        #region CONTRUCT AREA ******************************
        public AdminChargeWithdrawView()
        {
            InitializeComponent();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += AdminChargeWithdrawView_Load;
        }

        private void AdminChargeWithdrawView_Load(object sender, EventArgs e)
        {
            try
            {
                this.DoRefresh();
            }catch(Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
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
            grid.Columns[3].HeaderText = "유저 고유 번호";
            grid.Columns[4].HeaderText = "신청 금액";
            grid.Columns[0].Width = 100;
            grid.Columns[2].Width = 100;
            grid.Columns[3].Width = 50;
            grid.Columns[4].Width = 200;
            //grid.DataSource = cars;
        }
        #endregion

        #region EVENT AREA **********************************
        #endregion
    }
}
