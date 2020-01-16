using System;
using System.Collections.Generic;
using System.Text;

namespace Classes
{
    class Aluno:Pessoa
    {
        private string matricula;

        public string getMatricula() => this.matricula;
 
        public void setMatricula(string matricula) => this.matricula = matricula;
    }
}
