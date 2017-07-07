using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyPortfolioMVC.Startup))]
namespace MyPortfolioMVC
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
