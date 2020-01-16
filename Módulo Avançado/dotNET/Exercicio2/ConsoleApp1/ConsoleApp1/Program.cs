using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Globalization;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!"); //Console é uma class
            int A = 4;
            int B = 3;
            int C = 7;
            int D = 21;
            int E = 5;
            int[] notas = { A, B, C, D, E };
            int media = ( A + B + C + D + E ) / 5;

            

            Console.WriteLine("Nota A = " + A + "; Nota B = " + B + "; Nota C = " + C + "; Nota D = " + D + "; Nota E = " + E );
            Console.WriteLine("A média da turma é " + media);
            Console.WriteLine("A maior nóta é: " + notas.Max());
            Console.WriteLine("A menor nota é: " + notas.Min());
            Console.Read();
        }

    }
}
