using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.View.View
{
    public interface PublicLoginViewInterface
    {
        string LOGIN_ID { get; set; }
        long MONEY { get; set; }
        int user_id { get; set; } // 고유번호
        long lotto_money { get; set; }
    }
}
