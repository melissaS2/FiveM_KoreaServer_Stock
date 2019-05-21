namespace SDs.FiveM.View.View
{
    partial class SignUpView
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(SignUpView));
            this.txtMoney = new System.Windows.Forms.TextBox();
            this.label3 = new System.Windows.Forms.Label();
            this.btnExit = new System.Windows.Forms.Button();
            this.btnReset = new System.Windows.Forms.Button();
            this.txtPw = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.btnComplete = new System.Windows.Forms.Button();
            this.txtId = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // txtMoney
            // 
            this.txtMoney.BackColor = System.Drawing.Color.White;
            this.txtMoney.Location = new System.Drawing.Point(106, 80);
            this.txtMoney.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtMoney.Name = "txtMoney";
            this.txtMoney.ReadOnly = true;
            this.txtMoney.Size = new System.Drawing.Size(212, 25);
            this.txtMoney.TabIndex = 11;
            this.txtMoney.Text = "10000000";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Location = new System.Drawing.Point(11, 84);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(97, 15);
            this.label3.TabIndex = 16;
            this.label3.Text = "테스트지원금";
            // 
            // btnExit
            // 
            this.btnExit.Location = new System.Drawing.Point(221, 132);
            this.btnExit.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(86, 41);
            this.btnExit.TabIndex = 15;
            this.btnExit.Text = "닫 기";
            this.btnExit.UseVisualStyleBackColor = true;
            // 
            // btnReset
            // 
            this.btnReset.Location = new System.Drawing.Point(128, 132);
            this.btnReset.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(86, 41);
            this.btnReset.TabIndex = 14;
            this.btnReset.Text = "초 기 화";
            this.btnReset.UseVisualStyleBackColor = true;
            // 
            // txtPw
            // 
            this.txtPw.Location = new System.Drawing.Point(106, 47);
            this.txtPw.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtPw.Name = "txtPw";
            this.txtPw.PasswordChar = '●';
            this.txtPw.Size = new System.Drawing.Size(212, 25);
            this.txtPw.TabIndex = 10;
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Location = new System.Drawing.Point(11, 50);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(67, 15);
            this.label2.TabIndex = 12;
            this.label2.Text = "비밀번호";
            // 
            // btnComplete
            // 
            this.btnComplete.Location = new System.Drawing.Point(35, 132);
            this.btnComplete.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnComplete.Name = "btnComplete";
            this.btnComplete.Size = new System.Drawing.Size(86, 41);
            this.btnComplete.TabIndex = 13;
            this.btnComplete.Text = "가 입";
            this.btnComplete.UseVisualStyleBackColor = true;
            // 
            // txtId
            // 
            this.txtId.Location = new System.Drawing.Point(106, 13);
            this.txtId.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.txtId.Name = "txtId";
            this.txtId.Size = new System.Drawing.Size(212, 25);
            this.txtId.TabIndex = 9;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(11, 17);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(52, 15);
            this.label1.TabIndex = 8;
            this.label1.Text = "아이디";
            // 
            // SignUpView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(348, 189);
            this.Controls.Add(this.txtMoney);
            this.Controls.Add(this.label3);
            this.Controls.Add(this.btnExit);
            this.Controls.Add(this.btnReset);
            this.Controls.Add(this.txtPw);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.btnComplete);
            this.Controls.Add(this.txtId);
            this.Controls.Add(this.label1);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.Name = "SignUpView";
            this.Text = "회원가입";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox txtMoney;
        private System.Windows.Forms.Label label3;
        private System.Windows.Forms.Button btnExit;
        private System.Windows.Forms.Button btnReset;
        private System.Windows.Forms.TextBox txtPw;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnComplete;
        private System.Windows.Forms.TextBox txtId;
        private System.Windows.Forms.Label label1;
    }
}