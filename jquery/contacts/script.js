$(document).ready(function(){
    console.log("doc is ready")
    $("#submit").click(function(){   
        //console.log('logging: 1');
        var first = $("#firstname").val();
        var surname = $("#lastname").val();
        var describe = $("textarea").val();
        var biz = first +" "+ surname;
        console.log("logging: 2", biz, describe);
        $(".sidebar").append("<div class='infocard'><h2> "+biz+" </h2>"+"<p>Click for more details</p><p hidden>"+describe+"</p></div>");
        $("form").trigger("reset");
        return false;
        
    });
    $(document).on('click', '.infocard', function() {
        $(this).children('p').toggle('slow');
    });
});
