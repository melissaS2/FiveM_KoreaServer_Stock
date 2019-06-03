using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Threading;
using SDs.FiveM.Model.Item.PublicLoginView;
using SDs.FiveM.Model.Param.PublicLoginView;
using SDs.FiveM.Controller.Controller.Lotto.LottoMakerView;
using SDs.FiveM.Model.Util;
using SDs.FiveM.Model.Item.Lotto.LottoMakerView;

namespace SDs.FiveM.View.View.Lotto
{
    public partial class LottoMakerView : Form
    {
        #region PROPERTY AREA ******************************
        private LoginParam param { get; set; }
        private LottoMakerViewController controller = null;
        private List<TextBox> txtBoxList = null;
        private List<Button> buttonList = null;
        private PublicLoginViewInterface view = null;
        #endregion

        #region CONTRUCT AREA ******************************
        public LottoMakerView(PublicLoginViewInterface view)
        {
            InitializeComponent();
            this.InitList();
            this.controller = new LottoMakerViewController();
            this.param = new LoginParam();
            this.view = view;
            this.AddEventHandler();
        }

        #endregion

        #region METHOD AREA *********************************
        private void AddEventHandler()
        {
            foreach (Button btn in buttonList)
            {
                btn.Click += CreateButtonClick;
            }

            this.btnExit.Click += BtnExit_Click;
            this.btnRefresh.Click += BtnRefresh_Click;


            this.FormClosed += LottoMakerView_FormClosed;
            this.Load += LottoMakerView_Load;
        }

        private void GridColumnChange(DataGridView grid)
        {
            grid.Columns[0].Visible = false;
            grid.Columns[1].Visible = false;
            grid.Columns[2].Visible = false;

            grid.Columns[3].HeaderText = "날짜";
            grid.Columns[4].HeaderText = "(1)";
            grid.Columns[5].HeaderText = "(2)";
            grid.Columns[6].HeaderText = "(3)";
            grid.Columns[7].HeaderText = "(4)";
            grid.Columns[8].HeaderText = "(5)";
            grid.Columns[9].HeaderText = "보너스";

            grid.Columns[3].Width = 80;
            grid.Columns[4].Width = 40;
            grid.Columns[5].Width = 40;
            grid.Columns[6].Width = 40;
            grid.Columns[7].Width = 40;
            grid.Columns[8].Width = 40;
            grid.Columns[9].Width = 65;
        }

        private void GridPropertyChange(DataGridView grid)
        {
            //그리드 뷰 전체 선택 할 수 있도록
            grid.SelectionMode = DataGridViewSelectionMode.FullRowSelect;
            //그리드 뷰 젤앞열 지우기
            grid.RowHeadersVisible = false;
            //그리드 뷰 컬럼폭 채우기
            //grid.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.AllCells;
            //데이터 그리드 뷰 가득 채우기
            //grid.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
            //마지막 행 삭제
            //grid.AllowUserToAddRows = false;
        }

        private void DoRefresh()
        {
            LottoItem param = new LottoItem();
            param.ID = view.LOGIN_ID;
            param.USER_ID = view.user_id;

            IList<LottoItem> list = this.controller.DoRetriveLottoHistory(param);
            this.dataGridView1.DataSource = list;

            this.GridColumnChange(dataGridView1);
            this.GridPropertyChange(dataGridView1);
        }

        private void DoInit()
        {
            param.id = view.LOGIN_ID;
            param.user_id = view.user_id;

            this.txtId.Text = view.LOGIN_ID;
            this.txtUniqueNo.Text = view.user_id.ToString();
            this.txtMoney.Text = view.lotto_money.ToString();
        }

        private void InitList()
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

        private LottoItem CreateLottoItem()
        {
            LottoItem item = new LottoItem();
            item.ID = view.LOGIN_ID;
            item.USER_ID = view.user_id;
            return item;
        }

