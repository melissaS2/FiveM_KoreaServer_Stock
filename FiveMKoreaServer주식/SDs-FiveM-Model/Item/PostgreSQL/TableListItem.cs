using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.PostgreSQL
{
    [Serializable]
    public class TableListItem
    {
        public string schemaname { get; set; }
        public string tablename { get; set; }
        public string tableowner { get; set; }
        public string tablespace { get; set; }
        public bool hasindexes { get; set; }
        public bool hasrules { get; set; }
        public bool hastriggers { get; set; }
        public bool rowsecurity { get; set; }
    }
}
