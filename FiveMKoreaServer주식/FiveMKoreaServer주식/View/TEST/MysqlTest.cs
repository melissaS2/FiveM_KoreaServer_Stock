using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using FiveMKoreaServer주식.Item;
using IBatisNet.Common;
using IBatisNet.DataMapper;

namespace FiveMKoreaServer주식.View.TEST
{
    public partial class MysqlTest : Form
    {
        public MysqlTest()
        {
            InitializeComponent();
            this.AddEventHandler();
        }

        private void AddEventHandler()
        {
            this.btnRetrive.Click += BtnRetrive_Click;
        }

        private void BtnRetrive_Click(object sender, EventArgs e)
        {
            try
            {

                IList<Shippers> list = Mapper.Instance().QueryForList<Shippers>("SelectShippers", null);
                this.dataGridView.DataSource = list;
            }

            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
    }
}
