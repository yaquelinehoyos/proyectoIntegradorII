function MateriaServicio(){
    this.materiasPrincipales=this.CrearMateriasPrincipales();
    this.materiasSocioH=this.CrearSociohumanisticas();
    this.materiasCienciasBasicas=this.CrearMateriasCienciasBasicas();
    this.materiasIngSoftware=this.CrearMateriasIngenieriaDeSoftware();
    this.materiasAlgYPro=this.CrearMateriasAlgoritmiaYProgramacion();
    this.materiasArqyPro=this.CrearMateriasArquitecturaDeComputadores();
    this.opcionesPractica=this.CrearPracticaAcademica();

    this.todasLasMaterias=this.materiasPrincipales
    .concat(this.materiasSocioH)
    .concat(this.materiasCienciasBasicas)
    .concat(this.materiasIngSoftware)
    .concat(this.materiasAlgYPro)
    .concat(this.materiasArqyPro)
    .concat(this.opcionesPractica);
}

MateriaServicio.prototype.obtenerMateriaPorId=function(idMateria){
    return this.todasLasMaterias.find(x=>x.Id==idMateria);
}


MateriaServicio.prototype.ObtenerMateriasPrincipales=function(){
    return this.materiasPrincipales;
}

MateriaServicio.prototype.ObtenerMateriasSociohumanisticas=function(){
    return this.materiasSocioH;
}

MateriaServicio.prototype.ObtenerMateriasCienciasBasicas=function(){
    return this.materiasCienciasBasicas;
}

MateriaServicio.prototype.ObtenerMateriasIngenieriaDeSoftware=function(){
    return this.materiasIngSoftware;
}

MateriaServicio.prototype.ObtenerMateriasAlgoritmiaYProgramacion=function(){
    return this.materiasAlgYPro;
}

MateriaServicio.prototype.ObtenerMateriasArquitecturaDeComputadores=function(){
    return this.materiasArqyPro;
}

MateriaServicio.prototype.ObtenerPracticaAcademica=function(){
    return this.opcionesPractica;
}

