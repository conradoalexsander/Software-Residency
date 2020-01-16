using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Pessoa.Models;

namespace Pessoa.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoasController : ControllerBase
    {
        // GET: api/Pessoas
        [HttpGet]
        public IEnumerable<Pessoas> Get()
        {
            
            List<Pessoas> listaPessoas = new List<Pessoas>()
                 {
            new Pessoas ("Amanda", 19),
            new Pessoas("Marcos", 20),
            new Pessoas("Antonio", 21),
            new Pessoas("Monique", 20),
            new Pessoas("Carlos", 20),
            new Pessoas ("Manoel", 21),
            new Pessoas("Jorge", 19),
            new Pessoas ("Henrique", 21),
            new Pessoas ("Carmem", 19),
            new Pessoas("Pamela", 19)
        }; 
     
            return listaPessoas;
        }

        // GET: api/Pessoas/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Pessoas
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Pessoas/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
