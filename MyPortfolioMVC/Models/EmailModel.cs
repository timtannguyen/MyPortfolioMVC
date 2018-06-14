using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyPortfolioMVC.Models
{
    public class EmailModel
    {
        [StringLength(30, MinimumLength = 3)]
        [Required, Display(Name ="Name")]
        public string FromName { get; set; }

        [Required, Display(Name ="Email")]
        public string FromEmail { get; set; }

        public string Subject { get; set; }

        //[Required]
        [Display(Name ="Message"), AllowHtml]
        public string Body { get; set; }
    }
}