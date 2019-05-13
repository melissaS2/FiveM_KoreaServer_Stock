using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller
{
    public class PublicLoginViewController
    {
        public PublicLoginViewController()
        {

        }

        public LoginItem DoLogin(LoginParam param)
        {
            bool isSuccess = false;
            LoginItem item = new LoginItem();
            try
            {
                isSuccess = this.DoCheckExistId(param); // Id 존재 여부 확인

                if (isSuccess)
                {
                    item = this.DoCheckPassword(param); // Pw확인
                    //if ()
                    //{
                        MessageBox.Show(param.id + " 님 환영합니다");
                    //}
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
            return item;
        }

        public bool DoCheckExistId(LoginParam param)
        {
            bool isSuccess = false;

            try
            {
                IList<LoginItem> list = Mapper.Instance().QueryForList<LoginItem>("SelectLoginId", param);

                if (list.Count > 0)
                {
                    isSuccess = true;
                }

                if (!isSuccess)
                {
                    MessageBox.Show("존재하지 않는 아이디 입니다");
                    isSuccess = false;
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
                isSuccess = false;
            }

            return isSuccess;
        }

        public LoginItem DoCheckPassword(LoginParam param)
        {
            IList<LoginItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<LoginItem>("SelectLoginPw", param);

                if (list.Count > 1)
                {
                    MessageBox.Show("데이터 오류");
                    return new LoginItem();
                }

                if (list.Count > 0)
                {
                    return list[0];
                }
                else
                { 
                    MessageBox.Show("비밀번를 잘못 입력하셨습니다.");
                    return list[0];
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return new LoginItem();
        }

    }
}
