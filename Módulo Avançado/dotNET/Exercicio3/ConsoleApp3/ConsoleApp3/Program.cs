using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Program
    {
        static void Main(string[] args)
        {
            int maior = 0;
            int menor =0;
            int valor = 0;
            float media = 0;
            int soma = 0;

            //executando a primeira chamada de valores
            Console.WriteLine("Informe o 1º valor");
            valor = Convert.ToInt32(Console.ReadLine());
            media += valor;
            soma += valor;
            menor = valor;
            maior = valor;

            //Laço de repetição para solicitar o valor 5 vezes
            for (int i = 0; i < 4; i++)
            {
                Console.WriteLine("Informe o " + (i + 2) + "º valor");
                valor = Convert.ToInt32(Console.ReadLine());
                media += valor;
                soma += valor;

                //descobrindo o maior valor dentre os inseridos
                if (maior < valor)
                {
                    maior = valor;
                }

                //descobrindo o menor valor dentre os inseridos
                if (menor > valor)
                {
                    menor = valor;
                }

            }

            //realizando média para cinco valores
            media /= 5;

            //Exibindo resultados no console
            Console.WriteLine("A média dos valores inseridos é: " + media);
            Console.WriteLine("A soma dos valores inseridos é: " + soma);
            Console.WriteLine("O menor valor é: " + menor);
            Console.WriteLine("O maior valor é: " + maior);
            Console.ReadLine();
        }
    }
}
