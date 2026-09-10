let EvaluacionesDisponibles = [
    {id: 1,
        nombre: "Antropometría completa",
        descripcion: "Peso, talla, IMC, circunferencia de cintura, cadera, brazo y % de grasa corporal y edad metabólica.",
        duracion: "20 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 18000
    },
    {id: 2,
        nombre: "BioImedanclometría",
        descripcion: "Medición de composición corporal: masa grasa, masa muscular, agua corporal y edad metabólica.",
        duracion: "15 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 12000
    },
    {id: 3,
        nombre: "Encuesta de hábitos alimentarios",
        descripcion: "Análisis del patrón alimentario actual. Identificación de déficit y excesos nutricionales.",
        duracion: "20 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 10000
    },
    {id: 4,
        nombre: "Análisis de exámenes de laboratorio.",
        descripcion: "Interpretación de hemograma, perfil bloquímico y lipídico en contexto nutricional.",
        duracion: "20 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 15000
    }
];

    function evalua(){
        let lista_Evaluaciones = document.getElementById("ListaEvaluaciones");

    let login = JSON.parse(
                localStorage.getItem("login")
            );

            if(login != null && login.admin == "si"){
                lista_Evaluaciones.innerHTML += `<div class="col-12 mb-3">
                <button onclick="aniadir('EvaluacionesDisponibles')" class="btn btn-success">
                    Añadir Evaluaciones
                </button>
            </div>`;
            }

    for (let i = 0; i < EvaluacionesDisponibles.length; i++){

        let botonElim = "";

            if(login != null && login.admin == "si"){
                botonElim = `
                    <button onclick="eliminarEvaluacion(${EvaluacionesDisponibles[i].id})" class="btn btn-danger">
                        Eliminar Empleado
                    </button>
                `;
                }

        lista_Evaluaciones.innerHTML += `
        
        
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${EvaluacionesDisponibles[i].nombre}</h5>
                        <p class="card-text">${EvaluacionesDisponibles[i].descripcion} <br>
                        Modalidad: ${EvaluacionesDisponibles[i].modalidad}. <br> 
                        Precio: $${EvaluacionesDisponibles[i].precio}. <br>
                        duracion: ${EvaluacionesDisponibles[i].duracion}. <br>
                        profesional: ${EvaluacionesDisponibles[i].profesional}</p>
                        <a onclick=Evaluacion(${EvaluacionesDisponibles[i].id}) class="btn btn-primary">Tomar hora</a>
                        ${botonElim}
                    </div>
                </div>
            </div>
        
        
        `;}
    }

    function Evaluacion(id){
    let evalu;
    for(let i = 0; i <EvaluacionesDisponibles.length; i++){
        if (EvaluacionesDisponibles[i].id === id){
            evalu = EvaluacionesDisponibles[i];
        }
    }

    localStorage.setItem(
        "horario",
        JSON.stringify(evalu),
    );
    document.getElementById("Horario").innerHTML=``;
    empleads();
}