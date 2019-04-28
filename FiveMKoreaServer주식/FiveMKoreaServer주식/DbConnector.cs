using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FiveMKoreaServer주식
{
    public class DbConnector
    {
        public static MySqlConnection con;

        static DbConnector()
        {
            try
            {
                con = new MySqlConnection("Server=183.109.83.28;Database=jusik;Uid=root;Pwd=!!wjddk4455;CharSet=utf8;");
                //con = new MySqlConnection("Server=183.109.83.28;Database=testserver_jusik;Uid=root;Pwd=!!wjddk4455;CharSet=utf8;");
                con.Open();
            }
            catch (Exception e)
            {
                Console.WriteLine("DB CONNECTION FAILED !");
                //e.printStackTrace();
            }
        }

        public DbConnector()
        {
            try
            {
                //con = new MySqlConnection("Server=183.109.83.28;Database=jusik;Uid=root;Pwd=!!wjddk4455;CharSet=utf8;");
                //con.Open();
            }
            catch (Exception e)
            {
                Console.WriteLine("DB CONNECTION FAILED !");
                //e.printStackTrace();
            }
                
        }

        public static MySqlConnection GetInstance(){
            return con;
        }
    }
}
