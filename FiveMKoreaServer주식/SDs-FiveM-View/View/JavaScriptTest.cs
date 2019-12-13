using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Runtime.InteropServices; //Dll Import 
using System.Net;
using System.IO;
using System.Web;
using Excel = Microsoft.Office.Interop.Excel;

namespace SDs.FiveM.View.View
{
    public partial class JavaScriptTest : Form
    {
        public JavaScriptTest()
        {
            InitializeComponent();

            this.button1.Click += Button1_Click;
            this.Load += JavaScriptTest_Load;
            this.webBrowser1.DocumentCompleted += WebBrowser1_DocumentCompleted;
            //this.SendKatalk("Jay","흐음");
            //HttpGet("자양로21길");
            PrintMyExcelFile();
            //ExcelToPrint(@"D:\testexcel.xlsx");
        }

        [DllImport("user32.dll")]
        public static extern int FindWindow(string lpClassName, string lpWindowName);
        //FindWindow (최상위 창 핸들값 가져오는 API)

        [DllImport("user32.dll")]
        public static extern int FindWindowEx(int hWnd1, int hWnd2, string lpsz1, string lpsz2);
        //FindWindowEX (인자로 받아온 핸들의 자식의 핸들값 가져오는 API)

        [DllImport("user32.dll")]
        public static extern int SendMessage(int hwnd, int wMsg, int wParam, string lParam);
        //지정된 윈도우 또는 컨트롤에 메세지를 보냅니다.
        //hwnd 메세지 통보받을 윈도우
        //wMsg 보낼 메세지 입력
        // wParam , IParam 메세지에 대한 추가정보

        [DllImport("user32.dll")]
        public static extern uint PostMessage(int hwnd, int wMsg, int wParam, int lParam);

        //public static bool IsValidKakaotalkWindow(IntPtr hWnd)
        //{
        //    // 창 핸들인지 확인한다.
        //    if (!IsWindow(hWnd)) return false;

        //    // 윈도우의 제목을 가져온다.
        //    string name = GetWindowText(hWnd);
        //    if (name == null) return false;

        //    // 총 2개의 하위 다이얼로그가 있으므로
        //    // 핸들을 가져온다.
        //    IntPtr hChildDialog1 = FindWindowEx(hWnd, IntPtr.Zero, "#32770", null);
        //    IntPtr hChildDialog2 = FindWindowEx(hWnd, hChildDialog1, "#32770", null);

        //    // 두 개의 다이얼로그 중 하나의 값이라도 받아오지 못한 경우
        //    // 정상적인 카카오톡 창이 아니다.
        //    if (hChildDialog1 == IntPtr.Zero || hChildDialog2 == IntPtr.Zero) return false;

        //    // 이제 다이얼로그의 하위 구조를 확인한다.
        //    IntPtr hDialogChildDialog1 = FindWindowEx(hChildDialog1, IntPtr.Zero, "#32770", null);
        //    IntPtr hDialogChildDialog2 = FindWindowEx(hChildDialog1, hDialogChildDialog1, "#32770", null);
        //    IntPtr hDialogChildEvaWindow1 = FindWindowEx(hChildDialog1, IntPtr.Zero, "EVA_Window", null);
        //    IntPtr hDialogChildEvaWindow2 = FindWindowEx(hChildDialog1, hDialogChildEvaWindow1, "EVA_Window", null);

        //    // 네 개의 윈도우 핸들이 유효하다면 정상적인 카카오톡 창이다.
        //    // 더 깊게 들어가야 하지만, 이 정도만 검사하면 된다.
        //    return
        //        hDialogChildDialog1 != IntPtr.Zero &&
        //        hDialogChildDialog2 != IntPtr.Zero &&
        //        hDialogChildEvaWindow1 != IntPtr.Zero &&
        //        hDialogChildEvaWindow2 != IntPtr.Zero;
        //}

        public void SendKatalk(string title, string msg)
        {
            //창을 찾음
            int hd01 = FindWindow("#32770", title);
            int hd03 = FindWindowEx(hd01, 0, "RichEdit20W", "");
            //RichEdit20W ( 대화창 TEXTAREA 부분)
            SendMessage(hd03, 0x000c, 0, "");
            PostMessage(hd03, 0x0100, 0xD, 0x1C001);

            //SendMessage(hd03, 0x000c, 0, msg);


        }

        private void WebBrowser1_DocumentCompleted(object sender, WebBrowserDocumentCompletedEventArgs e)
        {
            
            
        }

