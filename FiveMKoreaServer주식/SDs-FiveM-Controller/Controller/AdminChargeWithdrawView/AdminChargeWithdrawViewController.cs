using IBatisNet.DataMapper;
using SDs.FiveM.Model.Constants;
using SDs.FiveM.Model.Item.ChargeWithdrawView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.AdminChargeWithdrawView
{
    public class AdminChargeWithdrawViewController
    {
        public AdminChargeWithdrawViewController()
        {

        }

        public void DoUpdateRefillMoney(RefillMoneyApplicationItem item)
        {
            try
            {
                if (item.type.Equals(FiveMConstants.RefillTypeStock)) // S
                {
                    object call = Mapper.Instance().Update("update-RefillMoneyStock", item);
                }
                else if (item.type.Equals(FiveMConstants.RefillTypeGame)) // I
                {
                    object call = Mapper.Instance().Update("update-RefillMoneyGame", item);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        public void DoDeleteRefillMoney(RefillMoneyApplicationItem item)
        {
            try
            {
                object call = Mapper.Instance().Delete("delete-RefillMoneyStock", item);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        
    }
}
