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
    }
}
