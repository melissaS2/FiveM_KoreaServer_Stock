using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Item.Lotto.LottoMakerView
{
    [Serializable]
    public class LottoItem
    {
        public int NO { get; set; }
        public string ID { get; set; }
        public int USER_ID { get; set; }
        public DateTime UPDATE_TIME { get; set; }
        public int LOTTO_ONE { get; set; }
        public int LOTTO_TWO { get; set; }
        public int LOTTO_THREE { get; set; }
        public int LOTTO_FOUR { get; set; }
        public int LOTTO_FIVE { get; set; }
        public int LOTTO_BONUS { get; set; }
    }
}
