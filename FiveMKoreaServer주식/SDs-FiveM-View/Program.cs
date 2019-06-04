using SDs.FiveM.Model.Setting;
using SDs.FiveM.View.View;
using SDs.FiveM.View.View.Lotto;
using SDs.FiveM.View.View.Sample;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace SDs_FiveM_View
{
    static class Program
    {
        /// <summary>
        /// 해당 응용 프로그램의 주 진입점입니다.
        /// </summary>
        [STAThread]
        static void Main()
        {
            DateTime licenseTime = DateTime.Parse("2019-06-30");

            if (licenseTime.CompareTo(System.DateTime.Now) < 0)
            {
                //현재 일 보다 빠르면 (라이센스 만료)
                string msgBoxText = "라이센스 기간이 만료되었습니다. 관리자에게 문의하세요";
                string msgBoxCaption = "경고";
                SDs.FiveM.Model.Util.FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                Environment.Exit(0);
            }
            else
            {
                //현재 일 보다 느리면
            }
            //FiveMConfigXMLHandler cfgHdl = new FiveMConfigXMLHandler();
            //cfgHdl.Load();

            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            //Application.Run(new SampleView());

            //주식프로그램
            Application.Run(new PublicLoginView());
            //로또프로그램
            //Application.Run(new LottoMakerView());


        }
    }
}
