function TooltipMateria(malla){
    this.Malla=malla;
    this.contenedorTooltip;
    this.tamnioTooltip=new Rectangulo(300,200);
    this.crearContenedorTooltip();
}

TooltipMateria.prototype.mostrarInfoMateria=function(posX,posY,materia){
    this.contenedorTooltip.innerHTML=this.obtenerHtmlTooltip(materia);
    if(posX+this.tamnioTooltip.X>window.innerWidth-(this.tamnioTooltip.X/2)){
        posX=posX-this.tamnioTooltip.X;
    }
    this.contenedorTooltip.style.left=(posX+5)+"px";
    this.contenedorTooltip.style.top=(posY+5)+"px";
}

TooltipMateria.prototype.ocultarInfoMateria=function(){
    this.contenedorTooltip.innerHTML="";
}

TooltipMateria.prototype.crearContenedorTooltip=function(){
    var c=document.createElement("div");
    c.style.position="absolute";
    this.contenedorTooltip=c;
    document.body.appendChild(this.contenedorTooltip);
}

TooltipMateria.prototype.obtenerHtmlTooltip=function(materia){
    
    return `
    <div class="card">       
        <div class="card-content" style="width: `+this.tamnioTooltip.X+`px; max-height: `+this.tamnioTooltip.Y+`px; overflow-y:auto;">
        <p><b>`+materia.Nombre+`</b></p>
        <p>`+materia.Descripcion+`</p>
        <div>`+this.obtenerHtmlCoPrerrequisitos(materia)+`</div>
        </div>
    </div>
  `;
}

TooltipMateria.prototype.obtenerHtmlCoPrerrequisitos=function(materia){
    var html='';
    if(materia.pre && materia.pre.length>0 && materia.co && materia.co.length>0){
        html=`
        <table class="table">
        <thead>
           <tr>
            <th>Prerequisitos</th>
            <th>Corequisitos</th>
           </tr>
        <thead>
        <tbody>
           <tr>
            <td style='vertical-align:top'>
            `+this.obtenerListaHtmlMaterias(materia.pre)+`
            </td>
            <td style='vertical-align:top'>
            `+this.obtenerListaHtmlMaterias(materia.co)+`
            </td>
           </tr>
        <tbody>
        </table>
        `;
    }
    else{
        if(materia.pre && materia.pre.length>0){
            html="<b>Prerrequisitos</b>"+this.obtenerListaHtmlMaterias(materia.pre);
        }
        if(materia.co && materia.co.length>0){
            html="<b>Correquisitos</b>"+this.obtenerListaHtmlMaterias(materia.co);
        }
    }
    return html;
}

TooltipMateria.prototype.obtenerListaHtmlMaterias=function(idsMaterias){
    var materias=this.Malla.ObtenerMateriasPorIds(idsMaterias);
    var html="<ul style='padding-left:12px'>";
    for(var i=0; i<materias.length; i++){
        html+=" <li style='list-style-type:disc !important'>"+materias[i].Nombre+"</li>";
    }
    html+="</ul>";
    return html;
}