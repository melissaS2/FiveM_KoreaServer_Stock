using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;

namespace AttendanceMgmt.Controllers
{
    public class HelloWorldController : Controller
    {
        // GET: /HelloWorld/ 
        public ActionResult Index()
        {
            return View();
        }

        // 
        // GET: /HelloWorld/Welcome/ 
        public ActionResult Welcome(string name, int numTimes)
        {
            ViewBag.Message = "Hello " + name;
            ViewBag.NumTimes = numTimes;

            return View();

            //return HttpUtility.HtmlEncode("Hello " + name + ", NumTimes is: " + numTimes);
        }
    }
}