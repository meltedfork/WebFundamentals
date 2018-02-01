$("document").ready(function(){
    console.log("Document is Ready");
    $( "img" ).click(function() {
       console.log("this", this)
        $( this ).fadeTo(500, 0);
      });
    $("#restore").click(function(){
        $("img").fadeTo(500, 100);
    });
});