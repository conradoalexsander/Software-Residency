
$(document).ready(function(){
    $("input").change(function(){
        $.get("https://swapi.co/api/people/" + $("#personagem").val() + "/",
        function(data, status){
            $("#demo").text("Carregado");
            alert("Data: " + data.name 
            + "\nStatus: " + status);

        });
        $("#demo").text("LOADING....");
    });
}); 
