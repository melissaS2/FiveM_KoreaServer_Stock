namespace FiveMKoreaServer주식
{
    partial class 회원가입
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
            this.label1 = new System.Windows.Forms.Label();
            this.addid = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.addpw = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.addmoney = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(17, 23);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(41, 12);
            this.label1.TabIndex = 0;
            this.label1.Text = "아이디";
            // 
            // addid
            // 
            this.addid.Location = new System.Drawing.Point(100, 20);
            this.addid.Name = "addid";
            this.addid.Size = new System.Drawing.Size(186, 21);
            this.addid.TabIndex = 1;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(38, 115);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 33);
            this.button1.TabIndex = 4;
            this.button1.Text = "가 입";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // addpw
            // 
            this.addpw.Location = new System.Drawing.Point(100, 47);
            this.addpw.Name = "addpw";
            this.addpw.PasswordChar = '●';
            this.addpw.Size = new System.Drawing.Size(186, 21);
            this.addpw.TabIndex = 2;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(17, 50);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(53, 12);
            this.label2.TabIndex = 3;
            this.label2.Text = "비밀번호";
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(119, 115);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 33);
            this.button2.TabIndex = 5;
            this.button2.Text = "초 기 화";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(200, 115);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(75, 33);
            this.button3.TabIndex = 6;
            this.button3.Text = "닫 기";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // addmoney
            // 
            this.addmoney.BackColor = System.Drawing.Color.White;
            this.addmoney.Location = new System.Drawing.Point(100, 74);
            this.addmoney.Name = "addmoney";
            this.addmoney.ReadOnly = true;
            this.addmoney.Size = new System.Drawing.Size(186, 21);
            this.addmoney.TabIndex = 3;
            this.addmoney.Text = "10000000";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(17, 77);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(77, 12);
            this.label3.TabIndex = 7;
            this.label3.Text = "테스트지원금";
            // 
            // 회원가입
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.White;
            this.ClientSize = new System.Drawing.Size(329, 185);
            this.Controls.Add(this.addmoney);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.addpw);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.addid);
            this.Controls.Add(this.label1);
            this.Name = "회원가입";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "회원가입";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox addid;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox addpw;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Windows.Forms.TextBox addmoney;
        private System.Windows.Forms.Label label3;
    }
}