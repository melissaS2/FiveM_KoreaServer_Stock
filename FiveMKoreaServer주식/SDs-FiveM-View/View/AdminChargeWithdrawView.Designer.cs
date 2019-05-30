namespace SDs.FiveM.View.View
{
    partial class AdminChargeWithdrawView
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
            this.btnRefresh = new System.Windows.Forms.Button();
            this.btnCancel = new System.Windows.Forms.Button();
            this.btnApply = new System.Windows.Forms.Button();
            this.tabControl = new System.Windows.Forms.TabControl();
            this.tabStock = new System.Windows.Forms.TabPage();
            this.grid_GameMoney = new System.Windows.Forms.DataGridView();
            this.grid_GameMoney_CheckBox = new System.Windows.Forms.DataGridViewCheckBoxColumn();
            this.tabGame = new System.Windows.Forms.TabPage();
            this.grid_StockMoney = new System.Windows.Forms.DataGridView();
            this.grid_StockMoney_CheckBox = new System.Windows.Forms.DataGridViewCheckBoxColumn();
            this.panel1.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.panel2.SuspendLayout();
            this.tabControl.SuspendLayout();
            this.tabStock.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grid_GameMoney)).BeginInit();
            this.tabGame.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grid_StockMoney)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.tableLayoutPanel1);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(643, 409);
            this.panel1.TabIndex = 0;
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 1;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Controls.Add(this.panel2, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.tabControl, 0, 1);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 2;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 40F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 20F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(643, 409);
            this.tableLayoutPanel1.TabIndex = 0;
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.btnRefresh);
            this.panel2.Controls.Add(this.btnCancel);
            this.panel2.Controls.Add(this.btnApply);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(0, 0);
            this.panel2.Margin = new System.Windows.Forms.Padding(0);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(643, 40);
            this.panel2.TabIndex = 0;
            // 
            // btnRefresh
            // 
            this.btnRefresh.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnRefresh.Location = new System.Drawing.Point(318, 7);
            this.btnRefresh.Name = "btnRefresh";
            this.btnRefresh.Size = new System.Drawing.Size(100, 30);
            this.btnRefresh.TabIndex = 2;
            this.btnRefresh.Text = "새로고침";
            this.btnRefresh.UseVisualStyleBackColor = true;
            // 
            // btnCancel
            // 
            this.btnCancel.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnCancel.Location = new System.Drawing.Point(530, 7);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(100, 30);
            this.btnCancel.TabIndex = 1;
            this.btnCancel.Text = "거절";
            this.btnCancel.UseVisualStyleBackColor = true;
            // 
            // btnApply
            // 
            this.btnApply.Anchor = ((System.Windows.Forms.AnchorStyles)((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Right)));
            this.btnApply.Location = new System.Drawing.Point(424, 7);
            this.btnApply.Name = "btnApply";
            this.btnApply.Size = new System.Drawing.Size(100, 30);
            this.btnApply.TabIndex = 0;
            this.btnApply.Text = "수락";
            this.btnApply.UseVisualStyleBackColor = true;
            // 
            // tabControl
            // 
            this.tabControl.Controls.Add(this.tabStock);
            this.tabControl.Controls.Add(this.tabGame);
            this.tabControl.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tabControl.Location = new System.Drawing.Point(3, 43);
            this.tabControl.Name = "tabControl";
            this.tabControl.SelectedIndex = 0;
            this.tabControl.Size = new System.Drawing.Size(637, 363);
            this.tabControl.TabIndex = 2;
            // 
            // tabStock
            // 
            this.tabStock.Controls.Add(this.grid_GameMoney);
            this.tabStock.Location = new System.Drawing.Point(4, 25);
            this.tabStock.Name = "tabStock";
            this.tabStock.Padding = new System.Windows.Forms.Padding(3);
            this.tabStock.Size = new System.Drawing.Size(629, 334);
            this.tabStock.TabIndex = 0;
            this.tabStock.Text = "충전신청";
            this.tabStock.UseVisualStyleBackColor = true;
            // 
            // grid_GameMoney
            // 
            this.grid_GameMoney.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grid_GameMoney.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.grid_GameMoney_CheckBox});
            this.grid_GameMoney.Dock = System.Windows.Forms.DockStyle.Fill;
            this.grid_GameMoney.Location = new System.Drawing.Point(3, 3);
            this.grid_GameMoney.Name = "grid_GameMoney";
            this.grid_GameMoney.RowTemplate.Height = 27;
            this.grid_GameMoney.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.grid_GameMoney.Size = new System.Drawing.Size(623, 328);
            this.grid_GameMoney.TabIndex = 0;
            // 
            // grid_GameMoney_CheckBox
            // 
            this.grid_GameMoney_CheckBox.HeaderText = "";
            this.grid_GameMoney_CheckBox.Name = "grid_GameMoney_CheckBox";
            // 
            // tabGame
            // 
            this.tabGame.Controls.Add(this.grid_StockMoney);
            this.tabGame.Location = new System.Drawing.Point(4, 25);
            this.tabGame.Name = "tabGame";
            this.tabGame.Padding = new System.Windows.Forms.Padding(3);
            this.tabGame.Size = new System.Drawing.Size(629, 334);
            this.tabGame.TabIndex = 1;
            this.tabGame.Text = "출금신청";
            this.tabGame.UseVisualStyleBackColor = true;
            // 
            // grid_StockMoney
            // 
            this.grid_StockMoney.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grid_StockMoney.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.grid_StockMoney_CheckBox});
            this.grid_StockMoney.Dock = System.Windows.Forms.DockStyle.Fill;
            this.grid_StockMoney.Location = new System.Drawing.Point(3, 3);
            this.grid_StockMoney.Name = "grid_StockMoney";
            this.grid_StockMoney.RowTemplate.Height = 27;
            this.grid_StockMoney.SelectionMode = System.Windows.Forms.DataGridViewSelectionMode.FullRowSelect;
            this.grid_StockMoney.Size = new System.Drawing.Size(623, 328);
            this.grid_StockMoney.TabIndex = 0;
            // 
            // grid_StockMoney_CheckBox
            // 
            this.grid_StockMoney_CheckBox.HeaderText = "";
            this.grid_StockMoney_CheckBox.Name = "grid_StockMoney_CheckBox";
            // 
            // AdminChargeWithdrawView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(643, 409);
            this.Controls.Add(this.panel1);
            this.Name = "AdminChargeWithdrawView";
            this.Text = "충전/출금 신청 관리";
            this.panel1.ResumeLayout(false);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.tabControl.ResumeLayout(false);
            this.tabStock.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grid_GameMoney)).EndInit();
            this.tabGame.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grid_StockMoney)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.Button btnApply;
        private System.Windows.Forms.TabControl tabControl;
        private System.Windows.Forms.TabPage tabStock;
        private System.Windows.Forms.TabPage tabGame;
        private System.Windows.Forms.DataGridView grid_GameMoney;
        private System.Windows.Forms.DataGridView grid_StockMoney;
        private System.Windows.Forms.Button btnRefresh;
        private System.Windows.Forms.DataGridViewCheckBoxColumn grid_GameMoney_CheckBox;
        private System.Windows.Forms.DataGridViewCheckBoxColumn grid_StockMoney_CheckBox;
    }
}