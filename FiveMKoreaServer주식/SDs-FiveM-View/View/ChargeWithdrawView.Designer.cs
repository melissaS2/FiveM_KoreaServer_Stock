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
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.btnExit = new System.Windows.Forms.Button();
            this.btnInit = new System.Windows.Forms.Button();
            this.btnRefillGame = new System.Windows.Forms.Button();
            this.btnRefillStock = new System.Windows.Forms.Button();
            this.txtStockRefill = new System.Windows.Forms.TextBox();
            this.txtStockMoney = new System.Windows.Forms.TextBox();
            this.txtGameRefill = new System.Windows.Forms.TextBox();
            this.txtGameMoney = new System.Windows.Forms.TextBox();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.label4);
            this.panel1.Controls.Add(this.label3);
            this.panel1.Controls.Add(this.label2);
            this.panel1.Controls.Add(this.label1);
            this.panel1.Controls.Add(this.btnExit);
            this.panel1.Controls.Add(this.btnInit);
            this.panel1.Controls.Add(this.btnRefillGame);
            this.panel1.Controls.Add(this.btnRefillStock);
            this.panel1.Controls.Add(this.txtStockRefill);
            this.panel1.Controls.Add(this.txtStockMoney);
            this.panel1.Controls.Add(this.txtGameRefill);
            this.panel1.Controls.Add(this.txtGameMoney);
            this.panel1.Dock = System.Windows.Forms.DockStyle.Fill;
            this.panel1.Location = new System.Drawing.Point(0, 0);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(470, 226);
            this.panel1.TabIndex = 0;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(31, 154);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(92, 15);
            this.label4.TabIndex = 11;
            this.label4.Text = "출금 할 금액";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(16, 123);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(107, 15);
            this.label3.TabIndex = 10;
            this.label3.Text = "보유 투자 자금";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(31, 58);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(92, 15);
            this.label2.TabIndex = 9;
            this.label2.Text = "충전 할 금액";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(51, 27);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(72, 15);
            this.label1.TabIndex = 8;
            this.label1.Text = "보유 자금";
            // 
            // btnExit
            // 
            this.btnExit.Location = new System.Drawing.Point(267, 182);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(100, 30);
            this.btnExit.TabIndex = 7;
            this.btnExit.Text = "닫기";
            this.btnExit.UseVisualStyleBackColor = true;
            // 
            // btnInit
            // 
            this.btnInit.Location = new System.Drawing.Point(161, 182);
            this.btnInit.Name = "btnInit";
            this.btnInit.Size = new System.Drawing.Size(100, 30);
            this.btnInit.TabIndex = 6;
            this.btnInit.Text = "초기화";
            this.btnInit.UseVisualStyleBackColor = true;
            // 
            // btnRefillGame
            // 
            this.btnRefillGame.Location = new System.Drawing.Point(381, 120);
            this.btnRefillGame.Name = "btnRefillGame";
            this.btnRefillGame.Size = new System.Drawing.Size(75, 54);
            this.btnRefillGame.TabIndex = 5;
            this.btnRefillGame.Text = "출금";
            this.btnRefillGame.UseVisualStyleBackColor = true;
            // 
            // btnRefillStock
            // 
            this.btnRefillStock.Location = new System.Drawing.Point(381, 24);
            this.btnRefillStock.Name = "btnRefillStock";
            this.btnRefillStock.Size = new System.Drawing.Size(75, 54);
            this.btnRefillStock.TabIndex = 4;
            this.btnRefillStock.Text = "충전";
            this.btnRefillStock.UseVisualStyleBackColor = true;
            // 
            // txtStockRefill
            // 
            this.txtStockRefill.Location = new System.Drawing.Point(129, 151);
            this.txtStockRefill.Name = "txtStockRefill";
            this.txtStockRefill.Size = new System.Drawing.Size(246, 25);
            this.txtStockRefill.TabIndex = 3;
            // 
            // txtStockMoney
            // 
            this.txtStockMoney.Enabled = false;
            this.txtStockMoney.Location = new System.Drawing.Point(129, 120);
            this.txtStockMoney.Name = "txtStockMoney";
            this.txtStockMoney.ReadOnly = true;
            this.txtStockMoney.Size = new System.Drawing.Size(246, 25);
            this.txtStockMoney.TabIndex = 2;
            // 
            // txtGameRefill
            // 
            this.txtGameRefill.Location = new System.Drawing.Point(129, 55);
            this.txtGameRefill.Name = "txtGameRefill";
            this.txtGameRefill.Size = new System.Drawing.Size(246, 25);
            this.txtGameRefill.TabIndex = 1;
            // 
            // txtGameMoney
            // 
            this.txtGameMoney.Enabled = false;
            this.txtGameMoney.Location = new System.Drawing.Point(129, 24);
            this.txtGameMoney.Name = "txtGameMoney";
            this.txtGameMoney.ReadOnly = true;
            this.txtGameMoney.Size = new System.Drawing.Size(246, 25);
            this.txtGameMoney.TabIndex = 0;
            // 
            // ChargeWithdrawView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(470, 226);
            this.Controls.Add(this.panel1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "ChargeWithdrawView";
            this.Text = "충전 및 출금";
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Button btnExit;
        private System.Windows.Forms.Button btnInit;
        private System.Windows.Forms.Button btnRefillGame;
        private System.Windows.Forms.Button btnRefillStock;
        private System.Windows.Forms.TextBox txtStockRefill;
        private System.Windows.Forms.TextBox txtStockMoney;
        private System.Windows.Forms.TextBox txtGameRefill;
        private System.Windows.Forms.TextBox txtGameMoney;
    }
}