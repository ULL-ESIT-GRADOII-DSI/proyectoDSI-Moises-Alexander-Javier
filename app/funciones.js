(function() {
    "use strict";
    $(document).ready(function(){
        
       /* 
       $(".button-collapse").sideNav();//barra pequeña
        $('input#input_text, textarea#textarea1').characterCounter(); //formularios
        */
        
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
                        $('.tareas-pendientes').append(alerta);
                    }
                    else
                    {
                        for(var i=0; i<data.length; i++) 
                        {
                            if(data[i].estado == "pendiente")
                            {
                                var h3 = '<h3 class="h3">'+ data[i].tarea + '</h3>';
                                
                                var div = '<div class="div">'          +
                                          '<p>' + 'Fecha de entrega: ' + data[i].fecha      +  '</p>' + 
                                          '<p>' +  data[i].informacion                      +  '</p>' +
                                          '</div>';
                                

                                $('.tareas-pendientes').append(h3);
                                $('.tareas-pendientes').append(div);
                            }
                        } 

                       /* $('.tareas-pendientes').append(div);*/
                        
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