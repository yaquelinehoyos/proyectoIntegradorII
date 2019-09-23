function NumerosRomanos(){
    this.ListaNumeros=[
        " I",
        " II",
        " III",
        " IV",
        " V",
        " VI",
        " VII",
        " VIII",
        " IX",
        " X"
    ]
}

NumerosRomanos.prototype.numeroARomano=function(num){
    return this.ListaNumeros[num-1];
}