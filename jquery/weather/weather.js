//Weather App
//my API Key:
//0c3d29974f299df0ae2f2b0e3a3bc9da

$(document).ready(function () {
    console.log("doc is ready");
    $('form').submit(function (event) {
        event.preventDefault();
        console.log('event', event);
        // your code here (build up your url)
        var cityName = $("#city-name").val()
        console.log(cityName);
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=0c3d29974f299df0ae2f2b0e3a3bc9da', function (cityData) {
            console.log('data', cityData);
            //window.weatherData = data;
            var name = cityData.name;
            var temperature = Math.trunc((cityData.main.temp - 273)*(9/5)+32);
            console.log(name, temperature);
            $('#name').html('<h1>' + name + '</h1>');
            $('#temperature').html('<h2>' + temperature + ' ° F</h2>');
        });
        // don't forget to return false so the page doesn't refresh
        return false;
    });
});

