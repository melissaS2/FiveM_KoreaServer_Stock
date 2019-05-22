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
            this.btnExit = new System.Windows.Forms.Button();
            this.btnReset = new System.Windows.Forms.Button();
            this.txtPw = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.btnComplete = new System.Windows.Forms.Button();
            this.txtId = new System.Windows.Forms.TextBox();
            this.label1 = new System.Windows.Forms.Label();
            this.txtUniqueNo = new System.Windows.Forms.TextBox();
            this.txtPhoneNo = new System.Windows.Forms.TextBox();
            this.label4 = new System.Windows.Forms.Label();
            this.label5 = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // btnExit
            // 
            this.btnExit.Location = new System.Drawing.Point(218, 142);
            this.btnExit.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnExit.Name = "btnExit";
            this.btnExit.Size = new System.Drawing.Size(100, 30);
            this.btnExit.TabIndex = 15;
            this.btnExit.Text = "종 료";
            this.btnExit.UseVisualStyleBackColor = true;
            // 
            // btnReset
            // 
            this.btnReset.Location = new System.Drawing.Point(112, 142);
            this.btnReset.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnReset.Name = "btnReset";
            this.btnReset.Size = new System.Drawing.Size(100, 30);
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
            this.label2.Location = new System.Drawing.Point(33, 50);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(67, 15);
            this.label2.TabIndex = 12;
            this.label2.Text = "비밀번호";
            // 
            // btnComplete
            // 
            this.btnComplete.Location = new System.Drawing.Point(6, 142);
            this.btnComplete.Margin = new System.Windows.Forms.Padding(3, 4, 3, 4);
            this.btnComplete.Name = "btnComplete";
            this.btnComplete.Size = new System.Drawing.Size(100, 30);
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
            this.label1.Location = new System.Drawing.Point(48, 16);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(52, 15);
            this.label1.TabIndex = 8;
            this.label1.Text = "아이디";
            // 
            // txtUniqueNo
            // 
            this.txtUniqueNo.Location = new System.Drawing.Point(106, 79);
            this.txtUniqueNo.Name = "txtUniqueNo";
            this.txtUniqueNo.Size = new System.Drawing.Size(212, 25);
            this.txtUniqueNo.TabIndex = 17;
            // 
            // txtPhoneNo
            // 
            this.txtPhoneNo.Location = new System.Drawing.Point(106, 110);
            this.txtPhoneNo.Name = "txtPhoneNo";
            this.txtPhoneNo.Size = new System.Drawing.Size(212, 25);
            this.txtPhoneNo.TabIndex = 18;
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Location = new System.Drawing.Point(28, 82);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(72, 15);
            this.label4.TabIndex = 19;
            this.label4.Text = "고유 번호";
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Location = new System.Drawing.Point(13, 113);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(87, 15);
            this.label5.TabIndex = 20;
            this.label5.Text = "핸드폰 번호";
            // 
            // SignUpView
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 15F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(328, 183);
            this.Controls.Add(this.label5);
            this.Controls.Add(this.label4);
            this.Controls.Add(this.txtPhoneNo);
            this.Controls.Add(this.txtUniqueNo);
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
        private System.Windows.Forms.Button btnExit;
        private System.Windows.Forms.Button btnReset;
        private System.Windows.Forms.TextBox txtPw;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnComplete;
        private System.Windows.Forms.TextBox txtId;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox txtUniqueNo;
        private System.Windows.Forms.TextBox txtPhoneNo;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label5;
    }
}