function LienzoMalla(materias,ctx,mallaServicio,mostrarNiveles){
    this.Malla=new Malla(materias);
    this.ctx=ctx;
    this.mostrarNiveles=mostrarNiveles;
    this.margenMaterias=new Rectangulo(10,20);
    this.tamanioMateria=new Rectangulo(137,100);
    this.tooltipMateria=new TooltipMateria(this.Malla);
    this.fontSizeMateria=14;
    this.mallaServicio=mallaServicio;
    this.eventosClickMateria=[];
    this.agregarEventosMalla();
    this.materiaMouseOver=null;
}

LienzoMalla.prototype.pintar=function(){
    var dimesionesCanvas=this.obtenerDimensionesCanvas();
    this.ctx.canvas.width=dimesionesCanvas.X;
    this.ctx.canvas.height=dimesionesCanvas.Y;
    if(this.mostrarNiveles){
        this.pintarNiveles();
    }
    this.pintarMaterias();
}

LienzoMalla.prototype.onClickMateria=function(f){
    this.eventosClickMateria.push(f);
}

LienzoMalla.prototype.pintarMaterias=function(){
    for(var i=0; i<this.Malla.Materias.length; i++){
        this.pintarMateria(this.Malla.Materias[i]);
    }
}

LienzoMalla.prototype.pintarNiveles=function(){
    var maximoNivel=this.Malla.ObtenerMaximoNivel();
    var posX=this.margenMaterias.X;
    for(var i=1; i<=maximoNivel; i++){
        var posY=((i-1)*this.tamanioMateria.Y+(i*this.margenMaterias.Y))+(this.tamanioMateria.Y/2);
        this.ctx.font="20px Gill Sans";
        this.ctx.fillText("Nivel "+i,posX,posY);
    }
}

LienzoMalla.prototype.pintarMateria=function(materia){
    var linea=this.mallaServicio.ObtenerLineaMallaPorId(materia.Linea);
    if(!linea){
        return;
    }
    var posX=(materia.UbicacionHorizontal-(this.mostrarNiveles?0:1))*this.tamanioMateria.X+((materia.UbicacionHorizontal+(this.mostrarNiveles?1:0))*this.margenMaterias.X);
    var posY=(materia.Nivel-1)*this.tamanioMateria.Y+((materia.Nivel)*this.margenMaterias.Y);
    this.ctx.beginPath();
    this.ctx.rect(posX,posY,this.tamanioMateria.X,this.tamanioMateria.Y);
    if(materia!=this.materiaMouseOver){
        this.ctx.fillStyle=linea.colorFondo;
    }
    else{
        var my_gradient=this.ctx.createLinearGradient(posX,posY,this.tamanioMateria.X+posX,posY+this.tamanioMateria.Y);
        my_gradient.addColorStop(0,linea.colorFondo);
        my_gradient.addColorStop(1,"white");
        this.ctx.fillStyle=my_gradient;
    }
    
    this.ctx.strokeStyle=linea.colorBorde;
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
    this.pintarNombreMateria(posX+10,posY+20,materia.Nombre);
    this.pintarCreditosMateria(posX,posY,materia.Creditos);
}

LienzoMalla.prototype.pintarCreditosMateria=function(posX,posY,creditos){
    this.ctx.beginPath();
    var posYInicial=posY+(this.tamanioMateria.Y*0.75);
    this.ctx.moveTo(posX,posYInicial);
    this.ctx.lineTo(posX+(this.tamanioMateria.X),posYInicial);
    this.ctx.stroke();
    var posXInicial=posX+(this.tamanioMateria.X*0.7);
    this.ctx.moveTo(posXInicial,posYInicial);
    this.ctx.lineTo(posXInicial,posY+this.tamanioMateria.Y);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.fillStyle = "#263238";
    this.ctx.font=this.fontSizeMateria+"px Gill Sans";
    var posXCredito=posXInicial+((posX+this.tamanioMateria.X)-posXInicial)/2;
    var posYCredito=posYInicial+((posY+this.tamanioMateria.Y)-posYInicial)/2;
    this.ctx.fillText(creditos,posXCredito,posYCredito);
    this.ctx.closePath();
}

