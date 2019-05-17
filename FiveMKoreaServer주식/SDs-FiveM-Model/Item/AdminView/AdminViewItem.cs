using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.AdminView
{
    [Serializable]
    public class AdminViewItem
    {
        public int No { get; set; }
        public string CompanyName { get; set; }
        public long JuMoney { get; set; }
        public long LeftCnt { get; set; }
    }
}