        private void JavaScriptTest_Load(object sender, EventArgs e)
        {
            webBrowser1.DocumentText =
            "<html> "
                                      + "<head> "
                                      + "<meta http-equiv='Content-Type' content='text/html; charset=utf-8'/> "
                                      + "<title>Test document</title> "
                                      + "<script type='text/javascript'> "
                                      + "function ShowAlert(message) { "
                                      + "   alert(message); "
                                      + "} "
                                      + "</script> "
                                      + "</head> "
                                      + "<body><div id='mainDiv'> "
                                      + "< form >"
                                      + "< input type = 'text' id ='text1' name ='text1' ></ input >"
                                      + "</ form >"
                                      + "</div></body> "
                                      + "</html> ";
            //webBrowser1.ObjectForScripting = this;
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            webBrowser1.Document.InvokeScript("ShowAlert", new object[] { "되라"});
            //System.Web.UI.ScriptManager.RegisterStartupScript(this, this.GetType(), "JCall1", sb.ToString(), false);
        }

        private void ExecJavaScript(string sValue1,string sValue2)
        {
            try
            {
                webBrowser1.Document.InvokeScript("CallScript", new object[] { sValue1, sValue2 });
            }
            catch
            {

            }
        }

        /*public string Posting(string contents, string[] files)
        {
            // 이미지 업로드
            //var imageList = this.UploadFilesToRemoteUrl(files);
            string apiURL = "https://kapi.kakao.com/v1/api/story/post/photo";

            string postingId = string.Empty;
            //string token = AccessToken;
            string header = "Bearer " + token;
            //byte[] contentBytes = Encoding.UTF8.GetBytes("image_url_list=" + imageList + "&content=" + contents);

            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(apiURL);
            request.Headers.Add("Authorization", header);
            request.ContentType = "application/x-www-form-urlencoded;charset=utf-8";
            request.Method = "POST";
            request.KeepAlive = true;
            request.ContentLength = contentBytes.Length;

            Stream st = request.GetRequestStream();
            st.Write(contentBytes, 0, contentBytes.Length);
            st.Close();

            try
            {
                HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                string status = response.StatusCode.ToString();
                if (status == "OK")
                {
                    Stream stream = response.GetResponseStream();

                    string sResultJson = new StreamReader(stream).ReadToEnd();
                    var jResult = JObject.Parse(sResultJson);
                    postingId = jResult["id"].ToString();
                }
                else
                {
                    MessageBox.Show("Error 발생=" + status);
                }
                st.Close();
                response.Close();
            }
            catch (WebException e)
            {
                var resp = new StreamReader(e.Response.GetResponseStream()).ReadToEnd();
                MessageBox.Show(resp.ToString());
            }

            return postingId;
        }*/


        //HttpUtility > C:\Windows\assembly\GAC_64\System.Web\2.0.0.0__b03f5f7f11d50a3a\System.Web.dll
        public static bool HttpGet(string POI)
        {
            string app_key = "7f89e51360cf078bc0e8bb592113dda9";
            string header = "KaKaoAK " + app_key;
            // 타겟이 되는 웹페이지 URL
            string Url = string.Format("https://dapi.kakao.com/v2/search/cafe");  //요청 URL

            StringBuilder getParams = new StringBuilder();
            getParams.Append("?query=" + HttpUtility.UrlEncode(POI));

            HttpWebRequest wReqFirst = (HttpWebRequest)WebRequest.Create(Url + getParams);

            wReqFirst.Headers.Add("Authorization", header);
            wReqFirst.ContentType = "application/json; charset=utf-8";
            wReqFirst.Method = "GET";
            wReqFirst.ServicePoint.Expect100Continue = false;

            HttpWebResponse wRespFirst = (HttpWebResponse)wReqFirst.GetResponse();
            Stream respPostStream = wRespFirst.GetResponseStream();
            StreamReader reader = new StreamReader(respPostStream, Encoding.GetEncoding("EUC-KR"), true);

            string responseFromServer = reader.ReadToEnd();
            MessageBox.Show(responseFromServer);

            reader.Close();
            respPostStream.Close();
            wRespFirst.Close();

            return true;
        }


