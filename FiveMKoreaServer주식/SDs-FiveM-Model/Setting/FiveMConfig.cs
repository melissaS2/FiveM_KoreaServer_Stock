using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Setting
{
    public class FiveMConfig
    {
        public static int ThirtyPercent_1 = 1;
        public static int ThirtyPercent_2 = -1;
        public static int FourtyPercent_1 = -2;
        public static int FourtyPercent_2 = 2;
        public static int OnePercent_1 = 20;
        public static int OnePercent_2 = -20;
        public static int OnePercent_3 = -5000;
        public static int TwentyPercent_1 = -5;
        public static int TwentyPercent_2 = +5;
        public static int FifteenPercent_1 = +4;
        public static int FifteenPercent_2 = +4;
        public static int FourPercent_1 = -300;

        public static int TimerSecond = 5;

        internal static void ApplyConfig(FiveMConfigItem item)
        {
            ThirtyPercent_1 = item.ThirtyPercent_1;
            ThirtyPercent_2 = item.ThirtyPercent_2;
            FourtyPercent_1 = item.FortyPercent_1;
            FourtyPercent_2 = item.FortyPercent_2;
            OnePercent_1 = item.OnePercent_1;
            OnePercent_2 = item.OnePercent_2;
            OnePercent_3 = item.OnePercent_3;
            TwentyPercent_1 = item.TwentyPercent_1;
            TwentyPercent_2 = item.TwentyPercent_2;
            FifteenPercent_1 = item.FifteenPercent_1;
            FifteenPercent_2 = item.FifteenPercent_2;
            FourPercent_1 = item.FourPercent_1;
            TimerSecond = item.TimerSecond;
        }

        internal static FiveMConfigItem GetConfig()
        {
            FiveMConfigItem item = new FiveMConfigItem();

            item.ThirtyPercent_1 = ThirtyPercent_1;
            item.ThirtyPercent_2 = ThirtyPercent_2;
            item.FortyPercent_1 = FourtyPercent_1;
            item.FortyPercent_2 = FourtyPercent_2;
            item.OnePercent_1 = OnePercent_1;
            item.OnePercent_2 = OnePercent_2;
            item.OnePercent_3 = OnePercent_3;
            item.TwentyPercent_1 = TwentyPercent_1;
            item.TwentyPercent_2 = TwentyPercent_2;
            item.FifteenPercent_1 = FifteenPercent_1;
            item.FifteenPercent_2 = FifteenPercent_2;
            item.FourPercent_1 = FourPercent_1;
            item.TimerSecond = TimerSecond;

            return item;
        }
    }
}
