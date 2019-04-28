using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FiveMKoreaServer주식
{
    public class Util
    {
        public static DialogResult GetMessageBox(string text, string caption, MessageBoxButtons buttons, MessageBoxIcon icon)
        {
            if(icon == null)
            {
                return MessageBox.Show(text, caption, buttons);
            }

            return MessageBox.Show(text, caption,buttons, icon);
        }

        public static long StringToParseLong(string text)
        {

            long temp = 0;
            try
            {
                if (text == "")
                {
                    return 0;
                }
                temp = long.Parse(text);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.StackTrace);
            }

            return temp;
        }

        public static bool CheckProcess()
        {
            bool flag = false;
            Process[] processList = Process.GetProcessesByName(Process.GetCurrentProcess().ProcessName);

            if (processList.Length > 1)
            {
                return true;
            }

            return flag;
        }
    }
}
