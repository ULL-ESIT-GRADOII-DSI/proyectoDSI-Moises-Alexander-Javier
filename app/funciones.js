(function() {
    "use strict";
    $(document).ready(function(){

       
        $("#button").click(function(){
       
            console.log("onclic");
            $.get('/pendi', function(err,controller){
               console.log("datos recibidos");
               console.log(controller);
                /*for (var i=0; i<controller.length; i++){
                    $('p#p'+(i)).html(controller[i].text);
                    $('p#name'+(i)).text(controller[i].creador.local.email);
                }*/
                
            });
        });

    });
})();