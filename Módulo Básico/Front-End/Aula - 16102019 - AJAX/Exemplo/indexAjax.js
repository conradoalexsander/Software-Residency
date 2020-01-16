
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var resposta = JSON.parse(this.responseText);
            document.getElementById("resultado").innerHTML =
                "<p>" + resposta.id + " " +
                resposta.name + " " +
                resposta.tagline + " " + "</p>";
        }
    };
    xhttp.open("GET", "https://api.punkapi.com/v2/" + name.value + "/json/", true);
    xhttp.send();
}