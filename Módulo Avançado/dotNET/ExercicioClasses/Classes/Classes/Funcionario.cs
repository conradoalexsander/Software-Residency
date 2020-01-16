using System;
using System.Collections.Generic;
using System.Text;

namespace Classes
{
    class Funcionario:Pessoa
    {
        private string funcao;

        public string getFuncao() => this.funcao;

        public void setFuncao(string funcao) => this.funcao = funcao;

    }
}
