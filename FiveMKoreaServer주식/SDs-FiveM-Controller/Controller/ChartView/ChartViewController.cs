using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.AdminView;
using SDs.FiveM.Model.Item.ChartView;
using SDs.FiveM.Model.Item.PublicLoginView;
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

        public IList<HistoryItem> DoRefreshSellHistory(string loginId)
        {
            IList<HistoryItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<HistoryItem>("select-HistorySell", loginId);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public IList<HistoryItem> DoRefreshBuyHistory(string loginId)
        {
            IList<HistoryItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<HistoryItem>("select-HistoryBuy", loginId);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public void DoUpdateUserMoney(LoginItem item)
        {
            object call = Mapper.Instance().Update("update-UserMoney", item);
        }

        public void DoInsertCompanyJu(UserCompanyItem param)
        {
            object call = Mapper.Instance().Insert("insert-UserCompanyBuy", param);
        }

        public void DoUpdateCompanyJu(UserCompanyItem param)
        {
            object call = Mapper.Instance().Update("update-UserCompanyBuy", param);
        }
        
        public void DoInsertBuyHistory(UserCompanyItem param)
        {
            object call = Mapper.Instance().Insert("insert-HistoryBuy", param);
        }

        public void DoInsertSellHistory(UserCompanyItem param)
        {
            object call = Mapper.Instance().Insert("insert-HistorySell", param);
        }


        public IList<UserCompanyItem> DoGetCompanyJuCnt(UserCompanyItem item)
        {
            IList<UserCompanyItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<UserCompanyItem>("select-UserCompanyBuyList", item);
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