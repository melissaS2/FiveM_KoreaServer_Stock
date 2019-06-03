using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
using SDs.FiveM.Model.Util;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.Lotto.LottoMakerView
{
    public class LottoMakerViewController
    {
        public LottoMakerViewController()
        {

        }

        public LoginItem DoSelectUserInfo(LoginParam param)
        {
            IList<LoginItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<LoginItem>("select-UserInfo", param);

                if (list.Count > 1)
                {
                    FiveMUtilClass.GetMessageBox("데이터 오류", "경고", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return new LoginItem();
                }

                if (list.Count > 0)
                {
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
