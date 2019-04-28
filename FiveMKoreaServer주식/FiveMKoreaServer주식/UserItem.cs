using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FiveMKoreaServer주식
{
    public class UserItem
    {
        private string _id;
        private long _buyStockPrice;
        private long _leftMoney;
        private long _myJu;
        private long _juMoney;
        private long _leftCnt;
        private int _no;
        private string _password;
        private long _userMoney;

        public long UserMoney
        {
            get { return _userMoney; }
            set { _userMoney = value; }
        }

        public string Password
        {
            get { return _password; }
            set { _password = value; }
        }

        public int No
        {
            get { return _no; }
            set { _no = value; }
        }

        public long LeftCnt
        {
            get { return _leftCnt; }
            set { _leftCnt = value; }
        }

        public long JuMoney
        {
            get { return _juMoney; }
            set { _juMoney = value; }
        }

        public long MyJu
        {
            get { return _myJu; }
            set { _myJu = value; }
        }

        public long LeftMoney
        {
            get { return _leftMoney; }
            set { _leftMoney = value; }
        }

        public long BuyStockPrice
        {
            get { return _buyStockPrice; }
            set { _buyStockPrice = value; }
        }

        public string Id
        {
            get { return _id; }
            set { _id = value; }
        }
        private string _company;

        public string Company
        {
            get { return _company; }
            set { _company = value; }
        }

        private long _juCnt;
        private bool _isData;
        private long _구매단가;
        private long _판매단가;
        private long _sellStockPrice;

        public long SellStockPrice
        {
            get { return _sellStockPrice; }
            set { _sellStockPrice = value; }
        }

        public long 판매단가
        {
            get { return _판매단가; }
            set { _판매단가 = value; }
        }
        private long _ju;

        public long Ju
        {
            get { return _ju; }
            set { _ju = value; }
        }

        public long 구매단가
        {
            get { return _구매단가; }
            set { _구매단가 = value; }
        }













        public bool IsData
        {
            get { return _isData; }
            set { _isData = value; }
        }

        public long JuCnt
        {
            get { return _juCnt; }
            set { _juCnt = value; }
        }
    }
}
