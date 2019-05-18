using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.AdminView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.ChartView
{
    public class ChartViewController
    {
        public ChartViewController()
        {

        }

        public IList<AdminViewItem> DoRetriveJusikData()
        {
            IList<AdminViewItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<AdminViewItem>("select-CompanyList", null);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }
    }
}
