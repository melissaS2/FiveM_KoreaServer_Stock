using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.AdminView;
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

        public IList<AdminViewItem> DoRetriveJusikData()
        {
            IList<AdminViewItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<AdminViewItem>("select-CompanyList", null);
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
            
    }
}