        private void CreateLottoNumber(List<TextBox> list)
        {
            for(int i = 0; i < list.Count; i++)
            {
                LottoItem item = this.CreateLottoItem();

                var num = new List<int>(Enumerable.Range(1, 45));

                //for (int i = 1; i <= 45; i++)
                //num.Add(i); // 1~45로 초기화
                List<int> newNum = this.ShuffleList(num);
                List<int> selected = newNum.GetRange(1, 7);

                string text = string.Empty;
                for (int j = 0; j < selected.Count; j++)
                {
                    switch (j)
                    {
                        case 0:
                            item.LOTTO_ONE = selected[j];
                            text += selected[j];
                            text += " | ";
                            break;
                        case 1:
                            item.LOTTO_TWO = selected[j];
                            text += selected[j];
                            text += " | ";
                            break;
                        case 2:
                            item.LOTTO_THREE = selected[j];
                            text += selected[j];
                            text += " | ";
                            break;
                        case 3:
                            item.LOTTO_FOUR = selected[j];
                            text += selected[j];
                            text += " | ";
                            break;
                        case 4:
                            item.LOTTO_FIVE = selected[j];
                            text += selected[j];
                            text += " | ";
                            break;
                        case 5:
                            item.LOTTO_BONUS= selected[j];
                            text += " 보너스 번호 : ";
                            text += selected[j];
                            break;
                    }
                    //if (j == selected.Count - 1)
                    //{
                    //    text += " 보너스 번호 : ";
                    //    text += selected[j];
                    //    break;
                    //}
                    //text += selected[j];
                    //text += " | ";
                }

                list[i].Text = text;
                this.controller.DoInsertLottoHistory(item);
                Thread.Sleep(50);
            }
        }
        #endregion

        #region EVENT AREA **********************************
        private void BtnRefresh_Click(object sender, EventArgs e)
        {
            this.DoRefresh();
        }

        private void LottoMakerView_Load(object sender, EventArgs e)
        {
            this.DoInit();

            System.Threading.TimerCallback callBack = DoLoad;
            System.Threading.Timer recordTimer = 
                new System.Threading.Timer(callBack, null, 1000, 2000);

            //System.Windows.Forms.Timer timer = new System.Windows.Forms.Timer();
            //timer.Interval = 2000; // 2 초
            //timer.Tick += new EventHandler(NewEventArgsTimer_Tick);
            //timer.Start();
        }

        private void DoLoad(object param)
        {
            LoginItem item = this.controller.DoSelectUserInfo(this.param);

            if (this.InvokeRequired)
            {
                this.BeginInvoke(new MethodInvoker(delegate
                {
                    this.txtMoney.Text = item.LOTTO_MONEY.ToString();
                }));
            }
            else
            {
                this.txtMoney.Text = item.LOTTO_MONEY.ToString();
            }
            //Console.WriteLine("타이머 쓰레드" + DateTime.Now);
        }

        private void BtnExit_Click(object sender, EventArgs e)
        {
            Environment.Exit(0);
        }

        private void LottoMakerView_FormClosed(object sender, FormClosedEventArgs e)
        {
            Environment.Exit(0);
        }

        private void CreateButtonClick(object sender, EventArgs e)
        {
            try
            {
                Button textBox = (Button)sender;
                int cnt = int.Parse(textBox.Tag.ToString());

                LoginItem item = this.controller.DoSelectUserInfo(param);
                long needMoney = cnt * 1000; // 생성하고자 하는 로또 갯수 * 1000원
                if (needMoney > item.LOTTO_MONEY)
                {
                    string msgBoxText = "보유중인 후원금액이 부족합니다. \r\n 필요금액 : "
                        + needMoney + "\r\n 현재 보유중인 후원금액 : "
                        + item.LOTTO_MONEY;
                    string msgBoxCaption = "경고";
                    FiveMUtilClass.GetMessageBox(msgBoxText, msgBoxCaption, MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    return;
                }

                long newMoney = item.LOTTO_MONEY - needMoney;

                param.money = newMoney;
                this.controller.DoUpdateUserMoney(param);
                

                for (int i = 0; i < txtBoxList.Count; i++)
                {
                    txtBoxList[i].Text = "";
                }

                List<TextBox> newTextBoxList = txtBoxList.GetRange(0, cnt);
                this.CreateLottoNumber(newTextBoxList);
                this.DoRefresh();
            }
            catch(Exception ex)
            {
                MessageBox.Show(ex.ToString());
            }
        }
        #endregion
    }
}
