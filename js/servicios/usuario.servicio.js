function UsuarioServicio(){
    this.usuarios = this.obtenerUsuarios();
}

UsuarioServicio.prototype.validarUsuario = function(login){
    var existeUsuario = false;
    this.usuarios.filter(function(elemento){
        if(elemento.Usuario === login.Usuario && elemento.Contraseña === login.Contraseña){
            existeUsuario =  true;
            sessionStorage.setItem('usuario', login.Usuario);
        }
    });
    return existeUsuario;
}

UsuarioServicio.prototype.obtenerUsuarios = function(){
    var usuarios=[
        new Login("yaque","123"),
        new Login("yenny","123"),
        new Login("victor","123"),
    ];
    return usuarios;
}

UsuarioServicio.prototype.validarNombreUsuario = function(nombreUsuario){
    var existeUsuario = false;
    this.usuarios.filter(function(elemento){
        if(elemento.Usuario === nombreUsuario){
            existeUsuario =  true;
        }
    });
    return existeUsuario;
}