MateriaServicio.prototype.CrearMateriasPrincipales=function(){

    var listaMaterias=[
        //materias nivel1
     new Materia(1,"Vivamos la universidad",0,12,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(2,"Logica y representacion I",4,4,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[3]),
     new Materia(3,"Matemáticas discretas I",4,5,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[2]),
     new Materia(4,"Introducción a la ingeniería de sitemas",2,12,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(5,"Algebra y trigonometria",4,1,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[6]),
     new Materia(6,"Cálculo diferencial",4,1,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[5]),
     new Materia(7,"Lectoescritura",4,12,1,7,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(8,"Inglés I",0,12,1,8,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
        //materias nivel2
    new Materia(9,"Técnicas de programación y laboratorio",5,4,2,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[10,11]),
    new Materia(10,"Logica y representacion II",4,4,2,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[2],[11,9]),
    new Materia(11,"Matemáticas discretas II",4,5,2,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[3],[9,10]),
    new Materia(12,"Geometría vectorial y analítica",4,1,2,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(13,"Cálculo integral",4,1,2,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[5,6],[]),
    new Materia(14,"Formación ciudadana y constitucional",0,12,2,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[7],[]),
    new Materia(15,"Inglés II",0,12,2,7,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[8],[]),
    //materias nivle3
    new Materia(16,"Análisis y diseño de sistemas I",5,9,3,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[9],[]),
    new Materia(17,"Logica y representacion III",5,4,3,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[10],[]),
    new Materia(18,"Algebra Lineal",4,1,3,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[12],[]),
    new Materia(19,"Descubriendo la física",4,1,3,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(20,"Teoría de la probabilidad y colas",5,3,3,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[13],[]),
    new Materia(21,"Inglés III",0,12,3,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[15],[]),
    //materias nivel4
    new Materia(22,"Análisis y diseño de sistemas II",4,9,4,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[16],[]),
    new Materia(23,"Teoria de lenguajes y laboratorio",5,4,4,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[17],[]),
    new Materia(24,"Estructuras físicas de la información y laboratorio",5,11,4,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[17],[]),
    new Materia(25,"Física mecánica",4,1,4,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[5,6,12,19],[]),
    new Materia(26,"Métodos Estadísticos ",4,3,4,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[20],[]),
    new Materia(27,"Inglés IV",0,12,4,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[21],[]),
    //materias nivel5
    new Materia(28,"Arquitectura de software",2,9,5,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[22],[30]),
    new Materia(29,"Comunicaciones y laboratorio",5,8,5,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[17],[]),
    new Materia(30,"Bases de datos y laboratorio",5,11,5,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[24],[28]),
    new Materia(31,"Arquitectura de computadores y laboratorio",5,7,5,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[11],[]),
    new Materia(32,"Modelos de sistemas I",4,6,5,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[26],[]),
    new Materia(33,"Inglés V",0,12,5,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[27],[]),
    //materias nivel6
    new Materia(34,"Fundamentos de investigación",4,9,6,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[22],[]),
    new Materia(35,"Fundamentos de sistemas de información",2,10,6,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[16],[]),
    new Materia(36,"Comunicaciones II",4,8,6,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[29],[]),
    new Materia(37,"Sistemas operativos y laboratorio",4,7,6,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[24,31],[]),
    new Materia(38,"Física de campos",4,1,6,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[13,25],[]),
    new Materia(39,"Simulación de sistemas y laboratorio",4,6,6,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[32],[]),
    new Materia(40,"Inglés VI",0,12,6,7,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[33],[]),
     //materias nivel7
    new Materia(41,"Calidad del software",4,9,7,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[28],[]),
    new Materia(42,"Gestión de proyectos de sistemas de información",4,10,7,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[35],[]),
    new Materia(43,"Electiva socio-humanística I",4,2,7,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(44,"Laboratorio integrado de física",4,1,7,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[38],[]),
    new Materia(45,"Proyecto integrador I",1,13,7,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(46,"Línea de énfasis I",4,13,7,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    //materias nivel8
    new Materia(47,"Electiva socio-humanística II",4,2,8,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(48,"Curso alternativo ciencias básicas",4,1,8,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(49,"Proyecto integrador II",1,13,8,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(50,"Línea de énfasis II",4,13,8,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    //materias nivel9
    new Materia(51,"Línea de énfasis complementaria II",4,13,9,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(52,"Electiva socio-humanística III",4,2,9,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(53,"Ética profesional",2,12,9,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(55,"Línea de énfasis III",4,13,9,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(54,"Línea de énfasis complementaria I",4,13,9,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    new Materia(54,"Línea de énfasis complementaria II",4,13,9,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    //materias nivel10
    new Materia(56,"Práctica académica",0,12,10,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[34],[]), 


    ];

    return listaMaterias;

}

MateriaServicio.prototype.CrearSociohumanisticas=function(){

    var listaMateriasSociohumanisticas=[

     new Materia(57,"Lean 6 sigma proc. manuf.",4,12,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(58,"Introducción a las ciencias",4,12,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(59,"Historia contemporánea",4,12,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(60,"Historia de la ingeniería",4,12,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(61,"Argumentación y lectoescritura",4,12,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(62,"Introducción a la psicología",4,12,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(63,"Razonamiento y conocimiento",4,12,2,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(64,"Legislación",4,12,2,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(65,"Pensamiento crítico y nuevas tecnologías",4,12,2,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(66,"Pensar la historia",4,12,2,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(67,"Humanidad y economía",4,12,2,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(68,"Ciencia técnica y sociedad",4,12,2,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(69,"Estrat. psicos. inge. sistemas",4,12,3,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(70,"Ing. Colombia: Una pers. H",4,12,3,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(71,"Escul. conte. En la inge.",4,12,3,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(72,"Rotación deportiva",4,12,3,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(73,"La ingniería en la literatura y el cine",4,12,3,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(74,"Afi. afec. adic. sue. con. vin.",4,12,3,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(75,"Habili. socia. harr. comuni.",4,12,4,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(76,"Resp. suj. cont. soci. y pol.",4,12,4,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(77,"G. ind. (his. of the gre. in)",4,12,4,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(78,"El siglo XX en EU Art. cue.",4,12,4,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(79,"Artes esc. y capa. expresi.",4,12,4,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(80,"Folósofos presocráticos",4,12,4,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(81,"La dan. cuer: rit. popu. la.",4,12,5,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(82,"Leonardo Da Vinci",4,12,5,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(83,"Pedagogía para ingenieros",4,12,5,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(84,"A. sal. pub. seg. ind. ate. eme.",4,12,5,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(85,"Crea. empre. y trasn. real",4,12,5,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(86,"Econ. socia. y desarrollo humano",4,12,5,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(87,"Geopolítica mundial (Esp)",4,12,6,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(88,"Geopolítica mundial (Ing)",4,12,6,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(89,"Geografía e historia de Medellín",4,12,6,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(90,"Responsabilidad ambiental (Ing)",4,12,6,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(91,"Creatividad para emprender",4,12,6,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(92,"Emprendimiento",4,12,6,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(93,"Plan de negocios",4,12,7,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(94,"Piic. poy.ingenier. com.",4,12,7,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(95,"La ingeniería en la literatura y el cine",4,12,7,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(96,"Afi. afec. adic. sue. con. vin.",4,12,7,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    ];

    return listaMateriasSociohumanisticas;

}

MateriaServicio.prototype.CrearMateriasCienciasBasicas=function(){

    var listaMateriasCienciasBasicas=[

     new Materia(97,"Introducción a las ciencias",4,9,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(98,"Diseño de circuitos digitales",4,9,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[11],[]),
     new Materia(99,"Física de ondas",4,9,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[25],[]),
     new Materia(100,"Física térmica",4,9,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[25,13],[]),
     new Materia(101,"Física moderna",4,9,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[99],[]),
     new Materia(102,"Geometría euclidiana",4,9,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(103,"Ecuaciones diferenciales",4,9,2,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[13,18],[]),
     new Materia(104,"Cálculo vectorial",4,9,2,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[13],[]),
    ];

    return listaMateriasCienciasBasicas;

}

MateriaServicio.prototype.CrearMateriasIngenieriaDeSoftware=function(){

    var listaMateriasIngenieriaDeSoftware=[

     new Materia(105,"Ingeniería web",4,6,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[30],[]),
     new Materia(106,"Codiseño",4,6,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(107,"Seminario base de datos",4,6,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[30],[]),
     new Materia(108,"Ing. proces. de software",4,6,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[41],[]),
     new Materia(109,"Pruebas de softawre",4,6,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[41],[]),
     new Materia(110,"Sistemas informac. geograf.",4,6,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(111,"Desarrollo de aplicaciones empresariales",4,6,2,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[30,28],[]),
     new Materia(112,"Ing. proces. negocios",4,6,2,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[30,28],[]),
     new Materia(113,"Const. software seguro",4,6,2,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(114,"Prof. arquitectura del software",4,6,2,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[22,28],[]),
    ];

    return listaMateriasIngenieriaDeSoftware;

}

MateriaServicio.prototype.CrearMateriasAlgoritmiaYProgramacion=function(){

    var listaMateriasAlgoritmiaYProgramacion=[

     new Materia(115,"Análisis numérico",4,7,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(116,"Optimización",4,7,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[20],[]),
     new Materia(117,"Programación de gráficos",4,7,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[9],[]),
     new Materia(118,"Programación lineal",4,7,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(119,"Simulación de sistemas II",4,7,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(120,"Sistemas comlejos",4,7,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(121,"Modelos de sistemas II",4,7,2,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(122,"Modelos de sistemas III",4,7,2,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(123,"Tecnic. inteligencia artificial I",4,7,2,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(124,"Tecnic. inteligencia artificial II",4,7,2,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(125,"Compiladores",4,7,2,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(126,"Matemáticas discretas III",4,7,2,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[11],[]),
     new Materia(127,"Matemáticas discretas IV",4,7,3,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[126],[]),
     new Materia(128,"Tecn. paradig. program",4,7,3,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(129,"Introducción a la algoritmia bioinf.",4,7,3,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[17],[]),
    ];

    return listaMateriasAlgoritmiaYProgramacion;

}

MateriaServicio.prototype.CrearMateriasArquitecturaDeComputadores=function(){

    var listaMateriasArquitecturaDeComputadores=[

     new Materia(130,"Diseño de circuitos digitales",4,1,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(131,"Arquitectura II",4,1,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(132,"Sistemas paralelos",4,1,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(133,"Codiseño",4,1,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(134,"Sistemas embebidos",4,1,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(135,"Laboratorio de electrónica y señales",4,1,1,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(136,"Electrónica y señales",4,1,2,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(137,"Servicios en internet",4,1,2,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(138,"Seminario de voz IP",4,1,2,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(139,"Profundización en redes I",4,1,2,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(140,"Profundización en redes II",4,1,2,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(141,"Profundización en redes III",4,1,2,6,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(142,"Profundización en redes IV",4,1,3,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(143,"Procesamiento digital de imágenes",4,1,3,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(144,"Computación móvil",4,1,3,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    ];

    return listaMateriasArquitecturaDeComputadores;

}

MateriaServicio.prototype.CrearPracticaAcademica=function(){

    var listaPracticaAcademica=[

     new Materia(145,"Trabajo de grado",0,4,1,1,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(146,"Semestre de industria",0,4,1,2,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(147,"Empresarismo I",0,4,1,3,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(148,"Proyecto de investigación",0,4,1,4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
     new Materia(149,"Práctica social",0,4,1,5,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor...",[],[]),
    ];

    return listaPracticaAcademica;

}