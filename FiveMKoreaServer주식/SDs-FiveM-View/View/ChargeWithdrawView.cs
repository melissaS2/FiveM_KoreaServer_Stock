using SDs.FiveM.Controller.Controller.ChargeWithdrawView;
using SDs.FiveM.Model.Constants;
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
    public partial class ChargeWithdrawView : Form
    {
        #region PROPERTY AREA ******************************
        public string LOGIN_ID { get; set; }
        public int user_id { get; set; } // 고유번호

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
        /// [인게임 머니 => 기존 보유 투자 자금]
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param> 
        /// 충전
        private void BtnRefillStock_Click(object sender, EventArgs e)
        {
            try
            {
                IList<LoginItem> selectGameMoneyList = this.controller.DoRetriveGameMoney(view.user_id);
                if (selectGameMoneyList[0].bank >= FiveMUtilClass.StringToParseInt(this.txtStockRefill.Text))
                {
                    int newMoney = selectGameMoneyList[0].bank - FiveMUtilClass.StringToParseInt(this.txtGameRefill.Text);

                    LoginItem item = new LoginItem();

                    item.id = view.LOGIN_ID;
                    item.user_id = view.user_id;
                    item.bank = newMoney;
                    item.refillMoney = FiveMUtilClass.StringToParseInt(this.txtStockRefill.Text);
                    item.type = FiveMConstants.RefillTypeStock;

                    this.controller.DoUpdateInGameMoney(item);
                    this.controller.DoInsertStockMoneyRefill(item);
                }
                else if (selectGameMoneyList[0].bank < FiveMUtilClass.StringToParseLong(this.txtStockRefill.Text))
                {
                    string msgBoxText = "보유하고 계신 인게임 머니보다 많은 금액을 충전신청 하였습니다.";
                    string msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }


        /// <summary>
        /// [기존 보유 투자 자금 => 인게임머니]
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        /// 출금
        private void BtnRefillGame_Click(object sender, EventArgs e)
        {
            try
            {
                IList<LoginItem> selectStockMoneyList = this.controller.DoRetriveStockMoney(view.LOGIN_ID);
                if (selectStockMoneyList[0].money >= FiveMUtilClass.StringToParseInt(this.txtGameRefill.Text))
                {
                    long newMoney = selectStockMoneyList[0].money - FiveMUtilClass.StringToParseInt(this.txtStockMoney.Text);

                    LoginItem item = new LoginItem();

                    item.id = view.LOGIN_ID;
                    item.user_id = view.user_id;
                    item.money = (int)newMoney;
                    item.refillMoney = FiveMUtilClass.StringToParseInt(this.txtGameRefill.Text);
                    item.type = FiveMConstants.RefillTypeGame;

                    this.controller.DoUpdateInStockMoney(item);
                    this.controller.DoInsertInGameMoneyRefill(item);
                }
                else if (selectStockMoneyList[0].money < FiveMUtilClass.StringToParseLong(this.txtGameRefill.Text))
                {
                    string msgBoxText = "보유 한 투자가능 금액보다 많은 금액을 출금신청 하였습니다.";
                    string msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void BtnInit_Click(object sender, EventArgs e)
        {
            this.txtStockRefill.Text = "0";
            this.txtGameRefill.Text = "0";
        }

        private void ChargeWithdrawView_Load(object sender, EventArgs e)
        {
            try
            {
                //Init txtGameMoney 인게임머니
                IList<LoginItem> selectGameMoneyList = this.controller.DoRetriveGameMoney(view.user_id);
                this.txtGameMoney.Text = selectGameMoneyList[0].bank.ToString();


                //Init txtStockMoney 보유 투자 자금
                IList<LoginItem> selectStockMoneyList = this.controller.DoRetriveStockMoney(view.LOGIN_ID);
                this.txtStockMoney.Text = selectStockMoneyList[0].money.ToString();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        #endregion

    }
}
