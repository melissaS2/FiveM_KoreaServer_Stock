using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Param.AdminLoginView
{
    [Serializable]
    public class AdminLoginParam
    {
        public int no { get; set; }
        public string adminid { get; set; }
        public string adminpw { get; set; }
        public string nikname { get; set; }
    }
}
