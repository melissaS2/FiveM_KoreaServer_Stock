using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.ChartView
{
    [Serializable]
    public class UserCompanyItem
    {
        public int no { get; set; }
        public string userid { get; set; }
        public string company { get; set; }
        public long won { get; set; }
        public long ju { get; set; }
        public long totalprice { get; set; }
    }
}
