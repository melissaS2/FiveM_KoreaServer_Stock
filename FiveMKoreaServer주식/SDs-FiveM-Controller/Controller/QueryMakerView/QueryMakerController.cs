using IBatisNet.DataMapper;
using SDs.FiveM.Model.Item.PostgreSQL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.Controller.Controller.QueryMakerView
{
    public class QueryMakerController
    {
        public IList<TableSchemaItem> DoSelectTableSchema(TableSchemaItem item)
        {
            IList<TableSchemaItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<TableSchemaItem>("select-TableSchema", item);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public IList<TableListItem> DoSelectSchemaList(TableListItem item)
        {
            IList<TableListItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<TableListItem>("select-AllSchemaList", item);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public IList<TableListItem> DoSelectColumnName(TableListItem item)
        {
            IList<TableListItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<TableListItem>("select-columnName", item);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }

        public IList<TableListItem> DoSelectTableList(TableListItem item)
        {
            IList<TableListItem> list = null;
            try
            {
                list = Mapper.Instance().QueryForList<TableListItem>("select-AllTableList", item);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }

            return list;
        }
    }
}
