console.log("Let's do this!");
$("document").ready(function(){
    console.log("Document is Ready");
    $("p").hide();
    $("#tree").hide();
    $("#toggle").click(function() {
        $("#lego").toggle("slow", function(){
        });
    });
    $("#append").append("<p>What will happen next?</p>");
    $("#click").click(function(){
        console.log("You clicked it");
        $("h1").addClass("bright");
        $("p").fadeIn();
        $("#click").fadeOut(); 
    });
    $("#slideToggle").click(function(){
        $("#tree").slideToggle();
    });
    $("#before").click(function(){
        $(".main2").before("<p>I placed this new bit before 'More Stuff'</p>");
        $(".main2").after("<p>And this shows up after!</p>");
    });
    $("#slideUp").click(function(){
        $("#bird").slideUp();
    });
    $("#slideDown").click(function(){
        $("#bird").slideDown();
    })
});