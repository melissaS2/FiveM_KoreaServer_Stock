﻿using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
using SDs.FiveM.Model.Util;
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
                    if(item != null)
                    {
                        FiveMUtilClass.GetMessageBox(param.id + " 님 환영합니다", "알림", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        return item;
                    }
                }
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
            return null;
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
                    FiveMUtilClass.GetMessageBox("존재하지 않는 아이디 입니다", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
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
                    FiveMUtilClass.GetMessageBox("데이터 오류", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return new LoginItem();
                }

                if (list.Count > 0)
                {
                    return list[0];
                }
                else
                {
                    FiveMUtilClass.GetMessageBox("비밀번호를 잘못 입력하셨습니다.", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return null;
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
