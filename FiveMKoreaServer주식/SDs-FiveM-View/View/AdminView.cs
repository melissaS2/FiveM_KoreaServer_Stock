using SDs.FiveM.Controller.Controller.AdminView;
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
            this.btExit.Click += BtExit_Click;
            this.btAdd.Click += BtAdd_Click;

            this.grd_StockCompany.CellClick += Grd_StockCompany_CellClick;

            this.btDelete.Click += BtDelete_Click;
            this.btUpdate.Click += BtUpdate_Click;
            
            this.FormClosed += AdminView_FormClosed;
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
            //item.Company = "";
            //item.JuMoney = 0;
            //item.LeftCnt = 0;

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
