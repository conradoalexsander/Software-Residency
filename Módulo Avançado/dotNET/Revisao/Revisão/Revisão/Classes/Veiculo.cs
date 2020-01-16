using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Revisão.Classes
{
    class Veiculo
    {
        string nome;
        string cor;
        int rodas;

        public Veiculo()
        {

        }

        public Veiculo(string nome, string cor, int rodas)
        {
            this.nome = nome;
            this.cor = cor;
            this.rodas = rodas;
        }

        public void imprimeVeiculo()
        {
            Console.WriteLine("Nome: " + this.nome + "\n Cor: " + this.cor + "\n Número de rodas: " + this.rodas);
        }
    }
}
