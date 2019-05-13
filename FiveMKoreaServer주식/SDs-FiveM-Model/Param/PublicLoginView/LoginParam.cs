using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Param.PublicLoginView
{
    [Serializable]
    public class LoginParam
    {
        public int no { get; set; }
        public string id { get; set; }
        public string pw { get; set; }
        public long money { get; set; }
    }
}
