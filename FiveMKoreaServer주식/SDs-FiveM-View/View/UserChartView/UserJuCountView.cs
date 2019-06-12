using SDs.FiveM.Controller.Controller.ChartView;
using SDs.FiveM.Model.Item.ChartView;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.View.View.UserChartView
{
    public partial class UserJuCountView : Form
    {
        #region PROPERTY AREA ******************************
        public PublicLoginViewInterface publicLoginView { get; set; }

        private ChartViewController controller = null;
        #endregion

        #region CONTRUCT AREA ******************************
        public UserJuCountView(PublicLoginViewInterface view)
        {
            InitializeComponent();
            this.publicLoginView = view;
            this.controller = new ChartViewController();
            this.AddEventHandler();
        }
        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            this.Load += UserJuCountView_Load;

            this.btnRefresh.Click += BtnRefresh_Click;
            this.btnExit.Click += BtnExit_Click;
        }

        private void DoRefresh()
        {
            try
            {
                this.lblTime.Text = DateTime.Now.ToString("HH:mm:ss") + " 기준 현 보유 주 조회 결과 ";

                IList< UserCompanyItem> list = this.controller.DoRetriveCountData(publicLoginView.LOGIN_ID);
                this.dataGridView1.DataSource = list;
                this.HistoryGridColumnChange(this.dataGridView1);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }

        private void HistoryGridColumnChange(DataGridView grid)
        {
            grid.Columns[2].HeaderText = "회사명";
            grid.Columns[4].HeaderText = "보유 주 갯수";

            grid.Columns[0].Visible = false;
            grid.Columns[1].Visible = false;
            grid.Columns[3].Visible = false;
            grid.Columns[5].Visible = false;
        }
        #endregion

        #region EVENT AREA **********************************
        private void UserJuCountView_Load(object sender, EventArgs e)
        {
            this.DoRefresh();
        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void BtnRefresh_Click(object sender, EventArgs e)
        {
            this.DoRefresh();
        }
        #endregion
    }
}
