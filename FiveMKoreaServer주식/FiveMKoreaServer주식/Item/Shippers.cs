﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FiveMKoreaServer주식.Item
{
    [Serializable]
    public class Shippers
    {
        public int no { get; set; }
        public string adminid { get; set; }
        public string adminpw { get; set; }
        public string nikname { get; set; }
    }
}
