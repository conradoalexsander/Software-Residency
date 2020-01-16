
       
        //O javascript não é uma linguagem tipada (aceita declaração sem declarar o valor)-
        var valor1 = "2 ", valor2 =2.5; 
        var original = "Primeiro JS";

        function soma(){
            //função que realiza a soma de dois valores a partir de input do usuário
            var v1=Number(document.getElementById('v1').value);
            var v2=Number(document.getElementById('v2').value);
            document.getElementById('texto').innerHTML = "soma = " +(v1+v2);
        }

        function somaConsole(){
            //função que realiza a soma de dois valores a partir de input do usuário
            var v1=Number(document.getElementById('v1').value);
            var v2=Number(document.getElementById('v2').value);
            console.log("soma = " +(v1+v2));
        }

        function somaReescreveDocumento(){
            //função que realiza a soma de dois valores a partir de input do usuário
            var v1=Number(document.getElementById('v1').value);
            var v2=Number(document.getElementById('v2').value);
            document.write("soma = " + (v1+v2));
        }
        function atualiza(){;
            document.getElementById("texto").innerHTML = "Mudei o meu texto";
            document.getElementById("texto").style.color="blue";
        }

        function trocaCor(){
            document.getElementById("texto").innerHTML=original;
            document.getElementById("texto").style.color="#000";
        }

        function google(){
            window.location="https://www.google.com";
        }

        function add(){
            document.getElementById("itens").innerHTML = document.getElementById("itens").innerHTML + 
            '<p style="color:green;font-size:30;">'+document.getElementById("v1").value+"</p>";
            //função que adiciona texto na tela e permanece com os anteriores
        }

       

