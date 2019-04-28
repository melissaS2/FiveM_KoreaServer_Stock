using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FiveMKoreaServer주식
{
    public class ApplicationState
    {
        private static ApplicationState _instance;

        private string _programName;

        public string ProgramName
        {
            get { return Application.ProductName; }
            //set { _programName = value; }
        }

            
        private string _userID;

        public string UserID
        {
            get { return _userID; }
            set { _userID = value; }
        }



        public static ApplicationState GetInstance()
        {
            if (_instance == null)
            {
                _instance = new ApplicationState();
            }

            return _instance;
        }
    }
}
