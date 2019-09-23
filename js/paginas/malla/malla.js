

var materiaServicio,mallaServicio;
var usuarioServicio;

window.onload=function(){
    usuarioServicio = new UsuarioServicio();
    mallaServicio= new MallaServicio();
    materiaServicio= new  MateriaServicio();
    var usuarioEnSesion = sessionStorage.getItem('usuario');
   
    if(usuarioServicio.validarNombreUsuario(usuarioEnSesion)){
        cargarMallaPrincipal();
        cargarMallaSocioH();
        cargarMallaCienciasBasicas();
        cargarMallaIngSoftware();
        cargarMallaAlgoritmia();
        cargarMallaArqComputadores();
        cargarMallaPractica();
        pintarLineas();
        $('.tabs').tabs({swipeable:true});
    }else{
        window.location.href = "index.html"
    }
}


function cargarMallaPrincipal(){
    var materias=materiaServicio.ObtenerMateriasPrincipales();
    crearLienzoMaterias(materias,"canvasMalla",true);
    
}

function cargarMallaSocioH(){
    var materias=materiaServicio.ObtenerMateriasSociohumanisticas();
    crearLienzoMaterias(materias,"canvasSocioH",false);
}

function cargarMallaCienciasBasicas(){
    var materias=materiaServicio.ObtenerMateriasCienciasBasicas();
    crearLienzoMaterias(materias,"canvasCienciasB",false);
}

function cargarMallaIngSoftware(){
    var materias=materiaServicio.ObtenerMateriasIngenieriaDeSoftware();
    crearLienzoMaterias(materias,"canvasIngSoftware",false);
}

function cargarMallaAlgoritmia(){
    var materias=materiaServicio.ObtenerMateriasAlgoritmiaYProgramacion();
    crearLienzoMaterias(materias,"canvasAlgoritmia",false);
}

function cargarMallaArqComputadores(){
    var materias=materiaServicio.ObtenerMateriasArquitecturaDeComputadores();
    crearLienzoMaterias(materias,"canvasArqComputadores",false);
}

function cargarMallaPractica(){
    var materias=materiaServicio.ObtenerPracticaAcademica();
    crearLienzoMaterias(materias,"canvasPractica",false);
}


function pintarLineas(){
    var contenedorLinea = document.getElementById("contenedorLinea");
    contenedorLinea.innerHTML="";
    var lineas = mallaServicio.ObtenerLineas();
    for(var i=0; i<lineas.length; i++)
    {
        contenedorLinea.innerHTML+='<div class="inline" style="background-color:'+lineas[i].colorFondo+'" ><div style="width:100%">'+lineas[i].Nombre+'</div></div>';
    }
}

function crearLienzoMaterias(materias,canvasId,pintaNiveles){
    var c = document.getElementById(canvasId);
    var ctx = c.getContext("2d");
    var lienzoMalla=new LienzoMalla(materias,ctx,mallaServicio,pintaNiveles);
    lienzoMalla.onClickMateria(function(evt){
        location.href="materia.html?m="+evt.materia.Id;
    });
    window.addEventListener("mousemove",function(){
        lienzoMalla.ocultarTooltip();
    });
    lienzoMalla.pintar();
}


function cerrarSesion(){
    console.log("bobo");
    sessionStorage.removeItem('usuario');
    location.href="index.html";
}


