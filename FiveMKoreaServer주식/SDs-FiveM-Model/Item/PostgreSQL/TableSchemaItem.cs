using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.PostgreSQL
{
    [Serializable]
    public class TableSchemaItem
    {
        public string column_name { get; set; }
        public string is_nullable { get; set; }
        public string data_type { get; set; }
        public int character_maximum_length { get; set; }
        public int numeric_precision { get; set; }
        public int numeric_scale { get; set; }

        public string tablename { get; set; }

        public bool SEARCH { get; set; }//7
        public bool SAVE { get; set; }//8
        public bool DELETE { get; set; }//9
    }
}
