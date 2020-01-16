using System;

namespace Classes
{
    class Program
    {
        static void Main(string[] args)
        {
            Aluno aluno = new Aluno();
            Professor professor = new Professor();
            Funcionario funcionario = new Funcionario();

            //Adicionando informações para o novo aluno

            Console.Write("Informe o nome do aluno: ");
            aluno.setNome(Console.ReadLine());
            Console.Write("Informe a idade do aluno: ");
            aluno.setIdade(Convert.ToInt32(Console.ReadLine()));
            Console.Write("Informe a matrícula do aluno: ");
            aluno.setMatricula(Console.ReadLine());

            //Adicionando informações para o novo professor

            Console.Write("Informe o nome do professor: ");
            professor.setNome(Console.ReadLine());
            Console.Write("Informe a idade do professor: ");
            professor.setIdade(Convert.ToInt32(Console.ReadLine()));
            Console.Write("Informe a matrícula do professor: ");
            professor.setMatricula(Console.ReadLine());
            Console.Write("Informe a matéria do professor: ");
            professor.setMateria(Console.ReadLine());

            //Adicionando informações para o novo funcionário

            Console.Write("Informe o nome do funcionário: ");
            funcionario.setNome(Console.ReadLine());
            Console.Write("Informe a idade do funcionário: ");
            funcionario.setIdade(Convert.ToInt32(Console.ReadLine()));
            Console.Write("Informe a função do funcionário: ");
            funcionario.setFuncao(Console.ReadLine());

            //Resultados do console
            Console.WriteLine("Aluno -  nome: " + aluno.getNome() +", matrícula: "+ 
                aluno.getMatricula() + " e sua idade é: " + aluno.getIdade());
            Console.WriteLine("Professor - nome: " + professor.getNome() + ",  matrícula: " +
                professor.getMatricula() + ", sua idade é: " + professor.getIdade() + " e sua matéria é: " +
                professor.getMateria());
            Console.WriteLine("Funcionário: " + funcionario.getNome() + ", idade: " +
                funcionario.getIdade() + " e sua função é: " + funcionario.getFuncao());
      
            Console.ReadLine();

        }
    }
}
