using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.Sample;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.View.View.Sample
{
    public partial class SampleView : Form
    {
        public SampleView()
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
                IList<AdminUserItem> list = Mapper.Instance().QueryForList<AdminUserItem>("SelectAdminUsers", null);
                //Mapper.Configure(System.Configuration.ConfigurationSettings.AppSettings)
                this.dataGridView.DataSource = list;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
    }
}
