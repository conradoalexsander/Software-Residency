using System;
using System.Collections.Generic;
using System.Text;

namespace Classes
{
    class Professor:Pessoa
    {
        private string matricula;
        private string materia;

        public string getMatricula() => this.matricula;
        public string getMateria() => this.materia;

        public void setMatricula(string matricula) => this.matricula = matricula;
        public void setMateria(string materia) => this.materia = materia;

    }
}
