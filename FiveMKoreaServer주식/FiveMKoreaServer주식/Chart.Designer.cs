namespace FiveMKoreaServer주식
{
    partial class Chart
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
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.idlabel = new System.Windows.Forms.Label();
            this.money = new System.Windows.Forms.Label();
            this.idview = new System.Windows.Forms.TextBox();
            this.moneyview = new System.Windows.Forms.TextBox();
            this.button5 = new System.Windows.Forms.Button();
            this.button6 = new System.Windows.Forms.Button();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.Refresh1 = new System.Windows.Forms.Button();
            this.btSellStock = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.tbxCompanyName1 = new System.Windows.Forms.TextBox();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.tbxMoney1 = new System.Windows.Forms.TextBox();
            this.tbxUserStockPrice1 = new System.Windows.Forms.TextBox();
            this.groupBox2 = new System.Windows.Forms.GroupBox();
            this.Refresh = new System.Windows.Forms.Button();
            this.btBuyStock = new System.Windows.Forms.Button();
            this.label3 = new System.Windows.Forms.Label();
            this.tbxCompanyName = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.tbxMoney = new System.Windows.Forms.TextBox();
            this.tbxUserStockPrice = new System.Windows.Forms.TextBox();
            this.gridBuy = new System.Windows.Forms.DataGridView();
            this.gridSell = new System.Windows.Forms.DataGridView();
            this.label10 = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.btRecord = new System.Windows.Forms.Button();
            this.btnRefill = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.groupBox2.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridBuy)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.gridSell)).BeginInit();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AllowUserToOrderColumns = true;
            this.dataGridView1.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Location = new System.Drawing.Point(12, 12);
            this.dataGridView1.MultiSelect = false;
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.ReadOnly = true;
            this.dataGridView1.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.dataGridView1.RowTemplate.Height = 23;
            this.dataGridView1.Size = new System.Drawing.Size(501, 473);
            this.dataGridView1.TabIndex = 0;
            // 
            // idlabel
            // 
            this.idlabel.AutoSize = true;
            this.idlabel.Location = new System.Drawing.Point(537, 20);
            this.idlabel.Name = "idlabel";
            this.idlabel.Size = new System.Drawing.Size(41, 12);
            this.idlabel.TabIndex = 17;
            this.idlabel.Text = "아이디";
            // 
            // money
            // 
            this.money.AutoSize = true;
            this.money.Location = new System.Drawing.Point(537, 47);
            this.money.Name = "money";
            this.money.Size = new System.Drawing.Size(53, 12);
            this.money.TabIndex = 18;
            this.money.Text = "보유자금";
            // 
            // idview
            // 
            this.idview.BackColor = System.Drawing.Color.White;
            this.idview.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.idview.Location = new System.Drawing.Point(600, 20);
            this.idview.Name = "idview";
            this.idview.ReadOnly = true;
            this.idview.Size = new System.Drawing.Size(186, 14);
            this.idview.TabIndex = 19;
            // 
            // moneyview
            // 
            this.moneyview.BackColor = System.Drawing.Color.White;
            this.moneyview.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.moneyview.Location = new System.Drawing.Point(600, 47);
            this.moneyview.Name = "moneyview";
            this.moneyview.ReadOnly = true;
            this.moneyview.Size = new System.Drawing.Size(186, 14);
            this.moneyview.TabIndex = 20;
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(695, 69);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(75, 36);
            this.button5.TabIndex = 22;
            this.button5.Text = "종 료";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // button6
            // 
            this.button6.Location = new System.Drawing.Point(614, 69);
            this.button6.Name = "button6";
            this.button6.Size = new System.Drawing.Size(75, 36);
            this.button6.TabIndex = 21;
            this.button6.Text = "로 그 아 웃";
            this.button6.UseVisualStyleBackColor = true;
            this.button6.Click += new System.EventHandler(this.button6_Click);
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("굴림", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label7.ForeColor = System.Drawing.Color.Red;
            this.label7.Location = new System.Drawing.Point(554, 130);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(232, 12);
            this.label7.TabIndex = 23;
            this.label7.Text = "주가는 5초에 한번씩 업데이트 됩니다.";
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("굴림", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label8.ForeColor = System.Drawing.Color.Red;
            this.label8.Location = new System.Drawing.Point(554, 147);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(168, 12);
            this.label8.TabIndex = 24;
            this.label8.Text = "매도는 전체 판매가 됩니다.";
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Font = new System.Drawing.Font("굴림", 9F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label9.ForeColor = System.Drawing.Color.Red;
            this.label9.Location = new System.Drawing.Point(554, 166);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(69, 12);
            this.label9.TabIndex = 25;
            this.label9.Text = "(테스트중)";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.Refresh1);
            this.groupBox1.Controls.Add(this.btSellStock);
            this.groupBox1.Controls.Add(this.label4);
            this.groupBox1.Controls.Add(this.tbxCompanyName1);
            this.groupBox1.Controls.Add(this.label5);
            this.groupBox1.Controls.Add(this.label6);
            this.groupBox1.Controls.Add(this.tbxMoney1);
            this.groupBox1.Controls.Add(this.tbxUserStockPrice1);
            this.groupBox1.Location = new System.Drawing.Point(519, 332);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(278, 153);
            this.groupBox1.TabIndex = 26;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "매도";
            // 
            // Refresh1
            // 
            this.Refresh1.Location = new System.Drawing.Point(175, 110);
            this.Refresh1.Name = "Refresh1";
            this.Refresh1.Size = new System.Drawing.Size(75, 36);
            this.Refresh1.TabIndex = 24;
            this.Refresh1.Text = "초 기 화";
            this.Refresh1.UseVisualStyleBackColor = true;
            // 
            // btSellStock
            // 
            this.btSellStock.Location = new System.Drawing.Point(94, 110);
            this.btSellStock.Name = "btSellStock";
            this.btSellStock.Size = new System.Drawing.Size(75, 36);
            this.btSellStock.TabIndex = 23;
            this.btSellStock.Text = "매 도";
            this.btSellStock.UseVisualStyleBackColor = true;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(17, 32);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(41, 12);
            this.label4.TabIndex = 22;
            this.label4.Text = "회사명";
            // 
            // tbxCompanyName1
            // 
            this.tbxCompanyName1.BackColor = System.Drawing.Color.White;
            this.tbxCompanyName1.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tbxCompanyName1.Location = new System.Drawing.Point(80, 32);
            this.tbxCompanyName1.Name = "tbxCompanyName1";
            this.tbxCompanyName1.ReadOnly = true;
            this.tbxCompanyName1.Size = new System.Drawing.Size(186, 14);
            this.tbxCompanyName1.TabIndex = 21;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(17, 86);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(41, 12);
            this.label5.TabIndex = 20;
            this.label5.Text = "매도액";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Location = new System.Drawing.Point(17, 59);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(17, 12);
            this.label6.TabIndex = 19;
            this.label6.Text = "주";
            // 
            // tbxMoney1
            // 
            this.tbxMoney1.BackColor = System.Drawing.Color.White;
            this.tbxMoney1.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tbxMoney1.Location = new System.Drawing.Point(80, 86);
            this.tbxMoney1.Name = "tbxMoney1";
            this.tbxMoney1.ReadOnly = true;
            this.tbxMoney1.Size = new System.Drawing.Size(186, 14);
            this.tbxMoney1.TabIndex = 18;
            // 
            // tbxUserStockPrice1
            // 
            this.tbxUserStockPrice1.Location = new System.Drawing.Point(80, 56);
            this.tbxUserStockPrice1.Name = "tbxUserStockPrice1";
            this.tbxUserStockPrice1.Size = new System.Drawing.Size(186, 21);
            this.tbxUserStockPrice1.TabIndex = 17;
            // 
            // groupBox2
            // 
            this.groupBox2.Controls.Add(this.Refresh);
            this.groupBox2.Controls.Add(this.btBuyStock);
            this.groupBox2.Controls.Add(this.label3);
            this.groupBox2.Controls.Add(this.tbxCompanyName);
            this.groupBox2.Controls.Add(this.label2);
            this.groupBox2.Controls.Add(this.label1);
            this.groupBox2.Controls.Add(this.tbxMoney);
            this.groupBox2.Controls.Add(this.tbxUserStockPrice);
            this.groupBox2.Location = new System.Drawing.Point(519, 181);
            this.groupBox2.Name = "groupBox2";
            this.groupBox2.Size = new System.Drawing.Size(276, 145);
            this.groupBox2.TabIndex = 27;
            this.groupBox2.TabStop = false;
            this.groupBox2.Text = "매수";
            // 
            // Refresh
            // 
            this.Refresh.Location = new System.Drawing.Point(177, 98);
            this.Refresh.Name = "Refresh";
            this.Refresh.Size = new System.Drawing.Size(75, 36);
            this.Refresh.TabIndex = 22;
            this.Refresh.Text = "초 기 화";
            this.Refresh.UseVisualStyleBackColor = true;
            // 
            // btBuyStock
            // 
            this.btBuyStock.Location = new System.Drawing.Point(96, 98);
            this.btBuyStock.Name = "btBuyStock";
            this.btBuyStock.Size = new System.Drawing.Size(75, 36);
            this.btBuyStock.TabIndex = 21;
            this.btBuyStock.Text = "매 수";
            this.btBuyStock.UseVisualStyleBackColor = true;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(19, 20);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(41, 12);
            this.label3.TabIndex = 20;
            this.label3.Text = "회사명";
            // 
            // tbxCompanyName
            // 
            this.tbxCompanyName.BackColor = System.Drawing.Color.White;
            this.tbxCompanyName.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tbxCompanyName.Location = new System.Drawing.Point(82, 20);
            this.tbxCompanyName.Name = "tbxCompanyName";
            this.tbxCompanyName.ReadOnly = true;
            this.tbxCompanyName.Size = new System.Drawing.Size(186, 14);
            this.tbxCompanyName.TabIndex = 19;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(19, 74);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(41, 12);
            this.label2.TabIndex = 18;
            this.label2.Text = "매수액";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(19, 47);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(17, 12);
            this.label1.TabIndex = 17;
            this.label1.Text = "주";
            // 
            // tbxMoney
            // 
            this.tbxMoney.BackColor = System.Drawing.Color.White;
            this.tbxMoney.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.tbxMoney.Location = new System.Drawing.Point(82, 74);
            this.tbxMoney.Name = "tbxMoney";
            this.tbxMoney.ReadOnly = true;
            this.tbxMoney.Size = new System.Drawing.Size(186, 14);
            this.tbxMoney.TabIndex = 16;
            // 
            // tbxUserStockPrice
            // 
            this.tbxUserStockPrice.Location = new System.Drawing.Point(82, 44);
            this.tbxUserStockPrice.Name = "tbxUserStockPrice";
            this.tbxUserStockPrice.Size = new System.Drawing.Size(186, 21);
            this.tbxUserStockPrice.TabIndex = 15;
            // 
            // gridBuy
            // 
            this.gridBuy.AllowUserToOrderColumns = true;
            this.gridBuy.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.gridBuy.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridBuy.Location = new System.Drawing.Point(803, 30);
            this.gridBuy.MultiSelect = false;
            this.gridBuy.Name = "gridBuy";
            this.gridBuy.ReadOnly = true;
            this.gridBuy.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.gridBuy.RowTemplate.Height = 23;
            this.gridBuy.Size = new System.Drawing.Size(525, 216);
            this.gridBuy.TabIndex = 28;
            // 
            // gridSell
            // 
            this.gridSell.AllowUserToOrderColumns = true;
            this.gridSell.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.gridSell.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridSell.Location = new System.Drawing.Point(803, 270);
            this.gridSell.MultiSelect = false;
            this.gridSell.Name = "gridSell";
            this.gridSell.ReadOnly = true;
            this.gridSell.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.gridSell.RowTemplate.Height = 23;
            this.gridSell.Size = new System.Drawing.Size(525, 219);
            this.gridSell.TabIndex = 29;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(801, 9);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(57, 12);
            this.label10.TabIndex = 30;
            this.label10.Text = "매수 기록";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Location = new System.Drawing.Point(801, 255);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(57, 12);
            this.label11.TabIndex = 31;
            this.label11.Text = "매도 기록";
            // 
            // btRecord
            // 
            this.btRecord.Location = new System.Drawing.Point(883, 4);
            this.btRecord.Name = "btRecord";
            this.btRecord.Size = new System.Drawing.Size(260, 23);
            this.btRecord.TabIndex = 32;
            this.btRecord.Text = "기록 새로고침";
            this.btRecord.UseVisualStyleBackColor = true;
            // 
            // btnRefill
            // 
            this.btnRefill.Location = new System.Drawing.Point(1158, 4);
            this.btnRefill.Name = "btnRefill";
            this.btnRefill.Size = new System.Drawing.Size(170, 23);
            this.btnRefill.TabIndex = 33;
            this.btnRefill.Text = "충전 및 출금";
            this.btnRefill.UseVisualStyleBackColor = true;
            // 
            // Chart
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(1340, 494);
            this.Controls.Add(this.btnRefill);
            this.Controls.Add(this.btRecord);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.gridSell);
            this.Controls.Add(this.gridBuy);
            this.Controls.Add(this.groupBox2);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.button6);
            this.Controls.Add(this.moneyview);
            this.Controls.Add(this.idview);
            this.Controls.Add(this.money);
            this.Controls.Add(this.idlabel);
            this.Controls.Add(this.dataGridView1);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "Chart";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "차트";
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.groupBox2.ResumeLayout(false);
            this.groupBox2.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.gridBuy)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.gridSell)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.Label idlabel;
        private System.Windows.Forms.Label money;
        private System.Windows.Forms.TextBox idview;
        private System.Windows.Forms.TextBox moneyview;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.Button button6;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button Refresh1;
        private System.Windows.Forms.Button btSellStock;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.TextBox tbxCompanyName1;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.TextBox tbxMoney1;
        private System.Windows.Forms.TextBox tbxUserStockPrice1;
        private System.Windows.Forms.GroupBox groupBox2;
        private System.Windows.Forms.Button Refresh;
        private System.Windows.Forms.Button btBuyStock;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.TextBox tbxCompanyName;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox tbxMoney;
        private System.Windows.Forms.TextBox tbxUserStockPrice;
        private System.Windows.Forms.DataGridView gridBuy;
        private System.Windows.Forms.DataGridView gridSell;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Button btRecord;
        private System.Windows.Forms.Button btnRefill;
    }
}