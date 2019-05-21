using SDs.FiveM.Controller.Controller.ChargeWithdrawView;
using SDs.FiveM.Model.Item.PublicLoginView;
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
    public partial class ChargeWithdrawView : Form
    {
        #region PROPERTY AREA ******************************
        public PublicLoginViewInterface view { get; set; }
        public ChargeWithdrawViewController controller { get; set; }
        #endregion

        #region CONTRUCT AREA ******************************
        public ChargeWithdrawView(PublicLoginViewInterface view)
        {
            InitializeComponent();
            this.view = view;
            this.controller = new ChargeWithdrawViewController();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += ChargeWithdrawView_Load;

            this.btnRefillStock.Click += BtnRefillStock_Click;
            this.btnRefillGame.Click += BtnRefillGame_Click;

            this.btnInit.Click += BtnInit_Click;
            this.btnExit.Click += BtnExit_Click;
        }
        #endregion

        #region EVENT AREA **********************************
        /// <summary>
        /// [기존 보유 투자 자금 => 인게임머니]
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnRefillGame_Click(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// [인게임 머니 => 기존 보유 투자 자금]
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void BtnRefillStock_Click(object sender, EventArgs e)
        {

        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void BtnInit_Click(object sender, EventArgs e)
        {
            this.txtGameRefill.Text = "0";
            this.txtStockRefill.Text = "0";
        }

        private void ChargeWithdrawView_Load(object sender, EventArgs e)
        {
            //this.controller.DoRetriveGameMoney(); 확인 필요

            //Init txtStockMoney 
            IList<LoginItem> list = this.controller.DoRetriveStockMoney(view.LOGIN_ID);
            this.txtStockMoney.Text = list[0].money.ToString();
        }
        #endregion

    }
}
