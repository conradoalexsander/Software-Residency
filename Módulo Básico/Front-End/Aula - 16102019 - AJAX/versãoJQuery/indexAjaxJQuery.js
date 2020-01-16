
$(document).ready(function(){
    $("input").change(function(){
        $.get("https://viacep.com.br/ws/" + $("#cep").val() + "/json/",
        function(data, status){
            $("#demo").text("Carregado");
            alert("Data: " + data.logradouro 
            + "\nStatus: " + status);

        });
        $("#demo").text("LOADING....");
    });
}); 
