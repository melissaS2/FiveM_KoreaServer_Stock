using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace FiveMKoreaServer주식
{
    public class DbMgr
    {
        public DbMgr()
        {

        }

        public MySqlDataAdapter SelectJusikHistorSellList(string id)
        {
            MySqlDataAdapter adapter = null;

            try
            {
                string query = @"SELECT COMPANY AS 회사명,JuMoney AS 단가,juCount AS 갯수,money AS 금액,UPDATE_TIME AS 거래시간 " +
                                "FROM jusik_history_sell " +
                                "WHERE user_id = '" + id + "';";
                adapter = new MySqlDataAdapter(query, DbConnector.GetInstance());

            }
            catch (Exception e)
            {

            }

            return adapter;
        }

        public MySqlDataAdapter SelectJusikHistorBuyList(string id)
        {
            MySqlDataAdapter adapter = null;

            try
            {
                string query = @"SELECT COMPANY AS 회사명,JuMoney AS 단가,juCount AS 갯수,money AS 금액,UPDATE_TIME AS 거래시간 "+
                                "FROM jusik_history_buy "+
                                "WHERE user_id = '" + id + "';";
                adapter = new MySqlDataAdapter(query, DbConnector.GetInstance());

            }
            catch (Exception e)
            {
                
            }

            return adapter;
        }

        public MySqlDataAdapter SelectUserLstAll()
        {
            MySqlDataAdapter adapter = null;

            try
            {
                string query = @"SELECT * FROM user;";

                adapter = new MySqlDataAdapter(query, DbConnector.GetInstance());

            }
            catch (Exception e)
            {

            }
            finally
            {

            }

            return adapter;
        }
            

        public MySqlDataAdapter SelectJusikListAll()
        {
            MySqlDataAdapter adapter = null;

            try
            {
                string query = @"SELECT No As 'No',CompanyName As 회사명, JuMoney As 단가, LeftCnt As 남은주  FROM list";

                adapter = new MySqlDataAdapter(query, DbConnector.GetInstance());

            }
            catch (Exception e)
            {

            }
            finally
            {

            }

            return adapter;
        }

        public MySqlDataAdapter SelectJusikList(string id)
        {
            MySqlDataAdapter adapter = null;

            try
            {
                string query = @"SELECT " +
               "A.`No` AS 'NO'," +
               "A.CompanyName AS 회사명," +
               "A.JuMoney AS '1주당 금액'," +
               "A.LeftCnt AS '남은 주 갯수'," +
               "B.ju AS '내 보유 주'" +
               " FROM list A LEFT JOIN (SELECT userid,ju,company FROM userlist) B" +
               " ON A.CompanyName = B.company and b.userid ='" + id + "'" +
               "ORDER BY A.`No` ASC";

                adapter = new MySqlDataAdapter(query, DbConnector.GetInstance());

            }
            catch (Exception e)
            {
                
            }
            finally
            {
                
            }

            return adapter;
        }

        public bool LoginAdmin(string id, string pw)
        {
            MySqlDataReader reader = null;
            bool flag = true;
            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = @"SELECT nikname,count(*) as cnt FROM `adminuser` WHERE adminid=@adminid and adminpw=@adminpw";

                cmd.Parameters.AddWithValue("@adminid", id);
                cmd.Parameters.AddWithValue("@adminpw", pw);

                cmd.Connection = DbConnector.GetInstance();
                reader = cmd.ExecuteReader();

                while (reader.Read())
                {

                    if (reader["cnt"].ToString() == "1")
                    {
                        MessageBox.Show(reader["nikname"].ToString() + "님 환영합니다");
                    }
                    else
                    {
                        MessageBox.Show("아이디와 비밀번호를 확인해주세요");
                        flag = false;
                    }
                }

            }
            catch (Exception e)
            {
                flag = false;
            }
            finally
            {
                reader.Close();
            }

            return flag;
        }

        public bool Login(string id,string pw,out string money)
        {
            money = string.Empty;
            MySqlDataReader reader = null;
            bool flag = false;
            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = @"SELECT money,id,count(*) as cnt FROM `user` WHERE id=@id and pw=@pw";

                cmd.Parameters.AddWithValue("@id", id);
                cmd.Parameters.AddWithValue("@pw", pw);

                cmd.Connection = DbConnector.GetInstance();
                reader = cmd.ExecuteReader();

                while (reader.Read())
                {

                    if (reader["cnt"].ToString() == "1")
                    {
                        //id = reader["id"].ToString();
                        money = reader["money"].ToString();
                        MessageBox.Show(id + "님 환영합니다");

                        ApplicationState.GetInstance().UserID = id;

                        //this.Hide();
                        flag = true;

                        

                    }
                    else
                    {
                        MessageBox.Show("아이디와 비밀번호를 확인해주세요");
                        flag = false;
                    }
                }
                
            }
            catch (Exception e)
            {
                flag = false;
            }
            finally
            {
                reader.Close();
            }

            return flag;
        }

        public UserItem GetCompanyJu(UserItem _item)
        {
            //UserItem item = new UserItem();
            _item.IsData = false;

            MySqlDataReader reader = null;
            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = @"SELECT no,userid,company,won,ju FROM userlist WHERE userid =@USERID AND company =@COMPANY;";

                cmd.Parameters.AddWithValue("@USERID", _item.Id);
                cmd.Parameters.AddWithValue("@COMPANY", _item.Company);
                cmd.Connection = DbConnector.GetInstance();
                reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    if (reader["ju"].ToString() != "")
                    {
                        _item.IsData = true;
                        _item.JuCnt = Util.StringToParseLong(reader["ju"].ToString());
                    }
                }
            }
            catch (Exception e)
            {

            }
            finally
            {
                reader.Close();
            }

            return _item;
        }
        public bool UpdateCompany(UserItem item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                //command.CommandText = "UPDATE companyList SET JuMoney =@JuMoney AND LeftCnt =@LeftCnt AND CompanyName =@COMPANY WHERE `No`=@No";
                command.CommandText = "UPDATE `list` SET `JuMoney`=@JuMoney AND `LeftCnt`=@LeftCnt AND `CompanyName`=@COMPANY WHERE `list`.`No`=@NO";
                command.Parameters.Add("@JuMoney", item.JuMoney);
                command.Parameters.Add("@LeftCnt", item.LeftCnt);
                command.Parameters.Add("@COMPANY", item.Company);
                command.Parameters.Add("@No", item.No);

                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool DeleteUser(UserItem item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "DELETE FROM user where id = @USERID";
                command.Parameters.Add("@USERID", item.Id);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool DeleteCompany(UserItem item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "DELETE FROM list where CompanyName = @COMPANY";
                command.Parameters.Add("@COMPANY", item.Company);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool InsertNewUser(UserItem item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "INSERT INTO `user` (`id`, `pw`, `money`) VALUES (@USERID, @PASSWORD, @MONEY)";
                command.Parameters.Add("@USERID", item.Id);
                command.Parameters.Add("@PASSWORD", item.Password);
                command.Parameters.Add("@MONEY", item.UserMoney);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }
        //매수 햇을때 주식 INSERT 하는 
        public bool InsertNewCompany(UserItem item)
        {
            //UserItem item = new UserItem();
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "INSERT INTO list(CompanyName,JuMoney,LeftCnt) values(@COMAPNY,@JuMoney,@LeftCnt);";
                command.Parameters.Add("@COMAPNY", item.Company);
                command.Parameters.Add("@JuMoney", item.JuMoney);
                command.Parameters.Add("@LeftCnt", item.LeftCnt);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool InsertUserList(UserItem _item)
        {
            //UserItem item = new UserItem();
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "INSERT INTO userlist (`userid`, `company`, `won`, `ju`) VALUES (@USERID, @COMPANY, @WON, @JU);";
                //command.CommandText = "INSERT INTO userlist SET ju =@JU WHERE userid =@USERID AND company =@COMPANY;";
                command.Parameters.Add("@JU", _item.Ju);
                command.Parameters.Add("@WON", _item.구매단가);
                command.Parameters.Add("@USERID", _item.Id);
                command.Parameters.Add("@COMPANY", _item.Company);

                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool UpdateUserList(UserItem _item)
        {
            //UserItem item = new UserItem();
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "UPDATE userlist SET ju =@JU WHERE userid =@USERID AND company =@COMPANY;";
                command.Parameters.Add("@JU", _item.Ju);
                command.Parameters.Add("@USERID", _item.Id);
                command.Parameters.Add("@COMPANY", _item.Company);
                
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool UPDATEUserList(UserItem _item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "UPDATE userlist SET ju =@JU WHERE userid =@USERID AND company =@COMAPNY;";
                command.Parameters.Add("@JU", _item.Ju + _item.JuCnt);
                command.Parameters.Add("@USERID", _item.Id);
                command.Parameters.Add("@COMAPNY", _item.Company);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool InsertBuyHistory(UserItem _item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "INSERT INTO jusik_history_buy values (@USERID,@COMPANY,@JUMONEY,@JUCOUNT,@MONEY,NOW())";
                command.Parameters.Add("@USERID", _item.Id);
                command.Parameters.Add("@COMPANY", _item.Company);
                command.Parameters.Add("@JUMONEY", _item.구매단가);
                command.Parameters.Add("@JUCOUNT", _item.Ju);
                command.Parameters.Add("@MONEY", _item.BuyStockPrice);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }


        public bool InsertSellHistory(UserItem _item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.Connection = DbConnector.GetInstance();
                command.CommandText = "INSERT INTO jusik_history_sell values (@USERID,@COMPANY,@JUMONEY,@JUCOUNT,@MONEY,NOW())";
                command.Parameters.Add("@USERID", _item.Id);
                command.Parameters.Add("@COMPANY", _item.Company);
                command.Parameters.Add("@JUMONEY", _item.판매단가);
                command.Parameters.Add("@JUCOUNT", _item.Ju);
                command.Parameters.Add("@MONEY", _item.SellStockPrice);
                command.ExecuteNonQuery();

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public bool UpdateLeftMoney(UserItem _item)
        {
            bool flag = false;
            MySqlCommand command = null;

            try
            {
                command = new MySqlCommand();
                command.CommandText = "UPDATE `user` SET `money`=@LEFTMONEY WHERE `id`=@USERID";
                command.Connection = DbConnector.GetInstance();
                command.Parameters.Add("@LEFTMONEY", _item.LeftMoney);
                command.Parameters.Add("@USERID", _item.Id);
                command.ExecuteNonQuery();


               

                flag = true;

            }
            catch (Exception e)
            {
                flag = false;
            }

            return flag;
        }

        public UserItem SelectMyJu(UserItem _item)
        {
            //UserItem item = new UserItem();
            _item.IsData = false;

            MySqlDataReader reader = null;
            try
            {
                MySqlCommand cmd = new MySqlCommand();
                cmd.CommandText = @"SELECT sum(ju) FROM `userlist` WHERE userid =@ID AND company =@COMPANY";

                cmd.Parameters.AddWithValue("@ID", _item.Id);
                cmd.Parameters.AddWithValue("@COMPANY", _item.Company);

                cmd.Connection = DbConnector.GetInstance();
                reader = cmd.ExecuteReader();

                while (reader.Read())
                {
                    if (reader["sum(ju)"].ToString() != "")
                    {
                        _item.MyJu = int.Parse(reader["sum(ju)"].ToString());
                    }
                }
            }
            catch (Exception e)
            {

            }
            finally
            {
                reader.Close();
            }

            return _item;
        }
    }
}
