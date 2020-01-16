using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProdutosBackend.Models;
using Newtonsoft.Json;
using ProdutosBackend.Persistence;

namespace ProdutosBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutosController : ControllerBase
    {
        // GET: api/Produtos
        [HttpGet]
        public IEnumerable<Produto> Get()
        {
            //Rota get retorna a listaProdutos da classe ListaProdutos (Persistence > ListaProduto.cs)
            return ListaProdutos.listaProdutos;        
        } 

        // POST: api/Produtos
        [HttpPost]
        public void Post([FromBody] Produto value)
        {
            //FUNFOU LEGAL!!!
            //Adicionando o JSON da requisição a listaProdutos
            ListaProdutos.listaProdutos.Add(value);
        }

        // DELETE: api/Produtos/:id
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            try
            {
                ListaProdutos.listaProdutos.RemoveAt(id);

            } catch(Exception e)
            {
                Console.WriteLine("Erro: " + e);
            }
           
             

            
            
        }


    }
}
