function MallaServicio(){
    this.LineasMalla=this.generarEstilosLinea();
}

MallaServicio.prototype.generarEstilosLinea=function(){
    return [
        new LineaMalla(1,"Ciencias exactas y naturales","#ff5252"),
        new LineaMalla(2,"Ciencias sociales y humanas","#7986cb"),
        new LineaMalla(3,"Ingeniería básica","#b39ddb"),
        new LineaMalla(4,"Algoritmia y programación","#f48fb1"),
        new LineaMalla(5,"Matemáticas discretas","#aa00ff"),
        new LineaMalla(6,"Ciencia computacional","#e040fb"),
        new LineaMalla(7,"Arquitectura de máquinas y sistemas operativos","#009688"),
        new LineaMalla(8,"Comunicación de datos","#cddc39"),
        new LineaMalla(9,"Ingeniería de software","#00bcd4"),
        new LineaMalla(10,"Sistemas de información","#ff5722"),
        new LineaMalla(11,"Administración de la información","#76ff03"),
        new LineaMalla(12,"Elementos sociales y profesionales","#ffc107"),
        new LineaMalla(13,"Énfasis","#0277bd"),
    ];
}

MallaServicio.prototype.ObtenerLineaMallaPorId=function(id){
    var lineaMalla=this.LineasMalla.find(x=>x.Id==id);
    return lineaMalla;
}

MallaServicio.prototype.ObtenerLineas = function(){
    return this.LineasMalla;
}
