namespace FiveMKoreaServer주식
{
    partial class 관리자_로그인창
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
            this.label3 = new System.Windows.Forms.Label();
            this.button2 = new System.Windows.Forms.Button();
            this.button1 = new System.Windows.Forms.Button();
            this.adminpw = new System.Windows.Forms.TextBox();
            this.adminid = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("굴림", 14.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(129)));
            this.label3.Location = new System.Drawing.Point(24, 23);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(376, 19);
            this.label3.TabIndex = 13;
            this.label3.Text = "GTA5 FiveM Korea Server 주식 프로그램";
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(337, 94);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(85, 28);
            this.button2.TabIndex = 12;
            this.button2.Text = "종 료";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(337, 62);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(85, 28);
            this.button1.TabIndex = 11;
            this.button1.Text = "로 그 인";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // adminpw
            // 
            this.adminpw.Location = new System.Drawing.Point(99, 97);
            this.adminpw.Name = "adminpw";
            this.adminpw.PasswordChar = '●';
            this.adminpw.Size = new System.Drawing.Size(218, 21);
            this.adminpw.TabIndex = 10;
            // 
            // adminid
            // 
            this.adminid.Location = new System.Drawing.Point(99, 67);
            this.adminid.Name = "adminid";
            this.adminid.Size = new System.Drawing.Size(218, 21);
            this.adminid.TabIndex = 9;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(26, 100);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(53, 12);
            this.label2.TabIndex = 8;
            this.label2.Text = "비밀번호";
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(26, 70);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(41, 12);
            this.label1.TabIndex = 7;
            this.label1.Text = "아이디";
            // 
            // 관리자_로그인창
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(447, 148);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.adminpw);
            this.Controls.Add(this.adminid);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.label1);
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "관리자_로그인창";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "관리자_로그인창";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox adminpw;
        private System.Windows.Forms.TextBox adminid;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Label label1;
    }
}