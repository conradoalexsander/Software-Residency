using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProdutosBackend.Models;

namespace ProdutosBackend.Persistence
{
    public class ListaProdutos
    {

       //Declarando variável pública para realizar a "persistência de dados"
       public static List<Produto> listaProdutos = new List<Produto>()
        {
           new Produto("Iphone", 5),
           new Produto("Celular", 4),
           new Produto("MacBook", 1)
        };

        
    }
}
