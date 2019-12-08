namespace SDs.FiveM.View.View
{
    partial class QueryMaker
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.panel1 = new System.Windows.Forms.Panel();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.panel2 = new System.Windows.Forms.Panel();
            this.btnSearchDb = new System.Windows.Forms.Button();
            this.cmbDbType = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.gridDbTable = new System.Windows.Forms.DataGridView();
            this.txtTableNm = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.cmbSchema = new System.Windows.Forms.ComboBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.gridDbTableSchema = new System.Windows.Forms.DataGridView();
            this.tableLayoutPanel2 = new System.Windows.Forms.TableLayoutPanel();
            this.panel4 = new System.Windows.Forms.Panel();
            this.btnCreateScript = new System.Windows.Forms.Button();
            this.searchText = new System.Windows.Forms.RichTextBox();
            this.saveText = new System.Windows.Forms.RichTextBox();
            this.deleteText = new System.Windows.Forms.RichTextBox();
            this.panel1.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.panel2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridDbTable)).BeginInit();
            this.panel3.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridDbTableSchema)).BeginInit();
            this.tableLayoutPanel2.SuspendLayout();
            this.panel4.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.tableLayoutPanel1);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(906, 542);
            this.panel1.TabIndex = 0;
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 2;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Absolute, 407F));
            this.tableLayoutPanel1.Controls.Add(this.panel2, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.gridDbTable, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this.panel3, 1, 1);
            this.tableLayoutPanel1.Controls.Add(this.gridDbTableSchema, 0, 2);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 3;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 33F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 182F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 74F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(906, 542);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // panel2
            // 
            this.tableLayoutPanel1.SetColumnSpan(this.panel2, 2);
            this.panel2.Controls.Add(this.cmbSchema);
            this.panel2.Controls.Add(this.label4);
            this.panel2.Controls.Add(this.label3);
            this.panel2.Controls.Add(this.label2);
            this.panel2.Controls.Add(this.txtTableNm);
            this.panel2.Controls.Add(this.btnSearchDb);
            this.panel2.Controls.Add(this.cmbDbType);
            this.panel2.Controls.Add(this.label1);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(0, 0);
            this.panel2.Margin = new System.Windows.Forms.Padding(0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(906, 33);
            this.panel2.TabIndex = 0;
            // 
            // btnSearchDb
            // 
            this.btnSearchDb.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnSearchDb.Location = new System.Drawing.Point(809, 4);
            this.btnSearchDb.Name = "btnSearchDb";
            this.btnSearchDb.Size = new System.Drawing.Size(94, 23);
            this.btnSearchDb.TabIndex = 4;
            this.btnSearchDb.Text = "테이블 조회";
            this.btnSearchDb.UseVisualStyleBackColor = true;
            // 
            // cmbDbType
            // 
            this.cmbDbType.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cmbDbType.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.cmbDbType.FormattingEnabled = true;
            this.cmbDbType.Location = new System.Drawing.Point(63, 6);
            this.cmbDbType.Name = "cmbDbType";
            this.cmbDbType.Size = new System.Drawing.Size(83, 20);
            this.cmbDbType.TabIndex = 1;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(3, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(54, 12);
            this.label1.TabIndex = 0;
            this.label1.Text = "DB Type";
            // 
            // gridDbTable
            // 
            this.gridDbTable.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridDbTable.Dock = System.Windows.Forms.DockStyle.Fill;
            this.gridDbTable.Location = new System.Drawing.Point(3, 36);
            this.gridDbTable.Name = "gridDbTable";
            this.gridDbTable.RowTemplate.Height = 23;
            this.gridDbTable.Size = new System.Drawing.Size(493, 176);
            this.gridDbTable.TabIndex = 1;
            // 
            // txtTableNm
            // 
            this.txtTableNm.Location = new System.Drawing.Point(506, 6);
            this.txtTableNm.Name = "txtTableNm";
            this.txtTableNm.Size = new System.Drawing.Size(152, 21);
            this.txtTableNm.TabIndex = 3;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(152, 9);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(95, 12);
            this.label2.TabIndex = 16;
            this.label2.Text = "조회조건(필터)>";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(447, 9);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(53, 12);
            this.label3.TabIndex = 17;
            this.label3.Text = "테이블명";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(256, 9);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(53, 12);
            this.label4.TabIndex = 18;
            this.label4.Text = "스키마명";
            // 
            // cmbSchema
            // 
            this.cmbSchema.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
            this.cmbSchema.FlatStyle = System.Windows.Forms.FlatStyle.Popup;
            this.cmbSchema.FormattingEnabled = true;
            this.cmbSchema.Location = new System.Drawing.Point(315, 6);
            this.cmbSchema.Name = "cmbSchema";
            this.cmbSchema.Size = new System.Drawing.Size(121, 20);
            this.cmbSchema.TabIndex = 2;
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.tableLayoutPanel2);
            this.panel3.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel3.Location = new System.Drawing.Point(502, 36);
            this.panel3.Name = "panel3";
            this.tableLayoutPanel1.SetRowSpan(this.panel3, 2);
            this.panel3.Size = new System.Drawing.Size(401, 503);
            this.panel3.TabIndex = 2;
            // 
            // gridDbTableSchema
            // 
            this.gridDbTableSchema.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridDbTableSchema.Dock = System.Windows.Forms.DockStyle.Fill;
            this.gridDbTableSchema.Location = new System.Drawing.Point(3, 235);
            this.gridDbTableSchema.Margin = new System.Windows.Forms.Padding(3, 20, 3, 3);
            this.gridDbTableSchema.Name = "gridDbTableSchema";
            this.gridDbTableSchema.RowTemplate.Height = 23;
            this.gridDbTableSchema.Size = new System.Drawing.Size(493, 304);
            this.gridDbTableSchema.TabIndex = 3;
            // 
            // tableLayoutPanel2
            // 
            this.tableLayoutPanel2.ColumnCount = 1;
            this.tableLayoutPanel2.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel2.Controls.Add(this.deleteText, 0, 2);
            this.tableLayoutPanel2.Controls.Add(this.saveText, 0, 1);
            this.tableLayoutPanel2.Controls.Add(this.panel4, 0, 3);
            this.tableLayoutPanel2.Controls.Add(this.searchText, 0, 0);
            this.tableLayoutPanel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel2.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel2.Margin = new System.Windows.Forms.Padding(0);
            this.tableLayoutPanel2.Name = "tableLayoutPanel2";
            this.tableLayoutPanel2.RowCount = 4;
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 33.33333F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 33.33334F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 33.33334F));
            this.tableLayoutPanel2.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 30F));
            this.tableLayoutPanel2.Size = new System.Drawing.Size(401, 503);
            this.tableLayoutPanel2.TabIndex = 0;
            // 
            // panel4
            // 
            this.panel4.Controls.Add(this.btnCreateScript);
            this.panel4.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel4.Location = new System.Drawing.Point(0, 471);
            this.panel4.Margin = new System.Windows.Forms.Padding(0);
            this.panel4.Name = "panel4";
            this.panel4.Size = new System.Drawing.Size(401, 32);
            this.panel4.TabIndex = 0;
            // 
            // btnCreateScript
            // 
            this.btnCreateScript.Location = new System.Drawing.Point(273, 6);
            this.btnCreateScript.Name = "btnCreateScript";
            this.btnCreateScript.Size = new System.Drawing.Size(119, 23);
            this.btnCreateScript.TabIndex = 0;
            this.btnCreateScript.Text = "SCRIPT 생성";
            this.btnCreateScript.UseVisualStyleBackColor = true;
            // 
            // searchText
            // 
            this.searchText.Dock = System.Windows.Forms.DockStyle.Fill;
            this.searchText.Location = new System.Drawing.Point(3, 3);
            this.searchText.Name = "searchText";
            this.searchText.Size = new System.Drawing.Size(395, 151);
            this.searchText.TabIndex = 1;
            this.searchText.Text = "";
            // 
            // saveText
            // 
            this.saveText.Dock = System.Windows.Forms.DockStyle.Fill;
            this.saveText.Location = new System.Drawing.Point(3, 160);
            this.saveText.Name = "saveText";
            this.saveText.Size = new System.Drawing.Size(395, 151);
            this.saveText.TabIndex = 2;
            this.saveText.Text = "";
            // 
            // deleteText
            // 
            this.deleteText.Dock = System.Windows.Forms.DockStyle.Fill;
            this.deleteText.Location = new System.Drawing.Point(3, 317);
            this.deleteText.Name = "deleteText";
            this.deleteText.Size = new System.Drawing.Size(395, 151);
            this.deleteText.TabIndex = 3;
            this.deleteText.Text = "";
            // 
            // QueryMaker
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(906, 542);
            this.Controls.Add(this.panel1);
            this.Margin = new System.Windows.Forms.Padding(3, 2, 3, 2);
            this.Name = "QueryMaker";
            this.Text = "QueryMaker";
            this.panel1.ResumeLayout(false);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridDbTable)).EndInit();
            this.panel3.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.gridDbTableSchema)).EndInit();
            this.tableLayoutPanel2.ResumeLayout(false);
            this.panel4.ResumeLayout(false);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Button btnSearchDb;
        private System.Windows.Forms.ComboBox cmbDbType;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.DataGridView gridDbTable;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.TextBox txtTableNm;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.ComboBox cmbSchema;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.DataGridView gridDbTableSchema;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel2;
        private System.Windows.Forms.Panel panel4;
        private System.Windows.Forms.Button btnCreateScript;
        private System.Windows.Forms.RichTextBox searchText;
        private System.Windows.Forms.RichTextBox deleteText;
        private System.Windows.Forms.RichTextBox saveText;
    }
}