LienzoMalla.prototype.pintarNombreMateria=function(posX,posY,nombre){
    var lineas=this.ObtenerLineasNombre(nombre);
    
    for(var i=0; i<lineas.length; i++){
        this.ctx.beginPath();
        this.ctx.font=this.fontSizeMateria+"px Gill Sans";
        this.ctx.fillStyle = "#263238";
        this.ctx.fillText(lineas[i],posX,posY+(i*(this.fontSizeMateria+2)));
        this.ctx.fill();
        this.ctx.closePath();
    }
}

LienzoMalla.prototype.ObtenerLineasNombre=function(nombre){
    var palabrasNombre=nombre.split(" ");
    var lineas=[];
    lineaActual="";
    for(i=0; i<palabrasNombre.length; i++){
        if((lineaActual.length+palabrasNombre[i].length)*(this.fontSizeMateria/1.8)<this.tamanioMateria.X){
            lineaActual+=palabrasNombre[i]+" ";
        }
        else{
            lineas.push(lineaActual);
            lineaActual=palabrasNombre[i]+" ";
            
        }
        if(i==palabrasNombre.length-1){
            lineas.push(lineaActual);
        }
    }
    return lineas;
}

LienzoMalla.prototype.obtenerDimensionesCanvas=function(){
    var maximoMateriasNivel=this.Malla.ObtenerMaximoNivel();
    var maximoMateriasUHorizontal=this.Malla.ObtenerMaximaUbicacionHorizontal()+(this.mostrarNiveles?1:0);
    var ancho=(this.tamanioMateria.X*maximoMateriasUHorizontal)+(this.margenMaterias.X*(maximoMateriasUHorizontal+(this.mostrarNiveles?1:0)));
    var alto=(this.tamanioMateria.Y*maximoMateriasNivel)+(this.margenMaterias.Y*(maximoMateriasNivel+1));
    return new Rectangulo(ancho,alto);
}

LienzoMalla.prototype.agregarEventosMalla=function(){
    this.agregarEventoMouseMove();
    this.agregarEventoClick();
}

LienzoMalla.prototype.agregarEventoMouseMove=function(){
    var offsetY=this.ctx.canvas.offsetTop;
    var objThis=this;
    this.ctx.canvas.onmousemove=function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        var rect = objThis.ctx.canvas.getBoundingClientRect();
        var canvasX=evt.clientX- rect.left;
        var canvasY=evt.clientY - rect.top;
        
       
        objThis.materiaMouseOver=null;
        for(var i=0; i<objThis.Malla.Materias.length; i++){
            var materia=objThis.Malla.Materias[i];
            var posX=(materia.UbicacionHorizontal-(objThis.mostrarNiveles?0:1))*objThis.tamanioMateria.X+((materia.UbicacionHorizontal+(this.mostrarNiveles?1:0))*objThis.margenMaterias.X);
            var posY=(materia.Nivel-1)*objThis.tamanioMateria.Y+((materia.Nivel)*objThis.margenMaterias.Y);
    
            var intercepcionHorizontal=posX<=canvasX && canvasX<=(posX+objThis.tamanioMateria.X);
            var intercepcionVertical=posY<=canvasY && canvasY<=(posY+objThis.tamanioMateria.Y);
            if(intercepcionHorizontal && intercepcionVertical){
                objThis.materiaMouseOver=materia;
                break;
            }
        }
        if(objThis.materiaMouseOver){
            objThis.ctx.canvas.style.cursor="pointer";
            objThis.tooltipMateria.mostrarInfoMateria(evt.pageX,evt.pageY,objThis.materiaMouseOver);
        }
        else{
            objThis.ctx.canvas.style.cursor="initial";
            objThis.tooltipMateria.ocultarInfoMateria();
        }
        objThis.pintarMaterias();
    }
}

LienzoMalla.prototype.agregarEventoClick=function(){
    var objThis=this;
    this.ctx.canvas.onclick=function(evt){
            if(objThis.materiaMouseOver){
                for(var i=0; i<objThis.eventosClickMateria.length; i++){
                    evt.materia=objThis.materiaMouseOver;
                    var evento=objThis.eventosClickMateria[i];
                    evento(evt);
                }
            }
    }
}

LienzoMalla.prototype.ocultarTooltip=function(){
    this.tooltipMateria.ocultarInfoMateria();
}