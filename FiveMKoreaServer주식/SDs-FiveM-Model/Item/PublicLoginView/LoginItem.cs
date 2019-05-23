using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.PublicLoginView
{
    [Serializable]
    public class LoginItem
    {
        public int no { get; set; }
        public string id { get; set; }
        public string pw { get; set; }
        public long money { get; set; }

        public int user_id { get; set; }
        public string phone { get; set; }

        public int wallet { get; set; }
        public int bank { get; set; }

        public int refillMoney { get; set; }
        public string type { get; set; }
    }
}
