using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace ProdutosBackend.Models
{
    public class Produto
    {
       
        public string nome { get; set; }

        public int quantidade { get; set; }

        public Produto(string nome, int quantidade)
        {
            this.nome = nome;
            this.quantidade = quantidade;
        }


    }
}
