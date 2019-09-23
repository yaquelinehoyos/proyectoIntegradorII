var usuarioServicio;
window.onload=function(){
    usuarioServicio = new UsuarioServicio();
}

function iniciarSesion(){
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var usuario = new Login(user, password);
    if (usuarioServicio.validarUsuario(usuario)===true){
        window.location.href = "malla.html#q"
    } else{
        M.toast({html: 'Usuario incorrecto',classes:'toast-personalizado'});
    }
   
}