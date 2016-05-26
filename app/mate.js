$(document).ready(function(){
        
    
    $(".button-collapse").sideNav();//barra pequeña
    $('input#input_text, textarea#textarea1').characterCounter(); //formularios

});
    
    
    
    
function validacion_signup() {
    
    
    var nombre= document.getElementById("nombre1").value;    
    var usuario= document.getElementById("username1").value; 
    var edad= document.getElementById("edad1").value; 
    var email= document.getElementById("email1").value; 
    var password= document.getElementById("password1").value;
    

    
  if (nombre.length == 0) {
   
    alert('No ha introducido ningún nombre');
    return false;

  }
  else if (usuario.length == 0) {
    
    alert('No ha introducido ningún usuario');
    return false;

  }
 
  else if (edad.length == 0) {
    
    alert('No ha introducido ningún edad');
    return false;

  }
  else if (edad < 18) {
    
    alert('Debe ser mayor de 18 años');
    return false;

  }
  else if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.([a-z]{2,4})$/).test(email)) {
    
    alert('No ha introducido ningún email correcto');
    return false;

  }
  else if (password.length == 0) {
    // Si no se cumple la condicion...
    alert('No ha introducido ninguna contraseña');
    return false;

  }
  
  return true;
  
 
};