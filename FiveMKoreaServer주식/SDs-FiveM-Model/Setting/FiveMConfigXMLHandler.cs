using SDs.FiveM.Model.Util;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace SDs.FiveM.Model.Setting
{
    /// <summary>
    /// Workspace Schema class
    /// </summary>
    [XmlRootAttribute("FiveMConfig", Namespace = "http://www.tsb.co.kr/xsd/WorkspaceSchema.xsd", IsNullable = false)]
    [Serializable]
    public class FiveMConfigSchema
    {
        [XmlElement("FiveMStockConfig")]
        public FiveMConfigItem FiveMConfig { get; set; }

        public FiveMConfigSchema()
        {
        }
    }

    [Serializable]
    public class FiveMConfigItem
    {
        #region CTMS Calculation AREA ***************************************
        [XmlElement("30_1")]
        public int ThirtyPercent_1 { get; set; }
        [XmlElement("30_2")]
        public int ThirtyPercent_2 { get; set; }
        [XmlElement("40_1")]
        public int FortyPercent_1 { get; set; }
        [XmlElement("40_2")]
        public int FortyPercent_2 { get; set; }
        [XmlElement("1_1")]
        public int OnePercent_1{ get; set; }
        [XmlElement("1_2")]
        public int OnePercent_2 { get; set; }
        [XmlElement("1_3")]
        public int OnePercent_3 { get; set; }
        [XmlElement("20_1")]
        public int TwentyPercent_1 { get; set; }
        [XmlElement("20_2")]
        public int TwentyPercent_2 { get; set; }
        [XmlElement("15_1")]
        public int FifteenPercent_1 { get; set; }
        [XmlElement("15_2")]
        public int FifteenPercent_2 { get; set; }
        [XmlElement("4_1")]
        public int FourPercent_1 { get; set; }
        [XmlElement("TimerSecond")]
        public int TimerSecond { get; set; }
        #endregion

        public FiveMConfigItem()
        {
            this.ThirtyPercent_1 = 1;
            this.ThirtyPercent_2 = -1;
            this.FortyPercent_1 = -2;
            this.FortyPercent_2 = 2;
            this.OnePercent_1 = 20;
            this.OnePercent_2 = -20;
            this.OnePercent_3 = -5000;
            this.TwentyPercent_1 = -5;
            this.TwentyPercent_2 = +5;
            this.FifteenPercent_1 = +4;
            this.FifteenPercent_2 = +4;
            this.FourPercent_1 = -300;
            this.TimerSecond = 5;
        }
    }

    public class FiveMConfigXMLHandler
    {
        public FiveMConfigXMLHandler()
        {
            
        }

        public void Load()
        {
            bool isSuccess = false;
            string filePath = string.Empty;

            try
            {
                FiveMConfigSchema gridSchema = default(FiveMConfigSchema);
                filePath = GetFilePath();

                if (File.Exists(filePath))
                {
                    gridSchema = XmlUtil.Deserialize<FiveMConfigSchema>(filePath);

                    FiveMConfig.ApplyConfig(gridSchema.FiveMConfig);
                }
                else
                {
                    FiveMConfig.ApplyConfig(new FiveMConfigItem());
                }

                isSuccess = true;
            }
            //catch (TsbBaseException tsbEx)
            //{
            //    ExceptionHandler.Propagate(tsbEx, this.ObjectID);
            //}
            catch (Exception ex)
            {
                //MSG: While loading {0} xml file, a deserialize operation failed. Contact your system administrator.
                //ExceptionHandler.Wrap(ex, typeof(TsbSysConfigException), this.ObjectID, "MSG_FTCO_00212", DefaultMessage.NON_REG_WRD + filePath);
                MessageBox.Show(ex.ToString());
            }
            finally
            {
                if (isSuccess == false)
                {
                    File.Delete(filePath);
                    FiveMConfig.ApplyConfig(new FiveMConfigItem());
                }
            }
        }

        public void Save()
        {
            String filePath = GetFilePath();

            FiveMConfigItem item = FiveMConfig.GetConfig();

            try
            {
                FiveMConfigSchema schema = new FiveMConfigSchema();
                schema.FiveMConfig = item;

                XmlUtil.Serialize<FiveMConfigSchema>(filePath, schema);
            }
            //catch (TsbBaseException tsbEx)
            //{
            //    ExceptionHandler.Propagate(tsbEx, this.ObjectID);
            //}
            catch (Exception ex)
            {
                //MSG: Save File operation failed.
                //ExceptionHandler.Wrap(ex, typeof(TsbSysConfigException), this.ObjectID, "MSG_FTCO_00035");
            }
        }

        private string GetFilePath()
        {
            return PathUtil.Combine(PathUtil.GetBasePath(), "FiveMConfig.xml");
        }
    }


}
