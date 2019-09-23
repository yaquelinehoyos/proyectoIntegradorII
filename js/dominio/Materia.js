function Materia(id,nombre,creditos,linea,nivel,ubicacionHorizontal,descricion,pre,co){
    this.Id=id;
    this.Nombre=nombre;
    this.Creditos=creditos;
    this.Linea=linea; // linea a la que pertenece la materia
    this.Nivel=nivel; // nivel ubicacion vertical (semestre)
    this.UbicacionHorizontal=ubicacionHorizontal; // ubicación horizontal en la malla
    this.Descripcion=descricion;
    this.pre=pre; // prerrequisitos
    this.co=co; // correquisitos
}
