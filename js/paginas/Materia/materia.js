(function(){

    var materiaServicio;
    var materia;
    window.onload=function(){
        $('.tabs').tabs({swipeable:true});
        materiaServicio= new  MateriaServicio();
        var idMateria=parseInt(qs('m'));
        if(idMateria>0){
            materia=materiaServicio.obtenerMateriaPorId(idMateria);
            $(".tituloMateria").html(materia.Nombre);
            console.log(materia);
        }
        else{
            window.location.href = "malla.html"
        }
    }
    
    function qs(key) {
        key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
        var match = location.search.match(new RegExp("[?&]"+key+"=([^&]+)(&|$)"));
        return match && decodeURIComponent(match[1].replace(/\+/g, " "));
    }
})();
