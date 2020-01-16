//função para checar se um campo foi preenchido
function validateForm() {
    var x = document.forms["formulario"]["email"].value;
    //var y = document.forms["formulario"]["senha"].value;
    if (x == "") {
        alert("O campo de e-mail não pode estar vazio");
        return false;
    }

    if (y == "") {
        alert("O campo de senha não pode estar vazio");
        return false;
    }


}

//validação de números
function myFunction() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("demo").innerHTML = text;
}

