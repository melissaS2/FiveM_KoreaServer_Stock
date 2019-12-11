using SDs.FiveM.Controller.Controller.QueryMakerView;
using SDs.FiveM.Model.Item.PostgreSQL;
using SDs.FiveM.Model.Item.Sample;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace SDs.FiveM.View.View
{
    public partial class QueryMaker : Form
    {
        #region PROPERTY AREA ******************************
        private string MASTER_TABLE = "pg_tables";

        private QueryMakerController controller = null;
        private TableListItem tableItem = null;
        #endregion

        #region CONSTRUCT AREA *************************
        public QueryMaker()
        {
            InitializeComponent();
            this.controller = new QueryMakerController();
            this.tableItem = new TableListItem();
            this.AddEventHandler();
        }

        private void AddEventHandler()
        {
            this.Load += new EventHandler(QueryMaker_Load);
            this.btnSearchDb.Click += new EventHandler(BtnSearchDb_Click);
            this.gridDbTable.CellClick += GridDbTable_CellClick;//위그리드
            this.gridDbTableSchema.CellClick += GridDbTableSchema_CellClick;//아래그리드
            this.btnCreateScript.Click += BtnCreateScript_Click;
        }

        private void GridDbTableSchema_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            int rowIdx = e.RowIndex;
            int colIndex = e.ColumnIndex;

            if (rowIdx == -1 && (colIndex == 7 || colIndex == 8 || colIndex == 9))
            {
                for(int i = 0; i < this.gridDbTableSchema.RowCount; i++)
                {
                    object value = this.gridDbTableSchema.Rows[i].Cells[colIndex].Value;
                    if ((bool)value)
                    {
                        this.gridDbTableSchema.Rows[i].Cells[colIndex].Value = false;
                    }
                    else
                    {
                        this.gridDbTableSchema.Rows[i].Cells[colIndex].Value = true;
                    }
                }
            }
        }

        private void BtnCreateScript_Click(object sender, EventArgs e)
        {
            string procedureText = string.Empty;
            procedureText += "PROCEDURE ";

            if(this.gridDbTableSchema.RowCount < 1)
            {
                MessageBox.Show("아래 그리드 조회부터요^^ \n 조회하고 옆에 스크롤 넘기면 SEARCH/SAVE/DELETE 있음");
                return;
            }

            #region SEARCH AREA *************************

            procedureText += "p_search(";

            //IEnumerable<TableSchemaItem> searchlist =((IList<TableSchemaItem>)this.gridDbTableSchema.DataSource).Where(x => x.SEARCH == true);

            for (int i = 0; i < this.gridDbTableSchema.RowCount; i++)
            {
                //7
                object value = this.gridDbTableSchema.Rows[i].Cells[7].Value;
                
                if ((bool)value)
                {
                    procedureText +=
                        "p_" + this.gridDbTableSchema.Rows[i].Cells[0].Value + " "
                        //+ this.gridDbTableSchema.Rows[i].Cells[2].Value;
                        + "character varying, ";
                }
            }
            procedureText = procedureText.Substring(0, procedureText.Length - 2);
            procedureText += ");";
            searchText.Text = procedureText;
            #endregion

            #region SAVE AREA *****************************
            procedureText = string.Empty;
            procedureText += "PROCEDURE p_save(";

            for (int i = 0; i < this.gridDbTableSchema.RowCount; i++)
            {
                //7
                object value = this.gridDbTableSchema.Rows[i].Cells[8].Value;

                if ((bool)value)
                {
                    procedureText +=
                        "p_" + this.gridDbTableSchema.Rows[i].Cells[0].Value + " "
                        //+ this.gridDbTableSchema.Rows[i].Cells[2].Value;
                        + "character varying, ";
                }
            }
            procedureText = procedureText.Substring(0, procedureText.Length - 2);
            procedureText += ");";
            saveText.Text = procedureText;
            #endregion

            #region SAVE AREA *****************************
            procedureText = string.Empty;
            procedureText += "PROCEDURE p_delete(";

            for (int i = 0; i < this.gridDbTableSchema.RowCount; i++)
            {
                //7
                object value = this.gridDbTableSchema.Rows[i].Cells[9].Value;

                if ((bool)value)
                {
                    procedureText +=
                        "p_" + this.gridDbTableSchema.Rows[i].Cells[0].Value + " "
                        //+ this.gridDbTableSchema.Rows[i].Cells[2].Value;
                        + "character varying, ";
                }
            }
            procedureText = procedureText.Substring(0, procedureText.Length - 2);
            procedureText += ");";
            deleteText.Text = procedureText;
            #endregion
        }

        private void GridDbTable_CellClick(object sender, DataGridViewCellEventArgs e)
        {
            //throw new NotImplementedException();
            int rowIdx = e.RowIndex;
            int colIndex = e.ColumnIndex;
            int tableNameColIdx = 1; // 테이블명 컬럼 
            
            if(rowIdx == -1) //컬럼선택
            {
                return;
            }
            TableSchemaItem item = new TableSchemaItem();

            item.tablename = this.gridDbTable.Rows[rowIdx].Cells[tableNameColIdx].FormattedValue.ToString();

            IList<TableSchemaItem> list = this.controller.DoSelectTableSchema(item);
            this.gridDbTableSchema.DataSource = list;
            this.gridDbTableSchema.Columns[6].Visible = false;
            

            this.gridDbTableSchema.Columns[1].Width = 30;

            this.gridDbTableSchema.Columns[2].Width = 60;
            this.gridDbTableSchema.Columns[3].Width = 30;
            this.gridDbTableSchema.Columns[4].Width = 30;
            this.gridDbTableSchema.Columns[5].Width = 30;
        }
        #endregion

        #region EVENT HANDLER ***************************
        private void QueryMaker_Load(object sender, EventArgs e)
        {
            this.SetBindings();
        }
        #endregion

        #region METHOD AREA *****************************
        private void SetBindings()
        {
            IList<TableListItem> list = this.controller.DoSelectSchemaList(tableItem);
            for(int i = 0; i < list.Count; i++)
            {
                this.cmbSchema.Items.Add(list[i].schemaname);
            }

            if(this.cmbSchema.Items.Count> 0)
            {
                this.cmbSchema.SelectedIndex = 9;
            }

            this.cmbDbType.DataSource = System.Enum.GetValues(typeof(SDs.FiveM.Model.Constants.DBType));
            this.cmbDbType.SelectedIndex = 0;
        }

        private void BtnSearchDb_Click(object sender, EventArgs e)
        {
            tableItem.schemaname = this.cmbSchema.Text;
            tableItem.tablename = this.txtTableNm.Text;

            IList<TableListItem> list =  this.controller.DoSelectTableList(tableItem);
            gridDbTable.DataSource = list;
            gridDbTable.Columns[1].Width += 40;
        }
        #endregion
    }
}
