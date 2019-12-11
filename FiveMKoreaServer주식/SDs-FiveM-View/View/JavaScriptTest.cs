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
            HttpGet("자양로21길");
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
    }
}
