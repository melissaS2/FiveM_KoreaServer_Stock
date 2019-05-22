using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
using SDs.FiveM.Model.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.SignUpView
{
    public class SignUpViewController
    {
        public SignUpViewController()
        {
        }

        public bool DoNewMemberSignUp(LoginItem param)
        {
            bool isSuccess = true;
            try
            {
                isSuccess = this.DoCheckUniquePhoneNo(param);
                if (isSuccess)
                {
                    isSuccess = this.DoExistIdCheck(param); //
                    if (isSuccess)
                    {
                        this.DoCreateNewMember(param);
                        //Insert Id
                        FiveMUtilClass.GetMessageBox("신규회원 등록이 완료되었습니다.", "알림", MessageBoxButtons.OK, MessageBoxIcon.Information);
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
                return false;
            }

            return isSuccess;
        }
        public bool DoCheckUniquePhoneNo(LoginItem param)
        {
            bool isSuccess = true;

            IList<LoginItem> list = Mapper.Instance().QueryForList<LoginItem>("select-UniquePhoneNo", param);

            if (list.Count <= 0)
            {
                FiveMUtilClass.GetMessageBox("고유 번호 &  폰번호 인증 오류.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }

            return isSuccess;
        }

        public void DoCreateNewMember(LoginItem param)
        {
            object call = Mapper.Instance().Insert("InsertNewMember", param);
        }
        public bool DoExistIdCheck(LoginItem param)
        {
            bool isSuccess = false;

            IList<LoginItem> list = Mapper.Instance().QueryForList<LoginItem>("SelectLoginId", param);

            if (list.Count > 0)
            {
                FiveMUtilClass.GetMessageBox("이미 사용중인 아이디 입니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                return false;
            }
            else if (list.Count <= 0)
            {
                return true;
            }

            return isSuccess;
        }
    }
}
