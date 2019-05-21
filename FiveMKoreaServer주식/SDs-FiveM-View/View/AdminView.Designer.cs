namespace SDs.FiveM.View.View
{
    partial class AdminView
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(AdminView));
            this.btUserSave = new System.Windows.Forms.Button();
            this.btUserDelete = new System.Windows.Forms.Button();
            this.btUserAdd = new System.Windows.Forms.Button();
            this.txtUserMoney = new System.Windows.Forms.TextBox();
            this.txtPw = new System.Windows.Forms.TextBox();
            this.txtId = new System.Windows.Forms.TextBox();
            this.label10 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label8 = new System.Windows.Forms.Label();
            this.btStop = new System.Windows.Forms.Button();
            this.btPlay = new System.Windows.Forms.Button();
            this.btUserRefresh = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btDelete = new System.Windows.Forms.Button();
            this.btUpdate = new System.Windows.Forms.Button();
            this.label6 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.grd_User = new System.Windows.Forms.DataGridView();
            this.btExit = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.btRefresh = new System.Windows.Forms.Button();
            this.btAdd = new System.Windows.Forms.Button();
            this.label3 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.txtLeftCnt = new System.Windows.Forms.TextBox();
            this.txtMoney = new System.Windows.Forms.TextBox();
            this.txtCompany = new System.Windows.Forms.TextBox();
            this.grd_StockCompany = new System.Windows.Forms.DataGridView();
            this.groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.grd_User)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.grd_StockCompany)).BeginInit();
            this.SuspendLayout();
            // 
            // btUserSave
            // 
            this.btUserSave.Location = new System.Drawing.Point(516, 648);
            this.btUserSave.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btUserSave.Name = "btUserSave";
            this.btUserSave.Size = new System.Drawing.Size(116, 29);
            this.btUserSave.TabIndex = 61;
            this.btUserSave.Text = "수정사항 반영";
            this.btUserSave.UseVisualStyleBackColor = true;
            // 
            // btUserDelete
            // 
            this.btUserDelete.Location = new System.Drawing.Point(638, 648);
            this.btUserDelete.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btUserDelete.Name = "btUserDelete";
            this.btUserDelete.Size = new System.Drawing.Size(113, 29);
            this.btUserDelete.TabIndex = 59;
            this.btUserDelete.Text = "선택회원 삭제";
            this.btUserDelete.UseVisualStyleBackColor = true;
            // 
            // btUserAdd
            // 
            this.btUserAdd.Location = new System.Drawing.Point(638, 611);
            this.btUserAdd.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btUserAdd.Name = "btUserAdd";
            this.btUserAdd.Size = new System.Drawing.Size(113, 29);
            this.btUserAdd.TabIndex = 58;
            this.btUserAdd.Text = "신규회원 추가";
            this.btUserAdd.UseVisualStyleBackColor = true;
            // 
            // txtUserMoney
            // 
            this.txtUserMoney.Location = new System.Drawing.Point(516, 578);
            this.txtUserMoney.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtUserMoney.Name = "txtUserMoney";
            this.txtUserMoney.Size = new System.Drawing.Size(235, 25);
            this.txtUserMoney.TabIndex = 57;
            // 
            // txtPw
            // 
            this.txtPw.Location = new System.Drawing.Point(516, 545);
            this.txtPw.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtPw.Name = "txtPw";
            this.txtPw.Size = new System.Drawing.Size(235, 25);
            this.txtPw.TabIndex = 56;
            // 
            // txtId
            // 
            this.txtId.Location = new System.Drawing.Point(516, 511);
            this.txtId.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtId.Name = "txtId";
            this.txtId.Size = new System.Drawing.Size(236, 25);
            this.txtId.TabIndex = 55;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(459, 582);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(52, 15);
            this.label10.TabIndex = 54;
            this.label10.Text = "Money";
            this.label10.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(438, 549);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(72, 15);
            this.label9.TabIndex = 53;
            this.label9.Text = "Password";
            this.label9.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(491, 515);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(20, 15);
            this.label7.TabIndex = 52;
            this.label7.Text = "ID";
            this.label7.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label8.Location = new System.Drawing.Point(587, 482);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(101, 20);
            this.label8.TabIndex = 51;
            this.label8.Text = "유저 관리";
            // 
            // btStop
            // 
            this.btStop.Location = new System.Drawing.Point(7, 70);
            this.btStop.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btStop.Name = "btStop";
            this.btStop.Size = new System.Drawing.Size(114, 38);
            this.btStop.TabIndex = 20;
            this.btStop.Text = "정지";
            this.btStop.UseVisualStyleBackColor = true;
            // 
            // btPlay
            // 
            this.btPlay.Location = new System.Drawing.Point(7, 25);
            this.btPlay.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btPlay.Name = "btPlay";
            this.btPlay.Size = new System.Drawing.Size(114, 38);
            this.btPlay.TabIndex = 19;
            this.btPlay.Text = "실행";
            this.btPlay.UseVisualStyleBackColor = true;
            // 
            // btUserRefresh
            // 
            this.btUserRefresh.Location = new System.Drawing.Point(516, 611);
            this.btUserRefresh.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btUserRefresh.Name = "btUserRefresh";
            this.btUserRefresh.Size = new System.Drawing.Size(116, 29);
            this.btUserRefresh.TabIndex = 60;
            this.btUserRefresh.Text = "초기화";
            this.btUserRefresh.UseVisualStyleBackColor = true;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btStop);
            this.groupBox1.Controls.Add(this.btPlay);
            this.groupBox1.Location = new System.Drawing.Point(291, 490);
            this.groupBox1.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Padding = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.groupBox1.Size = new System.Drawing.Size(128, 125);
            this.groupBox1.TabIndex = 50;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "주가 변동";
            // 
            // btDelete
            // 
            this.btDelete.Location = new System.Drawing.Point(188, 672);
            this.btDelete.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btDelete.Name = "btDelete";
            this.btDelete.Size = new System.Drawing.Size(114, 38);
            this.btDelete.TabIndex = 49;
            this.btDelete.Text = "선택 회사 삭제";
            this.btDelete.UseVisualStyleBackColor = true;
            // 
            // btUpdate
            // 
            this.btUpdate.Location = new System.Drawing.Point(68, 672);
            this.btUpdate.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btUpdate.Name = "btUpdate";
            this.btUpdate.Size = new System.Drawing.Size(114, 38);
            this.btUpdate.TabIndex = 48;
            this.btUpdate.Text = "수정 사항 반영";
            this.btUpdate.UseVisualStyleBackColor = true;
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label6.Location = new System.Drawing.Point(556, 16);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(172, 20);
            this.label6.TabIndex = 47;
            this.label6.Text = "유저 목록 리스트";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label5.Location = new System.Drawing.Point(133, 16);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(172, 20);
            this.label5.TabIndex = 46;
            this.label5.Text = "주식 회사 리스트";
            // 
            // grd_User
            // 
            this.grd_User.AllowUserToOrderColumns = true;
            this.grd_User.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.grd_User.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grd_User.Location = new System.Drawing.Point(440, 63);
            this.grd_User.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.grd_User.MultiSelect = false;
            this.grd_User.Name = "grd_User";
            this.grd_User.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.grd_User.RowTemplate.Height = 23;
            this.grd_User.Size = new System.Drawing.Size(407, 406);
            this.grd_User.TabIndex = 45;
            // 
            // btExit
            // 
            this.btExit.Location = new System.Drawing.Point(758, 12);
            this.btExit.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btExit.Name = "btExit";
            this.btExit.Size = new System.Drawing.Size(89, 31);
            this.btExit.TabIndex = 44;
            this.btExit.Text = "종 료";
            this.btExit.UseVisualStyleBackColor = true;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label4.Location = new System.Drawing.Point(87, 482);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(201, 20);
            this.label4.TabIndex = 43;
            this.label4.Text = "신규 주식 회사 추가";
            // 
            // btRefresh
            // 
            this.btRefresh.Location = new System.Drawing.Point(68, 627);
            this.btRefresh.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btRefresh.Name = "btRefresh";
            this.btRefresh.Size = new System.Drawing.Size(114, 38);
            this.btRefresh.TabIndex = 42;
            this.btRefresh.Text = "초 기 화";
            this.btRefresh.UseVisualStyleBackColor = true;
            // 
            // btAdd
            // 
            this.btAdd.Location = new System.Drawing.Point(188, 627);
            this.btAdd.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btAdd.Name = "btAdd";
            this.btAdd.Size = new System.Drawing.Size(114, 38);
            this.btAdd.TabIndex = 41;
            this.btAdd.Text = "신 규 추 가";
            this.btAdd.UseVisualStyleBackColor = true;
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(17, 600);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(52, 15);
            this.label3.TabIndex = 40;
            this.label3.Text = "남은주";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(17, 566);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(42, 15);
            this.label2.TabIndex = 39;
            this.label2.Text = "주 가";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(17, 532);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(52, 15);
            this.label1.TabIndex = 38;
            this.label1.Text = "회사명";
            // 
            // txtLeftCnt
            // 
            this.txtLeftCnt.BackColor = System.Drawing.Color.White;
            this.txtLeftCnt.Location = new System.Drawing.Point(75, 595);
            this.txtLeftCnt.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtLeftCnt.Name = "txtLeftCnt";
            this.txtLeftCnt.Size = new System.Drawing.Size(204, 25);
            this.txtLeftCnt.TabIndex = 37;
            this.txtLeftCnt.Text = "1000";
            // 
            // txtMoney
            // 
            this.txtMoney.BackColor = System.Drawing.Color.White;
            this.txtMoney.Location = new System.Drawing.Point(75, 562);
            this.txtMoney.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtMoney.Name = "txtMoney";
            this.txtMoney.Size = new System.Drawing.Size(204, 25);
            this.txtMoney.TabIndex = 36;
            this.txtMoney.Text = "0";
            // 
            // txtCompany
            // 
            this.txtCompany.Location = new System.Drawing.Point(75, 529);
            this.txtCompany.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtCompany.Name = "txtCompany";
            this.txtCompany.Size = new System.Drawing.Size(204, 25);
            this.txtCompany.TabIndex = 35;
            // 
            // grd_StockCompany
            // 
            this.grd_StockCompany.AllowUserToOrderColumns = true;
            this.grd_StockCompany.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.grd_StockCompany.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.grd_StockCompany.Location = new System.Drawing.Point(12, 63);
            this.grd_StockCompany.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.grd_StockCompany.MultiSelect = false;
            this.grd_StockCompany.Name = "grd_StockCompany";
            this.grd_StockCompany.ReadOnly = true;
            this.grd_StockCompany.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.grd_StockCompany.RowTemplate.Height = 23;
            this.grd_StockCompany.Size = new System.Drawing.Size(407, 406);
            this.grd_StockCompany.TabIndex = 34;
            // 
            // AdminView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(863, 725);
            this.Controls.Add(this.btUserSave);
            this.Controls.Add(this.btUserDelete);
            this.Controls.Add(this.btUserAdd);
            this.Controls.Add(this.txtUserMoney);
            this.Controls.Add(this.txtPw);
            this.Controls.Add(this.txtId);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.btUserRefresh);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.btDelete);
            this.Controls.Add(this.btUpdate);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.grd_User);
            this.Controls.Add(this.btExit);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.btRefresh);
            this.Controls.Add(this.btAdd);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.txtLeftCnt);
            this.Controls.Add(this.txtMoney);
            this.Controls.Add(this.txtCompany);
            this.Controls.Add(this.grd_StockCompany);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "AdminView";
            this.Text = "주식 관리 ";
            this.groupBox1.ResumeLayout(false);
            ((System.ComponentModel.ISupportInitialize)(this.grd_User)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.grd_StockCompany)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btUserSave;
        private System.Windows.Forms.Button btUserDelete;
        private System.Windows.Forms.Button btUserAdd;
        private System.Windows.Forms.TextBox txtUserMoney;
        private System.Windows.Forms.TextBox txtPw;
        private System.Windows.Forms.TextBox txtId;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Button btStop;
        private System.Windows.Forms.Button btPlay;
        private System.Windows.Forms.Button btUserRefresh;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btDelete;
        private System.Windows.Forms.Button btUpdate;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.DataGridView grd_User;
        private System.Windows.Forms.Button btExit;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button btRefresh;
        private System.Windows.Forms.Button btAdd;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtLeftCnt;
        private System.Windows.Forms.TextBox txtMoney;
        private System.Windows.Forms.TextBox txtCompany;
        private System.Windows.Forms.DataGridView grd_StockCompany;
    }
}