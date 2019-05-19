using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.ChartView
{
    [Serializable]
    public class HistoryItem
    {
        public string user_id { get; set; }
        public string company { get; set; }
        public long won { get; set; }
        public long ju { get; set; }
        public long totalprice { get; set; }
        public DateTime UPDATE_TIME { get; set; }
    }
}
