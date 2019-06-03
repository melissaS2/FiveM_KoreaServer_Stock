using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Threading;

namespace SDs.FiveM.View.View.Lotto
{
    public partial class LottoMakerView : Form
    {
        #region PROPERTY AREA ******************************
        List<TextBox> txtBoxList = null;
        List<Button> buttonList = null;
        #endregion

        #region CONTRUCT AREA ******************************
        public LottoMakerView()
        {
            InitializeComponent();
            this.Init();
            this.AddEventHandler();
        }
        private void AddEventHandler()
        {
            foreach(Button btn in buttonList)
            {
                btn.Click += CreateButtonClick;
            }

            this.btnExit.Click += BtnExit_Click;
            this.FormClosed += LottoMakerView_FormClosed;
        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void LottoMakerView_FormClosed(object sender, FormClosedEventArgs e)
        {
            Environment.Exit(0);
        }

        private void Init()
        {
            txtBoxList = new List<TextBox>();
            txtBoxList.Add(this.txtOne);
            txtBoxList.Add(this.txtTwo);
            txtBoxList.Add(this.txtThree);
            txtBoxList.Add(this.txtFour);
            txtBoxList.Add(this.txtFive);

            buttonList = new List<Button>();
            buttonList.Add(this.btnOne);
            buttonList.Add(this.btnTwo);
            buttonList.Add(this.btnThree);
            buttonList.Add(this.btnFour);
            buttonList.Add(this.btnFive);
        }
        #endregion

        #region METHOD AREA *********************************
        private List<E> ShuffleList<E>(List<E> inputList)
        {
            List<E> randomList = new List<E>();

            Random r = new Random();
            int randomIndex = 0;
            while (inputList.Count > 0)
            {
                randomIndex = r.Next(0, inputList.Count); //Choose a random object in the list
                randomList.Add(inputList[randomIndex]); //add it to the new, random list
                inputList.RemoveAt(randomIndex); //remove to avoid duplicates
            }

            return randomList; //return the new random list
        }

        private void CreateLottoNumber(List<TextBox> list)
        {
            for(int i = 0; i < list.Count; i++)
            {
                var num = new List<int>(Enumerable.Range(1, 45));

                //for (int i = 1; i <= 45; i++)
                //num.Add(i); // 1~45로 초기화
                List<int> newNum = this.ShuffleList(num);
                List<int> selected = newNum.GetRange(1, 7);

                string text = string.Empty;
                for (int j = 0; j < selected.Count; j++)
                {
                    if (j == selected.Count - 1)
                    {
                        text += " 보너스 번호 : ";
                        text += selected[j];
                        break;
                    }
                    text += selected[j];
                    text += " | ";
                }

                list[i].Text = text;
                Thread.Sleep(50);
            }
        }
        #endregion

        #region EVENT AREA **********************************
        private void CreateButtonClick(object sender, EventArgs e)
        {
            for (int i = 0; i < txtBoxList.Count; i++) {
                txtBoxList[i].Text = "";
            }

            Button textBox = (Button)sender;
            List<TextBox> newTextBoxList = txtBoxList.GetRange(0, int.Parse(textBox.Tag.ToString()));

            this.CreateLottoNumber(newTextBoxList);
        }
        #endregion
    }
}
