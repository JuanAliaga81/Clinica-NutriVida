let consultasDisponibles = [
    {id: 1,
        nombre: "Primera consulta nutricional",
        descripcion: "Evaluación inicial: Anammnesis, antropometria completa y diseño del primer plan alimenticio.",
        duracion: "50 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 35000
    },
    {id: 2,
        nombre: "Control nutricional(Seguimiento)",
        descripcion: "Seguimiento mensual: Medición de indicadores y ajuste del plan vigente.",
        duracion: "30 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 25000
    },
    {id: 3,
        nombre: "Control nutricional quincenal",
        descripcion: "Seguimiento Intenso cada 15 dias. Recomendado en los primeros 2 meses.",
        duracion: "30 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 22000
    },
    {id: 4,
        nombre: "Teleconsulta nutricional.",
        descripcion: "Consulta de seguimiento via videollamada. Requiere contar con consulta presencial previa.",
        duracion: "30 minutos",
        modalidad: "Online(Video)",
        profesional: "Nutricionista",
        precio: 20000
    },
    {id: 5,
        nombre: "Consulta de urgencia / reagendada",
        descripcion: "Para pacientes que requieren atencion fuera de su control habitual",
        duracion: "30 minutos",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 28000
    }
];

let lista_Consultas = document.getElementById("ListaConsulta");

    for (let i = 0; i < consultasDisponibles.length; i++){
        lista_Consultas.innerHTML += `
        
        
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${consultasDisponibles[i].nombre}</h5>
                        <p class="card-text">${consultasDisponibles[i].descripcion} <br>
                        Modalidad: ${consultasDisponibles[i].modalidad}. <br> 
                        Precio: $${consultasDisponibles[i].precio}. <br>
                        duracion: ${consultasDisponibles[i].duracion}. <br>
                        profesional: ${consultasDisponibles[i].profesional}</p>
                        <a href="#" class="btn btn-primary">Tomar hora</a>
                    </div>
                </div>
            </div>
            
        
        `;
    }