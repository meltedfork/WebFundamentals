//Pokemon
$(document).ready(function(){
    for(var i = 149; i < 301; i++){
        var sprite = i;
    $("main").append('<img id="' + sprite + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"'+sprite+'".png>');
    console.log("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+sprite+".png>");
    }    
});

