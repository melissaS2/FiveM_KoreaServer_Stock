using SDs.FiveM.Controller.Controller.ChargeWithdrawView;
using SDs.FiveM.Model.Constants;
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

            //this.txtStockRefill.TextChanged += TxtStockRefill_TextChanged;
            //this.txtGameRefill.TextChanged += TxtGameRefill_TextChanged;

            this.btnRefillStock.Click += BtnRefillStock_Click;
            this.btnRefillGame.Click += BtnRefillGame_Click;

            this.btnCancel.Click += BtnCancel_Click;
            this.btnInit.Click += BtnInit_Click;
            this.btnExit.Click += BtnExit_Click;
        }

        private void BtnCancel_Click(object sender, EventArgs e)
        {
            try
            {
                int activeTab = this.tabStockMoneyRefill.SelectedIndex;

                DataGridView grid = null;

                if (activeTab == 0)
                    grid = this.grid_GameMoney;
                else if (activeTab == 1)
                    grid = this.grid_StockMoney;

                if (grid.RowCount > 0)
                {
                    int money = 0;
                    for (int i = 0; i < grid.RowCount; i++)
                    {
                        string text = grid.Rows[i].Cells[0].FormattedValue.ToString();
                        if (text == "True")
                        {
                            money += FiveMUtilClass.StringToParseInt(grid.Rows[i].Cells[4].FormattedValue.ToString());
                        }
                    }

                    LoginItem item = new LoginItem();
                    item.user_id = view.user_id;
                    item.bank = money;

                    this.controller.DoUpdateInGameMoney(item);

                    for (int i = 0; i < grid.RowCount; i++)
                    {
                        string text = grid.Rows[i].Cells[0].FormattedValue.ToString();
                        if (text == "True")
                        {
                            int no = FiveMUtilClass.StringToParseInt(grid.Rows[i].Cells[1].FormattedValue.ToString());
                            this.controller.DoDeleteGameMoneyRefillData(no);
                        }
                    }

                    string msgBoxText = "신청 취소 완료";
                    string msgBoxCaption = "알림";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                }

                this.DoRefresh();
            }catch(Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void TxtStockRefill_TextChanged(object sender, EventArgs e)
        {
            try
            {
                TextBox txtbox = (TextBox)sender;
                if (txtbox.Text == "" || txtbox.Text == null || txtbox.Text == "0")
                {
                    txtbox.Text = "1";
                }

                else if (FiveMUtilClass.StringToParseInt(txtbox.Text) > 
                    FiveMUtilClass.StringToParseInt(this.txtGameMoney.Text))
                {
                    txtbox.Text = this.txtGameMoney.Text;
                    return;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.StackTrace);
            }
        }

        private void TxtGameRefill_TextChanged(object sender, EventArgs e)
        {
            try
            {
                TextBox txtbox = (TextBox)sender;
                if (txtbox.Text == "" || txtbox.Text == null || txtbox.Text == "0")
                {
                    txtbox.Text = "1";
                }

                else if (FiveMUtilClass.StringToParseInt(txtbox.Text) >
                    FiveMUtilClass.StringToParseInt(this.txtStockMoney.Text))
                {
                    txtbox.Text = this.txtStockMoney.Text;
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.StackTrace);
            }
        }

        private void DoRetriveDataGrid()
        {
            try
            {
                RefillMoneyApplicationItem item = new RefillMoneyApplicationItem();

                item.id = this.view.LOGIN_ID;
                item.type = "S";

                IList<RefillMoneyApplicationItem> gaemMoneylist = this.controller.DoRetriveGameMoneyRefillData(item);

                item.type = "I";
                IList<RefillMoneyApplicationItem> stockMoneylist = this.controller.DoRetriveGameMoneyRefillData(item);
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

            grid.Columns[1].Visible = false;
            grid.Columns[2].Visible = false;
            grid.Columns[3].Visible = false;
            grid.Columns[5].Visible = false;

            grid.Columns[0].HeaderText = "신청 취소";
            grid.Columns[4].HeaderText = "신청 금액";
            grid.Columns[0].Width = 100;
            grid.Columns[4].Width = 200;
            //grid.DataSource = cars;
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
            string msgBoxText = "";
            string msgBoxCaption = "";
            try
            {
                IList<LoginItem> selectGameMoneyList = this.controller.DoRetriveGameMoney(view.user_id);

                if (txtStockRefill.Text == "" || txtStockRefill.Text == null || txtStockRefill.Text == "0")
                {
                    msgBoxText = "충전 금액을 입력하세요";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                else if (selectGameMoneyList[0].bank < FiveMUtilClass.StringToParseLong(this.txtStockRefill.Text))
                {
                    msgBoxText = "보유하고 계신 인게임 머니보다 많은 금액을 충전신청 하였습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                else if ((long)selectGameMoneyList[0].bank >= FiveMUtilClass.StringToParseLong(this.txtStockRefill.Text))
                {
                    int newMoney = selectGameMoneyList[0].bank - FiveMUtilClass.StringToParseInt(this.txtStockRefill.Text);

                    LoginItem item = new LoginItem();

                    item.id = view.LOGIN_ID;
                    item.user_id = view.user_id;
                    item.bank = newMoney;
                    item.refillMoney = FiveMUtilClass.StringToParseInt(this.txtStockRefill.Text);
                    item.type = FiveMConstants.RefillTypeStock;

                    this.controller.DoUpdateInGameMoney(item);
                    this.controller.DoInsertStockMoneyRefill(item);
                }
                
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            msgBoxText = "신청 완료";
            msgBoxCaption = "알림";
            FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);

            this.DoRefresh();
        }

        /// <summary>
        /// [기존 보유 투자 자금 => 인게임머니]
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        /// 출금
        private void BtnRefillGame_Click(object sender, EventArgs e)
        {
            string msgBoxText = "";
            string msgBoxCaption = "";
            try
            {
                IList<LoginItem> selectStockMoneyList = this.controller.DoRetriveStockMoney(view.LOGIN_ID);

                if (txtGameRefill.Text == "" || txtGameRefill.Text == null || txtGameRefill.Text == "0")
                {
                    msgBoxText = "출금 금액을 입력하세요";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                else if (selectStockMoneyList[0].money < FiveMUtilClass.StringToParseLong(this.txtGameRefill.Text))
                {
                    msgBoxText = "보유 한 투자가능 금액보다 많은 금액을 출금신청 하였습니다.";
                    msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                else if(selectStockMoneyList[0].money >= FiveMUtilClass.StringToParseInt(this.txtGameRefill.Text))
                {
                    long newMoney = selectStockMoneyList[0].money - FiveMUtilClass.StringToParseInt(this.txtGameRefill.Text);

                    LoginItem item = new LoginItem();

                    item.id = view.LOGIN_ID;
                    item.user_id = view.user_id;
                    item.money = (int)newMoney;
                    item.refillMoney = FiveMUtilClass.StringToParseInt(this.txtGameRefill.Text);
                    item.type = FiveMConstants.RefillTypeGame;

                    this.controller.DoUpdateInStockMoney(item);
                    this.controller.DoInsertInGameMoneyRefill(item);
                }
                
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            msgBoxText = "신청 완료";
            msgBoxCaption = "알림";
            FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
            
            this.DoRefresh();

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
                //Timer timer = new Timer();
                //timer.Interval = 1000; // 1 초
                //timer.Tick += new EventHandler(NewEventArgsTimer_Tick);
                //timer.Start();

                this.DoRefresh();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void NewEventArgsTimer_Tick(object sender, EventArgs e)
        {
            this.DoRefresh();
        }

        private void DoRefresh()
        {
            try
            {
                //Init txtGameMoney 인게임머니
                IList<LoginItem> selectGameMoneyList = this.controller.DoRetriveGameMoney(view.user_id);
                this.txtGameMoney.Text = selectGameMoneyList[0].bank.ToString();


                //Init txtStockMoney 보유 투자 자금
                IList<LoginItem> selectStockMoneyList = this.controller.DoRetriveStockMoney(view.LOGIN_ID);
                this.txtStockMoney.Text = selectStockMoneyList[0].money.ToString();

                this.DoRetriveDataGrid();
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        #endregion

    }
}
