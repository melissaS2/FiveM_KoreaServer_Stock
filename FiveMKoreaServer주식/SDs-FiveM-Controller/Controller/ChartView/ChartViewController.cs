using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.AdminView;
using SDs.FiveM.Model.Item.ChartView;
using SDs.FiveM.Model.Util;
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

        public void DoInsertCompanyJu(UserCompanyBuyItem param)
        {
            object call = Mapper.Instance().Insert("insert-UserCompanyBuy", param);
        }

        public void DoUpdateCompanyJu(UserCompanyBuyItem param)
        {
            object call = Mapper.Instance().Insert("update-UserCompanyBuy", param);
        }
        

        public IList<UserCompanyBuyItem> DoGetCompanyJuCnt(UserCompanyBuyItem item)
        {
            IList<UserCompanyBuyItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<UserCompanyBuyItem>("select-UserCompanyBuyList", null);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
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