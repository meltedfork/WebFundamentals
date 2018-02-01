$(document).ready(function(){
    $("#submit").click(function(){   
        var first = $("#firstname").val();
        //console.log('logging: 1');
        var last = $("#lastname").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var markup = "<tr><td>"+first+"</td><td>"+last+"</td><td>"+email+"</td><td>"+phone+"</td></tr>";
        $("table tbody").append(markup);
    });
});
