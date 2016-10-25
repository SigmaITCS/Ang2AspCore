// ANSK8731
// 18:48

using Microsoft.AspNetCore.Mvc;

namespace Ang2AspCore.Web.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}