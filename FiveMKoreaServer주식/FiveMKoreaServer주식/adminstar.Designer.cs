namespace FiveMKoreaServer주식
{
    partial class adminstar
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
            this.newcompany = new System.Windows.Forms.TextBox();
            this.newmoney = new System.Windows.Forms.TextBox();
            this.newju = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.btAdd = new System.Windows.Forms.Button();
            this.btRefresh = new System.Windows.Forms.Button();
            this.label4 = new System.Windows.Forms.Label();
            this.btExit = new System.Windows.Forms.Button();
            this.gridUser = new System.Windows.Forms.DataGridView();
            this.label5 = new System.Windows.Forms.Label();
            this.label6 = new System.Windows.Forms.Label();
            this.btUpdate = new System.Windows.Forms.Button();
            this.btDelete = new System.Windows.Forms.Button();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.btStop = new System.Windows.Forms.Button();
            this.btPlay = new System.Windows.Forms.Button();
            this.label8 = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.label9 = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.txtId = new System.Windows.Forms.TextBox();
            this.txtPassword = new System.Windows.Forms.TextBox();
            this.txtUserMoney = new System.Windows.Forms.TextBox();
            this.btUserAdd = new System.Windows.Forms.Button();
            this.btUserDelete = new System.Windows.Forms.Button();
            this.btUserRefresh = new System.Windows.Forms.Button();
            this.btUserSave = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.gridUser)).BeginInit();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // dataGridView1
            // 
            this.dataGridView1.AllowUserToOrderColumns = true;
            this.dataGridView1.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Location = new System.Drawing.Point(12, 50);
            this.dataGridView1.MultiSelect = false;
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.ReadOnly = true;
            this.dataGridView1.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.dataGridView1.RowTemplate.Height = 23;
            this.dataGridView1.Size = new System.Drawing.Size(356, 325);
            this.dataGridView1.TabIndex = 1;
            // 
            // newcompany
            // 
            this.newcompany.Location = new System.Drawing.Point(61, 422);
            this.newcompany.Name = "newcompany";
            this.newcompany.Size = new System.Drawing.Size(179, 21);
            this.newcompany.TabIndex = 2;
            // 
            // newmoney
            // 
            this.newmoney.BackColor = System.Drawing.Color.White;
            this.newmoney.Location = new System.Drawing.Point(61, 449);
            this.newmoney.Name = "newmoney";
            this.newmoney.Size = new System.Drawing.Size(179, 21);
            this.newmoney.TabIndex = 3;
            this.newmoney.Text = "0";
            // 
            // newju
            // 
            this.newju.BackColor = System.Drawing.Color.White;
            this.newju.Location = new System.Drawing.Point(61, 476);
            this.newju.Name = "newju";
            this.newju.Size = new System.Drawing.Size(179, 21);
            this.newju.TabIndex = 4;
            this.newju.Text = "1000";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(17, 425);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(41, 12);
            this.label1.TabIndex = 5;
            this.label1.Text = "회사명";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(17, 452);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(33, 12);
            this.label2.TabIndex = 6;
            this.label2.Text = "주 가";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(17, 479);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(41, 12);
            this.label3.TabIndex = 7;
            this.label3.Text = "남은주";
            // 
            // btAdd
            // 
            this.btAdd.Location = new System.Drawing.Point(166, 501);
            this.btAdd.Name = "btAdd";
            this.btAdd.Size = new System.Drawing.Size(100, 30);
            this.btAdd.TabIndex = 8;
            this.btAdd.Text = "신 규 추 가";
            this.btAdd.UseVisualStyleBackColor = true;
            // 
            // btRefresh
            // 
            this.btRefresh.Location = new System.Drawing.Point(61, 501);
            this.btRefresh.Name = "btRefresh";
            this.btRefresh.Size = new System.Drawing.Size(100, 30);
            this.btRefresh.TabIndex = 9;
            this.btRefresh.Text = "초 기 화";
            this.btRefresh.UseVisualStyleBackColor = true;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label4.Location = new System.Drawing.Point(78, 385);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(162, 16);
            this.label4.TabIndex = 10;
            this.label4.Text = "신규 주식 회사 추가";
            // 
            // btExit
            // 
            this.btExit.Location = new System.Drawing.Point(665, 3);
            this.btExit.Name = "btExit";
            this.btExit.Size = new System.Drawing.Size(78, 25);
            this.btExit.TabIndex = 13;
            this.btExit.Text = "종 료";
            this.btExit.UseVisualStyleBackColor = true;
            // 
            // gridUser
            // 
            this.gridUser.AllowUserToOrderColumns = true;
            this.gridUser.ColumnHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.gridUser.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.gridUser.Location = new System.Drawing.Point(387, 50);
            this.gridUser.MultiSelect = false;
            this.gridUser.Name = "gridUser";
            this.gridUser.RowHeadersBorderStyle = System.Windows.Forms.DataGridViewHeaderBorderStyle.Single;
            this.gridUser.RowTemplate.Height = 23;
            this.gridUser.Size = new System.Drawing.Size(356, 325);
            this.gridUser.TabIndex = 14;
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label5.Location = new System.Drawing.Point(118, 12);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(139, 16);
            this.label5.TabIndex = 15;
            this.label5.Text = "주식 회사 리스트";
            // 
            // label6
            // 
            this.label6.AutoSize = true;
            this.label6.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label6.Location = new System.Drawing.Point(488, 12);
            this.label6.Name = "label6";
            this.label6.Size = new System.Drawing.Size(139, 16);
            this.label6.TabIndex = 16;
            this.label6.Text = "유저 목록 리스트";
            // 
            // btUpdate
            // 
            this.btUpdate.Location = new System.Drawing.Point(61, 537);
            this.btUpdate.Name = "btUpdate";
            this.btUpdate.Size = new System.Drawing.Size(100, 30);
            this.btUpdate.TabIndex = 19;
            this.btUpdate.Text = "수정 사항 반영";
            this.btUpdate.UseVisualStyleBackColor = true;
            // 
            // btDelete
            // 
            this.btDelete.Location = new System.Drawing.Point(166, 537);
            this.btDelete.Name = "btDelete";
            this.btDelete.Size = new System.Drawing.Size(100, 30);
            this.btDelete.TabIndex = 20;
            this.btDelete.Text = "선택 회사 삭제";
            this.btDelete.UseVisualStyleBackColor = true;
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.btStop);
            this.groupBox1.Controls.Add(this.btPlay);
            this.groupBox1.Location = new System.Drawing.Point(256, 391);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(112, 100);
            this.groupBox1.TabIndex = 21;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "주가 변동";
            // 
            // btStop
            // 
            this.btStop.Location = new System.Drawing.Point(6, 56);
            this.btStop.Name = "btStop";
            this.btStop.Size = new System.Drawing.Size(100, 30);
            this.btStop.TabIndex = 20;
            this.btStop.Text = "정지";
            this.btStop.UseVisualStyleBackColor = true;
            // 
            // btPlay
            // 
            this.btPlay.Location = new System.Drawing.Point(6, 20);
            this.btPlay.Name = "btPlay";
            this.btPlay.Size = new System.Drawing.Size(100, 30);
            this.btPlay.TabIndex = 19;
            this.btPlay.Text = "실행";
            this.btPlay.UseVisualStyleBackColor = true;
            // 
            // label8
            // 
            this.label8.AutoSize = true;
            this.label8.Font = new System.Drawing.Font("굴림", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label8.Location = new System.Drawing.Point(545, 385);
            this.label8.Name = "label8";
            this.label8.Size = new System.Drawing.Size(82, 16);
            this.label8.TabIndex = 23;
            this.label8.Text = "유저 관리";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Location = new System.Drawing.Point(431, 411);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(16, 12);
            this.label7.TabIndex = 24;
            this.label7.Text = "ID";
            this.label7.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label9
            // 
            this.label9.AutoSize = true;
            this.label9.Location = new System.Drawing.Point(385, 438);
            this.label9.Name = "label9";
            this.label9.Size = new System.Drawing.Size(62, 12);
            this.label9.TabIndex = 25;
            this.label9.Text = "Password";
            this.label9.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Location = new System.Drawing.Point(403, 465);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(44, 12);
            this.label10.TabIndex = 26;
            this.label10.Text = "Money";
            this.label10.TextAlign = System.Drawing.ContentAlignment.MiddleRight;
            // 
            // txtId
            // 
            this.txtId.Location = new System.Drawing.Point(453, 408);
            this.txtId.Name = "txtId";
            this.txtId.Size = new System.Drawing.Size(206, 21);
            this.txtId.TabIndex = 27;
            // 
            // txtPassword
            // 
            this.txtPassword.Location = new System.Drawing.Point(453, 435);
            this.txtPassword.Name = "txtPassword";
            this.txtPassword.Size = new System.Drawing.Size(206, 21);
            this.txtPassword.TabIndex = 28;
            // 
            // txtUserMoney
            // 
            this.txtUserMoney.Location = new System.Drawing.Point(451, 462);
            this.txtUserMoney.Name = "txtUserMoney";
            this.txtUserMoney.Size = new System.Drawing.Size(208, 21);
            this.txtUserMoney.TabIndex = 29;
            // 
            // btUserAdd
            // 
            this.btUserAdd.Location = new System.Drawing.Point(665, 406);
            this.btUserAdd.Name = "btUserAdd";
            this.btUserAdd.Size = new System.Drawing.Size(75, 23);
            this.btUserAdd.TabIndex = 30;
            this.btUserAdd.Text = "Add";
            this.btUserAdd.UseVisualStyleBackColor = true;
            // 
            // btUserDelete
            // 
            this.btUserDelete.Location = new System.Drawing.Point(665, 462);
            this.btUserDelete.Name = "btUserDelete";
            this.btUserDelete.Size = new System.Drawing.Size(75, 23);
            this.btUserDelete.TabIndex = 31;
            this.btUserDelete.Text = "Delete";
            this.btUserDelete.UseVisualStyleBackColor = true;
            // 
            // btUserRefresh
            // 
            this.btUserRefresh.Location = new System.Drawing.Point(665, 491);
            this.btUserRefresh.Name = "btUserRefresh";
            this.btUserRefresh.Size = new System.Drawing.Size(75, 23);
            this.btUserRefresh.TabIndex = 32;
            this.btUserRefresh.Text = "Refresh";
            this.btUserRefresh.UseVisualStyleBackColor = true;
            // 
            // btUserSave
            // 
            this.btUserSave.Location = new System.Drawing.Point(665, 433);
            this.btUserSave.Name = "btUserSave";
            this.btUserSave.Size = new System.Drawing.Size(75, 23);
            this.btUserSave.TabIndex = 33;
            this.btUserSave.Text = "Save";
            this.btUserSave.UseVisualStyleBackColor = true;
            // 
            // adminstar
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(755, 580);
            this.Controls.Add(this.btUserSave);
            this.Controls.Add(this.btUserRefresh);
            this.Controls.Add(this.btUserDelete);
            this.Controls.Add(this.btUserAdd);
            this.Controls.Add(this.txtUserMoney);
            this.Controls.Add(this.txtPassword);
            this.Controls.Add(this.txtId);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.label9);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.label8);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.btDelete);
            this.Controls.Add(this.btUpdate);
            this.Controls.Add(this.label6);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.gridUser);
            this.Controls.Add(this.btExit);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.btRefresh);
            this.Controls.Add(this.btAdd);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.newju);
            this.Controls.Add(this.newmoney);
            this.Controls.Add(this.newcompany);
            this.Controls.Add(this.dataGridView1);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "adminstar";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "adminstar";
            this.Load += new System.EventHandler(this.adminstar_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.gridUser)).EndInit();
            this.groupBox1.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.TextBox newcompany;
        private System.Windows.Forms.TextBox newmoney;
        private System.Windows.Forms.TextBox newju;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btAdd;
        private System.Windows.Forms.Button btRefresh;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Button btExit;
        private System.Windows.Forms.DataGridView gridUser;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label6;
        private System.Windows.Forms.Button btUpdate;
        private System.Windows.Forms.Button btDelete;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.Button btStop;
        private System.Windows.Forms.Button btPlay;
        private System.Windows.Forms.Label label8;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label label9;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.TextBox txtId;
        private System.Windows.Forms.TextBox txtPassword;
        private System.Windows.Forms.TextBox txtUserMoney;
        private System.Windows.Forms.Button btUserAdd;
        private System.Windows.Forms.Button btUserDelete;
        private System.Windows.Forms.Button btUserRefresh;
        private System.Windows.Forms.Button btUserSave;
    }
}