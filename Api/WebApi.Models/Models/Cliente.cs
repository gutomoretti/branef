using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models.Enum;

namespace WebApi.Models.Models
{
    public class Cliente
    {
        public int Id { get; set; }
        public string? NomeEmpresa { get; set; }
        public EPorteEmpresa Porte { get; set; }
    }
}
