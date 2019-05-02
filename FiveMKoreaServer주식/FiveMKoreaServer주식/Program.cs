using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FiveMKoreaServer주식
{
    static class Program
    {
        /// <summary>
        /// 해당 응용 프로그램의 주 진입점입니다.
        /// </summary>
        [STAThread]
        static void Main()
        {

            bool processFlag = Util.CheckProcess();
            if (processFlag)
            {
                Util.GetMessageBox("프로그램이 실행중입니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
            }
            else
            {
                Application.EnableVisualStyles();
                Application.SetCompatibleTextRenderingDefault(false);
                Application.Run(new 로그인());
            }
        }
    }
}
