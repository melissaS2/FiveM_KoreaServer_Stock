using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.AdminView;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.AdminView
{
    public class AdminViewController
    {
        public AdminViewController()
        {

        }
        public IList<LoginItem> DoRetriveUserData()
        {
            IList<LoginItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<LoginItem>("select-UserList", null);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public IList<AdminViewItem> DoRetriveJusikData(AdminViewItem param)
        {
            IList<AdminViewItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<AdminViewItem>("select-CompanyList", param);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public bool DoCreateNewCompany(AdminViewItem param)
        {
            bool isSuccess = false;

            try
            {
                object list = Mapper.Instance().Insert("insert-NewCompany", param);
                isSuccess = true;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
                isSuccess = false;
            }

            return isSuccess;
        }

        public bool DoDeleteCompany(AdminViewItem param)
        {
            bool isSuccess = false;

            try
            {
                object list = Mapper.Instance().Delete("delete-Company", param);
                isSuccess = true;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
                isSuccess = false;
            }

            return isSuccess;
        }

        public bool DoUpdateRubbishCompany(AdminViewItem param)
        {
            bool isSuccess = false;

            try
            {
                object list = Mapper.Instance().Update("update-CompanyTradingHistory", param);
                isSuccess = true;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
                isSuccess = false;
            }

            return isSuccess;
        }


        public bool DoUpdateCompany(AdminViewItem param)
        {
            bool isSuccess = false;

            try
            {
                object list = Mapper.Instance().Delete("update-Company", param);
                isSuccess = true;
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
                isSuccess = false;
            }

            return isSuccess;
        }

        public void DoNewMemberSignUp(LoginItem param)
        {
            try
            {
                bool isSuccess = this.DoExistIdCheck(param); //
                if (isSuccess)
                {
                    this.DoCreateNewMember(param);
                    //Insert Id
                    FiveMUtilClass.GetMessageBox("신규회원 등록이 완료되었습니다.", "알림", MessageBoxButtons.OK, MessageBoxIcon.Information);
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
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

        public bool DoDeleteUser(LoginItem param)
        {
            bool isSuccess = false;
            try
            {
                object list = Mapper.Instance().Delete("delete-User", param);
                isSuccess = true;
                FiveMUtilClass.GetMessageBox(param.id +"회원 삭제가 완료되었습니다.", "알림", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            catch (Exception ex)
            {
                isSuccess = false;
                MessageBox.Show(ex.ToString());
            }

            return isSuccess;
        }

        public bool DoUpdateUser(LoginItem param)
        {
            bool isSuccess = false;

            try
            {
                object list = Mapper.Instance().Delete("update-User", param);
                isSuccess = true;
            }
            catch (Exception ex)
            {
                isSuccess = false;
                MessageBox.Show(ex.ToString());
            }

            return isSuccess;
        }

    }
}
