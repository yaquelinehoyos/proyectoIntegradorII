function Malla(materias){
    this.Materias=materias;
}

Malla.prototype.ObtenerMaximoNivel=function(){
    var maximo=0;
    for(var i=0; i<this.Materias.length; i++){
       if(this.Materias[i].Nivel>maximo){
         maximo=this.Materias[i].Nivel;
       }
    }
    return maximo;
}

Malla.prototype.ObtenerMaximaUbicacionHorizontal=function(){
    var maximo=0;
    for(var i=0; i<this.Materias.length; i++){
       if(this.Materias[i].UbicacionHorizontal>maximo){
         maximo=this.Materias[i].UbicacionHorizontal;
       }
    }
    return maximo;
}

Malla.prototype.ObtenerMateriasPorIds=function(ids){
    var result=[];
    for(var i=0; i<ids.length; i++){
        var materia=this.Materias.find(x=>x.Id==ids[i]);
        if(materia){
            result.push(materia);
        }
    }
    return result;
}