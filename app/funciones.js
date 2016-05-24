(function() {
    "use strict";
    $(document).ready(function(){
        alert("tu puta madre");
        
        //$(".button-collapse").sideNav();//barra pequeña
        //$('input#input_text, textarea#textarea1').characterCounter(); //formularios
        
        $("#button").click(function()
        {
       
            console.log("onclic");
            $.ajax(
            {     
                type: 'GET',
                url: '/pendi',
                success: function (data) {
                    console.log(data);
                    $("#button").css("display","none");
                    
                    
                    if(data.length == 0)
                    {
                        var alerta = '<div class="mensaje"> No tienes tareas pendientes </div>';
                        $('.tareas').append(alerta);
                    }
                    else
                    {
                        for(var i=0; i<data.length; i++) 
                        {
                            if(data[i].estado == "pendiente")
                            {
                                var div = '<div>'+ data[i].tarea + '</div>';
                                div = div + '<div>'+ data[i].informacion + '</div>';
                                div = div + '<div>'+ data[i].fecha + '</div>';
                            }
                        } 

                        $('.tareas').append(div);
                        
                    }
                },
                error: function(){
                      alert("La pagina no esta disponible");
                }
            });
        });

    });
    
    
    
    function validar()
    {
        
        
        
        
    }
    
    
    
    
    
    
    
    
})();