        private bool ExcelToPrint(string sFilePath, string sSheetName = "")
        {
            Excel.Application excelApp = new Excel.Application();
            Excel.Workbooks wbs = excelApp.Workbooks;
            Excel._Workbook wb = null;
            Excel.Worksheet ws = null;

            try
            {
                excelApp.DisplayAlerts = false;

                wb = wbs.Open(sFilePath, 0, true, 5, "", "", true,
                 Excel.XlPlatform.xlWindows, "\t", false, false, 0, true, true, true);

                if (sSheetName.Length > 0)
                    ws = (Excel.Worksheet)wb.Sheets[sSheetName];
                else
                    ws = (Excel.Worksheet)wb.ActiveSheet;

                //_Workbook.PrintOut(object From /// 인쇄를 시작할 페이지 번호입니다. 이 인수를 생략하면 인쇄가 처음부터 시작됩니다.
                // , Object To     /// 인쇄할 마지막 페이지 번호입니다. 이 인수를 생략하면 마지막 페이지까지 인쇄됩니다.
                // , object Copies    /// 인쇄할 매수입니다. 이 인수를 생략하면 한 부만 인쇄됩니다.
                // , object Preview   /// Microsoft Office Excel에서 개체를 인쇄하기 전에 인쇄 미리 보기를 호출하려면 true이고, 개체를 즉시 인쇄하려면 false(또는 생략)입니다.
                // , object ActivePrinter  /// 활성 프린터의 이름을 설정합니다
                // , object PrintToFile  /// 파일로 인쇄하는 경우 true입니다. PrToFileName이 지정되지 않으면 Excel에서 출력 파일의 이름을 입력하라는 메시지를 표시합니다.
                // , object Collate   /// 여러 장을 한 부씩 인쇄하는 경우 true입니다.
                // , object PrToFileName  /// PrintToFile이 true로 설정되면 이 인수는 인쇄할 파일의 이름을 지정합니다.
                //);
                object printer = Type.Missing; // "프린터명"
                ws.PrintOut(1, Type.Missing, 1, false, printer, true, false, "PRINTTEST");

                //void PrintOut(object From, object To, object Copies, object Preview, object ActivePrinter, object PrintToFile, object Collate, object PrToFileName);

                return true;
            }
            catch (Exception ex)
            {
                //SS_LABEL.Text = ex.Message;
                //SS_PRJOUTLINE.Refresh();
            }
            finally
            {
                QuitExcel(excelApp, wb, ws);
            }

            return false;

        }

        private static void ReleaseExcelObject(object obj)
        {
            try
            {
                if (obj != null)
                {
                    System.Runtime.InteropServices.Marshal.FinalReleaseComObject(obj);
                    obj = null;
                }
            }
            catch (Exception ex)
            {
                obj = null;
                throw ex;
            }
            finally
            {
                GC.Collect();
            }
        }

        private void QuitExcel(Excel.Application xlApp, Excel._Workbook wb, Excel.Worksheet ws)
        {
            GC.Collect();
            GC.WaitForPendingFinalizers();

            wb.Close(false);
            xlApp.Quit();

            // Clean up
            ReleaseExcelObject(ws);
            ReleaseExcelObject(wb);
            ReleaseExcelObject(xlApp);

            System.GC.Collect();
            System.GC.WaitForPendingFinalizers();
            System.GC.Collect();
            System.GC.WaitForPendingFinalizers();

            System.Diagnostics.Process[] PROC = System.Diagnostics.Process.GetProcessesByName("EXCEL");
            foreach (System.Diagnostics.Process PK in PROC)
            {
                /// Process로 실행되고 타이틀이 없는 것을 이용하여 현재 EXCEL.EXE Process를 끝낸다.
                if (PK.MainWindowTitle.Length == 0)
                    PK.Kill();
            }

        }

        //private void PrintToFile()
        //{
        //    // Make sure the worksheet has some data before printing. 
        //    this.Range["A1", missing].Value2 = "123";
        //    this.PrintOut(1, 2, 1, false, missing, true, false, missing);
        //}

        void PrintMyExcelFile()
        {
            /*https://stackoverrun.com/ko/q/144120*/
            Excel.Application excelApp = new Excel.Application();

            // Open the Workbook: 
            Excel.Workbook wb = excelApp.Workbooks.Open(
             @"D:\testexcel.xlsx",
             Type.Missing, Type.Missing, Type.Missing, Type.Missing, Type.Missing,
             Type.Missing, Type.Missing, Type.Missing, Type.Missing, Type.Missing,
             Type.Missing, Type.Missing, Type.Missing, Type.Missing);

            // Get the first worksheet. 
            // (Excel uses base 1 indexing, not base 0.) 
            Excel.Worksheet ws = (Excel.Worksheet)wb.Worksheets[1];

            // Print out 1 copy to the default printer: 
            ws.PrintOut(
             Type.Missing, Type.Missing, Type.Missing, Type.Missing,
             Type.Missing, Type.Missing, Type.Missing, Type.Missing);

            // Cleanup: 
            GC.Collect();
            GC.WaitForPendingFinalizers();

            Marshal.FinalReleaseComObject(ws);

            wb.Close(false, Type.Missing, Type.Missing);
            Marshal.FinalReleaseComObject(wb);

            excelApp.Quit();
            Marshal.FinalReleaseComObject(excelApp);
        }
    }
}
