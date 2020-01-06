using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Tesseract;

namespace SLf.Osc.View.View.Study.Ocr
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            this.button1.Click += Button1_Click;
        }

        private void Button1_Click(object sender, EventArgs e)
        {
            Bitmap img = new Bitmap(pictureBox1.Image);
            var ocr = new TesseractEngine("./tessdata", "kor", EngineMode.Default); 
            // 한글은 Default 만 지원
            // tessdata 폴더에 언어파일 사용
            //var ocr = new TesseractEngine("./tessdata", "eng", EngineMode.TesseractAndCube);
            var texts = ocr.Process(img);
            MessageBox.Show(texts.GetText());
        }
    }
}
