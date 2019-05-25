using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.PublicLoginView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.ChargeWithdrawView
{
    public class ChargeWithdrawViewController
    {
        public ChargeWithdrawViewController()
        {

        }
        
        public void DoInsertStockMoneyRefill(LoginItem item)
        {
            object call = Mapper.Instance().Insert("insert-RefillStock", item);
        }

        public void DoInsertInGameMoneyRefill(LoginItem item)
        {
            object call = Mapper.Instance().Insert("insert-RefillMoney", item);
        }

        public void DoUpdateInStockMoney(LoginItem item)
        {
            object call = Mapper.Instance().Update("update-StockMoney", item);
        }

        public void DoUpdateInGameMoney(LoginItem item)
        {
            object call = Mapper.Instance().Update("update-GameMoney", item);
        }

        public IList<LoginItem> DoRetriveGameMoney(int user_id)
        {
            IList<LoginItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<LoginItem>("select-GameMoneyList", user_id);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
            return list;
        }


        public IList<LoginItem> DoRetriveStockMoney(string userId)
        {
            IList<LoginItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<LoginItem>("select-StockUserList", userId);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
            return list;
        }
    }
}
