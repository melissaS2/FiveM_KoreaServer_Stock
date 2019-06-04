using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;

namespace SDs.FiveM.Model.Util
{
    public class PathUtil
    {


        /// <summary>
        /// Returns full path string of given file Name
        /// </summary>
        /// <param name="fileName">File Name</param>
        /// <returns>File name with full path</returns>
        public static string GetFileFullPath(string fileName)
        {
            string fileWithFullPath = (string)fileName.Clone();
            if (!Path.IsPathRooted(fileName))
            {
                fileWithFullPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, fileName);
            }
            return fileWithFullPath;
        }

        // <summary>
        /// Returns a Boolean value indicating whether the specified path is absolute or not
        /// </summary>
        /// <param name="fileName"></param>
        /// <returns>if fileOrPath is an absolute path return trure; otherwise, false</returns>
        public static bool isAbsolutePath(string fileOrPath)
        {
            return Path.IsPathRooted(fileOrPath);
        }

        /// <summary>
        /// Returns base path string of current application execution environment
        /// </summary>
        /// <returns>Currnet Domain's base directory</returns>
        public static string GetBasePath()
        {
            return AppDomain.CurrentDomain.BaseDirectory;
        }

        /// <summary>
        /// Determines whether the given path refers to an existing directory on disk.
        /// </summary>
        /// <returns>The path to test.</returns>
        public static bool Exists(string path)
        {
            return Directory.Exists(path);
        }

        /// <summary>
        /// Create directory
        /// </summary>
        /// <param name="path">path</param>
        /// <returns>diretory information</returns>
        public static DirectoryInfo CreateDirectory(string path)
        {
            return Directory.CreateDirectory(path);
        }

        /// <summary>
        /// Returns combined path string
        /// </summary>
        /// <param name="args">path string elements string array</param>
        /// <returns></returns>
        public static string Combine(params string[] args)
        {
            string rtnPath = string.Empty;

            foreach (string pathElement in args)
            {
                rtnPath = Path.Combine(rtnPath, pathElement);
            }
            return rtnPath;

        }
    }
}
