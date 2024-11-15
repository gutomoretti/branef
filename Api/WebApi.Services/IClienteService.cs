using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApi.Models.Models;

namespace WebApi.Services
{
    public interface IClienteService
    {
        Task<IEnumerable<Cliente>> ListarTodosClientesAsync();
        Task<Cliente> ClientePorIdAsync(int id);
        Task NovoClienteAsync(Cliente cliente);
        Task AtualizarClienteAsync(Cliente cliente);
        Task ApagarClienteAsync(int id);
    }
}
