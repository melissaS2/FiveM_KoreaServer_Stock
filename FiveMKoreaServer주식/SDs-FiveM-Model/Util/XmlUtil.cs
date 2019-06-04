using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Xml.Serialization;

namespace SDs.FiveM.Model.Util
{
    public class XmlUtil
    {
        public XmlUtil()
        {

        }

        /// <summary>
        /// Serializes the specified Object and writes the XML document to a specified file
        /// </summary>
        /// <typeparam name="T">Type of object to serialize</typeparam>
        /// <param name="filePath">XML file path</param>
        /// <param name="objectToWrite"> Object to write xml file</param>
        public static void Serialize<T>(string filePath, object objectToWrite)
        {
            XmlSerializer serializer = null;
            FileStream fs = null;

            try
            {
                serializer = new XmlSerializer(typeof(T));
                using (fs = new FileStream(filePath, FileMode.Create))
                {

                    serializer.Serialize(fs, objectToWrite);
                }
            }
            catch (Exception ex)
            {
                //MSG:While writing {0} xml file, a serialization operation failed. Contact your system administrator.
                //ExceptionHandler.Wrap(ex, typeof(TsbSysXmlException), OBJECT_ID, "MSG_FTCO_00037", DefaultMessage.NON_REG_WRD + filePath);
                MessageBox.Show(ex.ToString());
            }
            finally
            {
                if (fs != null)
                {
                    fs.Close();
                    fs = null;
                }
            }
            return;
        }

        /// <summary>
        /// Returns an object which is deserialized from a specified xml file
        /// </summary>
        /// <typeparam name="T">Type of object to deserialize</typeparam>
        /// <param name="filePath">XML file path</param>
        /// <returns>An object which is deserialized from a specified xml file</returns>
        public static T Deserialize<T>(string filePath)
        {
            T rtnObject = default(T);
            XmlSerializer serializer = null;
            FileStream fs = null;

            try
            {
                serializer = new XmlSerializer(typeof(T));
                serializer.UnknownAttribute += new XmlAttributeEventHandler(serializer_UnknownAttribute);
                serializer.UnknownElement += new XmlElementEventHandler(serializer_UnknownElement);
                serializer.UnknownNode += new XmlNodeEventHandler(serializer_UnknownNode);
                serializer.UnreferencedObject += new UnreferencedObjectEventHandler(serializer_UnreferencedObject);

                using (fs = new FileStream(filePath, FileMode.Open, FileAccess.Read))
                {
                    rtnObject = (T)serializer.Deserialize(fs);
                }

            }
            catch (Exception ex)
            {
                //GeneralLogger.Error(ex);
                //ExceptionHandler.Wrap(ex, typeof(TsbSysXmlException), OBJECT_ID, "MSG_FTCO_00007", DefaultMessage.NON_REG_WRD + Convert.ToString(typeof(T).Name));
                MessageBox.Show(ex.ToString());
            }
            finally
            {
                if (fs != null)
                {
                    fs.Close();
                    fs = null;
                }
            }
            return rtnObject;
        }

        static void serializer_UnreferencedObject(object sender, UnreferencedObjectEventArgs e)
        {
            throw new NotImplementedException();
        }

        static void serializer_UnknownNode(object sender, XmlNodeEventArgs e)
        {
            throw new NotImplementedException();
        }

        static void serializer_UnknownElement(object sender, XmlElementEventArgs e)
        {
            throw new NotImplementedException();
        }

        static void serializer_UnknownAttribute(object sender, XmlAttributeEventArgs e)
        {
            throw new NotImplementedException();
        }
    }
}
