function salvar(){
    var nome = document.getElementById("nomeItem");
    var valor = document.getElementById("valorItem");

    localStorage.setItem(nome.value, valor.value);
    listarTodos();
}
    

function listarTodos(){
    if (typeof(Storage) !== "undefined") {
        var key = "";
		var list = "<tr><th>Descrição</th><th>Valor (R$)</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td>\n<td><th><button class='btn btn-warning' onclick='removerItem(\""+key+"\")'>Remover</button></th></td></tr>\n";
		}
		if (list == "<tr><th>Descrição</th><th>Valor (R$)</th></tr>\n") {
			list += "<tr><td><i>vazio</i></td>\n<td><i>vazio</i></td></tr>\n";
		}
		document.getElementById('lista').innerHTML = list;
    } else {
    document.getElementById("lista").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
}

function limparTodos(){
    localStorage.clear();
    listarTodos();
}

function removerItem(key) {
    localStorage.removeItem(key);
	listarTodos();
}


/*if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("nome", nomeItem.value);
    localStorage.setItem("valor", valorItem.value);
    // Retrieve
   document.getElementById("lista").innerHTML = "Nome: " + localStorage.getItem("nome") + "/ Valor: R$ " + localStorage.getItem("valor");
} else {
    document.getElementById("lista").innerHTML = "Sorry, your browser does not support Web Storage...";
}*/