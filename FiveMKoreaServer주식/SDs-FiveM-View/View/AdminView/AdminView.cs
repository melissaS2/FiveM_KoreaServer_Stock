using SDs.FiveM.Controller.Controller.AdminView;
using SDs.FiveM.Model.Item.AdminView;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Setting;
using SDs.FiveM.Model.Util;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.View.View.AdminView
{
    public partial class AdminView : Form
    {
        #region PROPERTY AREA ******************************
        private AdminViewController controller = null;
        private System.Threading.Timer timer;
        private Random rndNum;
        //private UserItem item = null;
        private bool cellClick = false;
        private bool userGridCellClick = false;
        private bool btUserAddClick = false;

        private int currRowIndex { get; set; }
        private int currColIndex { get; set; }

        private int userGridCurrRowIdx { get; set; }
        private int userGridCurrColIdx { get; set; }
        #endregion

        #region CONTRUCT AREA ******************************
        public AdminView()
        {
            InitializeComponent();
            this.controller = new AdminViewController();
            rndNum = new Random();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += AdminView_Load;
            this.btRefresh.Click += BtRefresh_Click;
            this.btnChargeWithdrawView.Click += BtnChargeWithdrawView_Click;
            this.btExit.Click += BtExit_Click;
            this.btAdd.Click += BtAdd_Click;

            this.grd_StockCompany.CellClick += Grd_StockCompany_CellClick;
            
            this.btDelete.Click += BtDelete_Click;
            this.btUpdate.Click += BtUpdate_Click;

            this.btPlay.Click += BtPlay_Click;
            this.btStop.Click += BtStop_Click;
            
            this.FormClosed += AdminView_FormClosed;

            this.ButtonEnabled(false);

            this.grd_User.CellClick += Grd_User_CellClick;

            this.btUserAdd.Click += BtUserAdd_Click;
            this.btUserDelete.Click += BtUserDelete_Click;
            this.btUserRefresh.Click += BtUserRefresh_Click;
            this.btUserSave.Click += BtUserSave_Click;

            this.btnSetting.Click += BtnSetting_Click;
        }

        private void BtnSetting_Click(object sender, EventArgs e)
        {
            Form frm = FiveMUtilClass.GetForm("SettingView");
            if (frm == null)
            {
                SettingView view = new SettingView();
                view.Name = "SettingView";
                view.ShowDialog();
            }
            else
            {
                frm.BringToFront();
            }
        }

        private void BtnChargeWithdrawView_Click(object sender, EventArgs e)
        {
            Form frm = FiveMUtilClass.GetForm("AdminChargeWithdrawView");
            if (frm == null)
            {
                AdminChargeWithdrawView view = new AdminChargeWithdrawView();
                view.Name = "AdminChargeWithdrawView";
                view.Show();
            }
            else
            {
                frm.BringToFront();
            }
        }

        private void BtStop_Click(object sender, EventArgs e)
        {
            this.ButtonEnabled(false);

            if (timer != null)
            {
                timer.Dispose();
                timer = null;
            }
        }

        private void BtUserSave_Click(object sender, EventArgs e)
        {
            LoginItem item = new LoginItem();

            if (userGridCellClick)
            {
                item.no = int.Parse(this.grd_User.Rows[userGridCurrRowIdx].Cells[0].FormattedValue.ToString());
                item.id = this.txtId.Text;
                item.pw = this.txtPw.Text;
                item.money = FiveMUtilClass.StringToParseLong(this.txtUserMoney.Text);

                bool flag = this.controller.DoUpdateUser(item); 
                //
                if (flag)
                {
                    string msgBoxText = item.id + " 회원 정보가 수정 되었습니다.";
                    string msgBoxCaption = "알림";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    userGridCellClick = false;

                    this.DoRetriveUserData();
                }
            }
        }

        private void BtUserRefresh_Click(object sender, EventArgs e)
        {
            this.txtId.Text = "";
            this.txtPw.Text = "";
            this.txtUserMoney.Text = "0";
            //Simply
            this.userGridCellClick = false;
            this.userGridCurrColIdx = 0;
            this.userGridCurrRowIdx = 0;
        }

        private void Grd_User_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            try
            {
                //throw new NotImplementedException();
                if (e.RowIndex == this.grd_User.RowCount)
            {
                return;
            }

            userGridCellClick = true;

            LoginItem item = new LoginItem();

            item.no = int.Parse(this.grd_User.Rows[e.RowIndex].Cells[0].FormattedValue.ToString());
            item.id = this.grd_User.Rows[e.RowIndex].Cells[1].FormattedValue.ToString();
            item.pw = this.grd_User.Rows[e.RowIndex].Cells[2].FormattedValue.ToString();
            item.money = FiveMUtilClass.StringToParseLong(this.grd_User.Rows[e.RowIndex].Cells[3].FormattedValue.ToString());
            
            this.txtId.Text = item.id;
            this.txtPw.Text = item.pw;
            this.txtUserMoney.Text = item.money.ToString();

            this.userGridCurrRowIdx = e.RowIndex;//현재 선택 Index
            this.userGridCurrColIdx = e.ColumnIndex;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void BtUserDelete_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            LoginItem param = new LoginItem();
            
            if (userGridCellClick)
            {
                
                param.no = int.Parse(this.grd_User.Rows[userGridCurrRowIdx].Cells[0].FormattedValue.ToString());
                param.id = this.grd_User.Rows[userGridCurrRowIdx].Cells[1].FormattedValue.ToString();

                userGridCellClick = false;
                userGridCurrColIdx = 0;
                userGridCurrRowIdx = 0;

                bool flag = this.controller.DoDeleteUser(param);
                if (flag)
                {
                    //return;
                }
                else
                {
                    string msgBoxText = param.id + "사용자 삭제 실패";
                    string msgBoxCaption = "알림";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    //return;
                }
            }

            this.DoRetriveUserData();
        }

        private void BtUserAdd_Click(object sender, EventArgs e)
        {
            try
            {
                //throw new NotImplementedException();
                //throw new NotImplementedException();
                if (this.txtId.Text == "" || this.txtId.Text == null)
                {
                    FiveMUtilClass.GetMessageBox("ID와 Password는 빈칸이 될 수 없습니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                if (this.txtPw.Text == "" || this.txtPw.Text == null)
                {
                    FiveMUtilClass.GetMessageBox("ID와 Password는 빈칸이 될 수 없습니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                //if (this.txtMoney.Text == "" || this.txtMoney.Text == null)
                //{
                //    FiveMUtilClass.GetMessageBox("ID와 Password는 빈칸이 될 수 없습니다.","경고",MessageBoxButtons.OK,MessageBoxIcon.Warning);
                //}
                LoginItem param = new LoginItem();
                param.id = this.txtId.Text;
                param.pw = this.txtPw.Text;
                param.money = long.Parse(this.txtUserMoney.Text);

                this.controller.DoNewMemberSignUp(param);
                this.DoRetriveUserData();

            }catch(Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void ButtonEnabled(bool flag)
        {
            this.btPlay.Enabled = !flag;
            this.btnSetting.Enabled = !flag;
            this.btDelete.Enabled = !flag;
            this.btUpdate.Enabled = !flag;

            this.btStop.Enabled = flag;
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

        private void DoUpdateJusikData()
        {
            try
            {
                //Console.WriteLine("newEventArgsTimer_Tick " + DateTime.Now);
                //100까지 있을때 1~20 나오면은 
                /*
                 1~100 랜덤 돌리는데
                    10 % = + 100  (1~10)
                    20 % = - 100  ( 11~30)
                    5 % = + 1000  ( 31~35)
                 * */
                Console.WriteLine("Timer Count "+ DateTime.Now);
                for (int i = 0; i < this.grd_StockCompany.Rows.Count - 1; i++)
                {
                    int num = rndNum.Next(1, 215);
                    int No = int.Parse(this.grd_StockCompany.Rows[i].Cells[0].FormattedValue.ToString());
                    string companyName = this.grd_StockCompany.Rows[i].Cells[1].FormattedValue.ToString();
                    long value = FiveMUtilClass.StringToParseLong(this.grd_StockCompany.Rows[i].Cells[2].FormattedValue.ToString());
                    long leftCnt = FiveMUtilClass.StringToParseLong(this.grd_StockCompany.Rows[i].Cells[3].FormattedValue.ToString());

                    //Console.WriteLine("Grid Row: " + (i + 1) + " Value :  " + value);

                    #region 주가변동
                    //if (num >= 1 & num <= 30) // 30 % = + 4000  (1)
                    //{
                    //    value = value + 20;
                    //}
                    //else if (num >= 31 & num <= 100) // 70 % = - 300  ( 2~11)
                    //{
                    //    value = value - 10;
                    //}
                    //else if (num >= 101 & num <= 101) // 1 % = + 150  ( 12~22)
                    //{
                    //    value = value - 100;
                    //}
                    //else if (num >= 102 & num <= 102) // 1 % = + 150  ( 12~22)
                    //{
                    //    value = value + 500;
                    //}
                    //// 51%
                    #endregion

                    Console.WriteLine("FiveMConfig.ThirtyPercent_1 " + FiveMConfig.ThirtyPercent_1);
                    Console.WriteLine("FiveMConfig.ThirtyPercent_2 " + FiveMConfig.ThirtyPercent_2);
                    if (num >= 1 & num <= 30) // 30 %
                    {
                        //value = value + 1;
                        value = value + FiveMConfig.ThirtyPercent_1;
                    }
                    else if (num >= 31 & num <= 60) // 30 %
                    {
                        //value = value - 1;
                        value = value + FiveMConfig.ThirtyPercent_2;
                    }
                    else if (num >= 61 & num <= 100) // 40 %
                    {
                        //value = value - 2;
                        value = value + FiveMConfig.FourtyPercent_1;
                    }
                    else if (num >= 101 & num <= 140) // 40 %
                    {
                        //value = value + 2;
                        value = value + FiveMConfig.FourtyPercent_2;
                    }
                    else if (num >= 141 & num <= 141) // 1 %
                    {
                        //value = value + 20;
                        value = value + FiveMConfig.OnePercent_1;
                    }
                    else if (num >= 142 & num <= 142) // 1 %
                    {
                        //value = value - 20;
                        value = value + FiveMConfig.OnePercent_2;
                    }
                    else if (num >= 143 & num <= 163) // 20 %
                    {
                        //value = value - 5;
                        value = value + FiveMConfig.TwentyPercent_1;
                    }
                    else if (num >= 164 & num <= 184) // 20 %
                    {
                        //value = value + 5;
                        value = value + FiveMConfig.TwentyPercent_2;
                    }
                    else if (num >= 185 & num <= 200) // 15 %
                    {
                        //value = value + 4;
                        value = value + FiveMConfig.FifteenPercent_1;
                    }
                    else if (num >= 201 & num <= 215) // 15 %
                    {
                        //value = value + 4;
                        value = value + FiveMConfig.FifteenPercent_2;
                    }
                    else if (num >= 216 & num <= 220) // 4 %
                    {
                        //value = value - 300;
                        value = value + FiveMConfig.FourPercent_1;
                    }
                    else if (num >= 221 & num <= 221) // 1 %
                    {
                        //value = value - 5000;
                        value = value + FiveMConfig.OnePercent_3;
                    }
                    //Console.WriteLine((i + 1) + " 번째 데이터 " + value);

                    AdminViewItem param = new AdminViewItem();
                    param.No = No;
                    param.CompanyName = companyName;
                    param.JuMoney = value;
                    param.LeftCnt = leftCnt;

                    this.controller.DoUpdateCompany(param);
                }

                this.DoRetriveJusikData();
                this.DoRetriveUserData();

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void BtPlay_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.ButtonEnabled(true);

            try
            {
                if (timer == null)
                {
                    System.Threading.TimerCallback callback = DoTimer;
                    //timer = new System.Threading.Timer(callback, null, 0,500000);
                    timer = new System.Threading.Timer(callback, null, 0, FiveMConfig.TimerSecond * 100000);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void BtUpdate_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            AdminViewItem item = new AdminViewItem();

            if (cellClick)
            {
                item.No = int.Parse(this.grd_StockCompany.Rows[currRowIndex].Cells[0].FormattedValue.ToString());
                item.CompanyName = this.txtCompany.Text;
                item.JuMoney = FiveMUtilClass.StringToParseLong(this.txtMoney.Text);
                item.LeftCnt = FiveMUtilClass.StringToParseLong(this.txtLeftCnt.Text);

                bool flag = this.controller.DoUpdateCompany(item);

                if (flag)
                {
                    string msgBoxText = item.CompanyName + " 회사 정보가 수정 되었습니다.";
                    string msgBoxCaption = "알림";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    cellClick = false;

                    this.DoRetriveJusikData();
                }
            }
        }

        private void BtDelete_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            AdminViewItem item = new AdminViewItem();

            if (cellClick)
            {
                item.No = int.Parse(this.grd_StockCompany.Rows[currRowIndex].Cells[0].FormattedValue.ToString());
                item.CompanyName = this.txtCompany.Text;

                bool isSuccess = this.controller.DoDeleteCompany(item);

                if (isSuccess)
                {
                    string msgBoxText = item.CompanyName + " 회사가 성공적으로 삭제 되었습니다.";
                    string msgBoxCaption = "알림";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                    cellClick = false;
                    currRowIndex = 0;
                    currColIndex = 0;

                    this.DoRetriveJusikData();
                }
            }
            else
            {
                string msgBoxText = "삭제 할 회사를 선택하세요";
                string msgBoxCaption = "경고";
                FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
        }

        private void Grd_StockCompany_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            if (e.RowIndex == this.grd_StockCompany.RowCount)
            {
                return;
            }

            cellClick = true;

            AdminViewItem item = new AdminViewItem();

            item.No = int.Parse(this.grd_StockCompany.Rows[e.RowIndex].Cells[0].FormattedValue.ToString());
            item.CompanyName = this.grd_StockCompany.Rows[e.RowIndex].Cells[1].FormattedValue.ToString();
            item.JuMoney = FiveMUtilClass.StringToParseLong(this.grd_StockCompany.Rows[e.RowIndex].Cells[2].FormattedValue.ToString());
            item.LeftCnt = FiveMUtilClass.StringToParseLong(this.grd_StockCompany.Rows[e.RowIndex].Cells[3].FormattedValue.ToString());

            this.txtCompany.Text = item.CompanyName;
            this.txtMoney.Text = item.JuMoney.ToString();
            this.txtLeftCnt.Text = item.LeftCnt.ToString();

            this.currRowIndex = e.RowIndex;//현재 선택 Index
            this.currColIndex = e.ColumnIndex;
        }

        private void BtAdd_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            AdminViewItem item = new AdminViewItem();
            item.CompanyName = this.txtCompany.Text;
            item.JuMoney = FiveMUtilClass.StringToParseLong(this.txtMoney.Text);
            item.LeftCnt = FiveMUtilClass.StringToParseLong(this.txtLeftCnt.Text);

            if (item.CompanyName == "")
            {
                string msgBoxText = "회사명을 먼저 입력하세요";
                string msgBoxCaption = "경고";
                FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return;
            }

            bool isSuccess = this.controller.DoCreateNewCompany(item);

            if (isSuccess)
            {
                string msgBoxText = item.CompanyName + " 회사가 추가 되었습니다.";
                string msgBoxCaption = "알림";
                FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Information);
                this.DoRetriveJusikData();
            }
        }

        private void BtRefresh_Click(object sender, EventArgs e)
        {
            this.txtCompany.Text = "";
            this.txtMoney.Text = "0";
            this.txtLeftCnt.Text = "0";

            this.cellClick = false;
            this.currRowIndex = 0;
            this.currColIndex = 0;
        }

        private void DoRetriveJusikData()
        {
            IList<AdminViewItem> list = this.controller.DoRetriveJusikData();
            this.grd_StockCompany.DataSource = list;

            this.ColumnWidthHandler(this.grd_StockCompany);

            if (this.grd_StockCompany.RowCount != 0)
            {
                this.grd_StockCompany.Rows[currRowIndex].Selected = true;
                this.grd_StockCompany.Rows[0].Cells[0].Selected = false;
                this.grd_StockCompany.Rows[currRowIndex].Cells[currColIndex].Selected = true;
            }
        }

        private void DoRetriveUserData()
        {
            IList<LoginItem> list = this.controller.DoRetriveUserData();
            this.grd_User.DataSource = list;

            this.ColumnWidthHandler(this.grd_User);
            if (this.grd_User.RowCount != 0)
            {
                this.grd_User.Rows[userGridCurrColIdx].Selected = true;
                this.grd_User.Rows[0].Cells[0].Selected = false;
                this.grd_User.Rows[userGridCurrRowIdx].Cells[userGridCurrColIdx].Selected = true;
            }
        }

        private void ProgramExit()
        {
            Environment.Exit(0);
        }
        #endregion

        #region EVENT AREA **********************************
        private void AdminView_Load(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.DoRetriveJusikData();
            this.DoRetriveUserData();
        }

        private void ColumnWidthHandler(DataGridView grid)
        {
            grid.Columns[0].Width = 50;
            grid.Columns[1].Width = 120;
            grid.Columns[2].Width = 70;
            grid.Columns[3].Width = 70;
        }

        private void AdminView_FormClosed(object sender, FormClosedEventArgs e)
        {
            //throw new NotImplementedException();
            this.ProgramExit();
        }

        private void BtExit_Click(object sender, EventArgs e)
        {
            //throw new NotImplementedException();
            this.ProgramExit();
        }
        #endregion
    }
}
