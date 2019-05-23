namespace SDs.FiveM.View.View
{
    partial class ChargeWithdrawView
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(ChargeWithdrawView));
            this.panel1 = new System.Windows.Forms.Panel();
            this.tableLayoutPanel1 = new System.Windows.Forms.TableLayoutPanel();
            this.panel2 = new System.Windows.Forms.Panel();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.btnExit = new System.Windows.Forms.Button();
            this.btnInit = new System.Windows.Forms.Button();
            this.btnRefillGame = new System.Windows.Forms.Button();
            this.btnRefillStock = new System.Windows.Forms.Button();
            this.txtGameRefill = new System.Windows.Forms.TextBox();
            this.txtStockMoney = new System.Windows.Forms.TextBox();
            this.txtStockRefill = new System.Windows.Forms.TextBox();
            this.txtGameMoney = new System.Windows.Forms.TextBox();
            this.panel3 = new System.Windows.Forms.Panel();
            this.btnCancel = new System.Windows.Forms.Button();
            this.tabStockMoneyRefill = new System.Windows.Forms.TabControl();
            this.tabPage1 = new System.Windows.Forms.TabPage();
            this.grid_GameMoney = new System.Windows.Forms.DataGridView();
            this.tabPage2 = new System.Windows.Forms.TabPage();
            this.grid_StockMoney = new System.Windows.Forms.DataGridView();
            this.panel1.SuspendLayout();
            this.tableLayoutPanel1.SuspendLayout();
            this.panel2.SuspendLayout();
            this.panel3.SuspendLayout();
            this.tabStockMoneyRefill.SuspendLayout();
            this.tabPage1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grid_GameMoney)).BeginInit();
            this.tabPage2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grid_StockMoney)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.tableLayoutPanel1);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(470, 547);
            this.panel1.TabIndex = 0;
            // 
            // tableLayoutPanel1
            // 
            this.tableLayoutPanel1.ColumnCount = 1;
            this.tableLayoutPanel1.ColumnStyles.Add(new System.Windows.Forms.ColumnStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Controls.Add(this.panel2, 0, 0);
            this.tableLayoutPanel1.Controls.Add(this.panel3, 0, 1);
            this.tableLayoutPanel1.Controls.Add(this.tabStockMoneyRefill, 0, 2);
            this.tableLayoutPanel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tableLayoutPanel1.Location = new System.Drawing.Point(0, 0);
            this.tableLayoutPanel1.Name = "tableLayoutPanel1";
            this.tableLayoutPanel1.RowCount = 3;
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 204F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Absolute, 40F));
            this.tableLayoutPanel1.RowStyles.Add(new System.Windows.Forms.RowStyle(System.Windows.Forms.SizeType.Percent, 100F));
            this.tableLayoutPanel1.Size = new System.Drawing.Size(470, 547);
            this.tableLayoutPanel1.TabIndex = 12;
            // 
            // panel2
            // 
            this.panel2.Controls.Add(this.label4);
            this.panel2.Controls.Add(this.label3);
            this.panel2.Controls.Add(this.label2);
            this.panel2.Controls.Add(this.label1);
            this.panel2.Controls.Add(this.btnExit);
            this.panel2.Controls.Add(this.btnInit);
            this.panel2.Controls.Add(this.btnRefillGame);
            this.panel2.Controls.Add(this.btnRefillStock);
            this.panel2.Controls.Add(this.txtGameRefill);
            this.panel2.Controls.Add(this.txtStockMoney);
            this.panel2.Controls.Add(this.txtStockRefill);
            this.panel2.Controls.Add(this.txtGameMoney);
            this.panel2.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel2.Location = new System.Drawing.Point(3, 3);
            this.panel2.Name = "panel2";
            this.panel2.Size = new System.Drawing.Size(464, 198);
            this.panel2.TabIndex = 0;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(19, 133);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(92, 15);
            this.label4.TabIndex = 23;
            this.label4.Text = "출금 할 금액";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(4, 102);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(107, 15);
            this.label3.TabIndex = 22;
            this.label3.Text = "보유 투자 자금";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(19, 37);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(92, 15);
            this.label2.TabIndex = 21;
            this.label2.Text = "충전 할 금액";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(39, 6);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(72, 15);
            this.label1.TabIndex = 20;
            this.label1.Text = "보유 자금";
            // 
            // btnExit
            // 
            this.btnExit.Location = new System.Drawing.Point(255, 161);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(100, 30);
            this.btnExit.TabIndex = 19;
            this.btnExit.Text = "닫기";
            this.btnExit.UseVisualStyleBackColor = true;
            // 
            // btnInit
            // 
            this.btnInit.Location = new System.Drawing.Point(149, 161);
            this.btnInit.Name = "btnInit";
            this.btnInit.Size = new System.Drawing.Size(100, 30);
            this.btnInit.TabIndex = 18;
            this.btnInit.Text = "초기화";
            this.btnInit.UseVisualStyleBackColor = true;
            // 
            // btnRefillGame
            // 
            this.btnRefillGame.Location = new System.Drawing.Point(369, 99);
            this.btnRefillGame.Name = "btnRefillGame";
            this.btnRefillGame.Size = new System.Drawing.Size(75, 54);
            this.btnRefillGame.TabIndex = 17;
            this.btnRefillGame.Text = "출금";
            this.btnRefillGame.UseVisualStyleBackColor = true;
            // 
            // btnRefillStock
            // 
            this.btnRefillStock.Location = new System.Drawing.Point(369, 3);
            this.btnRefillStock.Name = "btnRefillStock";
            this.btnRefillStock.Size = new System.Drawing.Size(75, 54);
            this.btnRefillStock.TabIndex = 16;
            this.btnRefillStock.Text = "충전";
            this.btnRefillStock.UseVisualStyleBackColor = true;
            // 
            // txtGameRefill
            // 
            this.txtGameRefill.Location = new System.Drawing.Point(117, 130);
            this.txtGameRefill.Name = "txtGameRefill";
            this.txtGameRefill.Size = new System.Drawing.Size(246, 25);
            this.txtGameRefill.TabIndex = 15;
            // 
            // txtStockMoney
            // 
            this.txtStockMoney.Enabled = false;
            this.txtStockMoney.Location = new System.Drawing.Point(117, 99);
            this.txtStockMoney.Name = "txtStockMoney";
            this.txtStockMoney.ReadOnly = true;
            this.txtStockMoney.Size = new System.Drawing.Size(246, 25);
            this.txtStockMoney.TabIndex = 14;
            // 
            // txtStockRefill
            // 
            this.txtStockRefill.Location = new System.Drawing.Point(117, 34);
            this.txtStockRefill.Name = "txtStockRefill";
            this.txtStockRefill.Size = new System.Drawing.Size(246, 25);
            this.txtStockRefill.TabIndex = 13;
            // 
            // txtGameMoney
            // 
            this.txtGameMoney.Enabled = false;
            this.txtGameMoney.Location = new System.Drawing.Point(117, 3);
            this.txtGameMoney.Name = "txtGameMoney";
            this.txtGameMoney.ReadOnly = true;
            this.txtGameMoney.Size = new System.Drawing.Size(246, 25);
            this.txtGameMoney.TabIndex = 12;
            // 
            // panel3
            // 
            this.panel3.Controls.Add(this.btnCancel);
            this.panel3.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel3.Location = new System.Drawing.Point(0, 204);
            this.panel3.Margin = new System.Windows.Forms.Padding(0);
            this.panel3.Name = "panel3";
            this.panel3.Size = new System.Drawing.Size(470, 40);
            this.panel3.TabIndex = 1;
            // 
            // btnCancel
            // 
            this.btnCancel.Location = new System.Drawing.Point(358, 3);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(100, 30);
            this.btnCancel.TabIndex = 0;
            this.btnCancel.Text = "신청취소";
            this.btnCancel.UseVisualStyleBackColor = true;
            // 
            // tabStockMoneyRefill
            // 
            this.tabStockMoneyRefill.Controls.Add(this.tabPage1);
            this.tabStockMoneyRefill.Controls.Add(this.tabPage2);
            this.tabStockMoneyRefill.Dock = System.Windows.Forms.DockStyle.Fill;
            this.tabStockMoneyRefill.Location = new System.Drawing.Point(3, 247);
            this.tabStockMoneyRefill.Name = "tabStockMoneyRefill";
            this.tabStockMoneyRefill.SelectedIndex = 0;
            this.tabStockMoneyRefill.Size = new System.Drawing.Size(464, 297);
            this.tabStockMoneyRefill.TabIndex = 2;
            // 
            // tabPage1
            // 
            this.tabPage1.Controls.Add(this.grid_GameMoney);
            this.tabPage1.Location = new System.Drawing.Point(4, 25);
            this.tabPage1.Name = "tabPage1";
            this.tabPage1.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage1.Size = new System.Drawing.Size(456, 268);
            this.tabPage1.TabIndex = 0;
            this.tabPage1.Text = "충전신청";
            this.tabPage1.UseVisualStyleBackColor = true;
            // 
            // grid_GameMoney
            // 
            this.grid_GameMoney.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grid_GameMoney.Dock = System.Windows.Forms.DockStyle.Fill;
            this.grid_GameMoney.Location = new System.Drawing.Point(3, 3);
            this.grid_GameMoney.Name = "grid_GameMoney";
            this.grid_GameMoney.RowTemplate.Height = 27;
            this.grid_GameMoney.Size = new System.Drawing.Size(450, 262);
            this.grid_GameMoney.TabIndex = 0;
            // 
            // tabPage2
            // 
            this.tabPage2.Controls.Add(this.grid_StockMoney);
            this.tabPage2.Location = new System.Drawing.Point(4, 25);
            this.tabPage2.Name = "tabPage2";
            this.tabPage2.Padding = new System.Windows.Forms.Padding(3);
            this.tabPage2.Size = new System.Drawing.Size(456, 268);
            this.tabPage2.TabIndex = 1;
            this.tabPage2.Text = "출금신청";
            this.tabPage2.UseVisualStyleBackColor = true;
            // 
            // grid_StockMoney
            // 
            this.grid_StockMoney.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grid_StockMoney.Dock = System.Windows.Forms.DockStyle.Fill;
            this.grid_StockMoney.Location = new System.Drawing.Point(3, 3);
            this.grid_StockMoney.Name = "grid_StockMoney";
            this.grid_StockMoney.RowTemplate.Height = 27;
            this.grid_StockMoney.Size = new System.Drawing.Size(450, 262);
            this.grid_StockMoney.TabIndex = 0;
            // 
            // ChargeWithdrawView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(470, 547);
            this.Controls.Add(this.panel1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "ChargeWithdrawView";
            this.Text = "충전 및 출금 신청";
            this.panel1.ResumeLayout(false);
            this.tableLayoutPanel1.ResumeLayout(false);
            this.panel2.ResumeLayout(false);
            this.panel2.PerformLayout();
            this.panel3.ResumeLayout(false);
            this.tabStockMoneyRefill.ResumeLayout(false);
            this.tabPage1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grid_GameMoney)).EndInit();
            this.tabPage2.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grid_StockMoney)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.TableLayoutPanel tableLayoutPanel1;
        private System.Windows.Forms.Panel panel2;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnExit;
        private System.Windows.Forms.Button btnInit;
        private System.Windows.Forms.Button btnRefillGame;
        private System.Windows.Forms.Button btnRefillStock;
        private System.Windows.Forms.TextBox txtGameRefill;
        private System.Windows.Forms.TextBox txtStockMoney;
        private System.Windows.Forms.TextBox txtStockRefill;
        private System.Windows.Forms.TextBox txtGameMoney;
        private System.Windows.Forms.Panel panel3;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.TabControl tabStockMoneyRefill;
        private System.Windows.Forms.TabPage tabPage1;
        private System.Windows.Forms.DataGridView grid_GameMoney;
        private System.Windows.Forms.TabPage tabPage2;
        private System.Windows.Forms.DataGridView grid_StockMoney;
    }
}