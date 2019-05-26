using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.ChargeWithdrawView
{
    [Serializable]
    public class RefillMoneyApplicationItem
    {
        public int no { get; set; }
        public string id { get; set; }
        public int user_id { get; set; }
        public int refillMoney { get; set; }
        public string type { get; set; }
    }
}
