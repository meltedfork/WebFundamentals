$(document).ready(function () {
    console.log("doc is ready");
    for (var i = 1; i < 15; i++) {
        var sprite = i;
        console.log(sprite, 'sprite');
        //$("main").append('<img id="' + sprite + '" src="https://pokeapi.co/api/v2/pokemon/front'+ sprite +'.png">');
        $("#left").append('<img id="' + sprite + '" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+ sprite +'.png">');
        $.get('https://pokeapi.co/api/v2/pokemon/'+ sprite, function (data) {
            //console.log('data', data);
            //then get specific data  
            var name = data.name;
            var weight = data.weight;
            var height = data.height;
            //var types = data.types.slot.type.name;
            console.log(name, weight, height);
        });
    }
    $("img").click(function () {
        console.log('loading');
        $("#right").html('img' )
    });
});    