let Trabajadores = [
    {id: 1,
        nombre: "",
        especialidad: "",
        dias_horario: "",
        horario: ""
    },
    {id: 2,
        nombre: "",
        especialidad: "",
        dias_horario: "",
        horario: ""
    },
    {id: 3,
        nombre: "",
        especialidad: "",
        dias_horario: "",
        horario: ""
    },
    {id: 4,
        nombre: "",
        especialidad: "",
        dias_horario: "",
        horario: ""
    }
];

let lista_trabajadores = document.getElementById("trabajadores");

    for (let i = 0; i < consultasDisponibles.length; i++){
        lista_trabajadores.innerHTML += `
        
        
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${Trabajadores[i].nombre}</h5>
                        <p class="card-text">${infoinfo} <br> ${masinfomasinfo}</p>
                        <a href="#" class="btn btn-primary">Tomar hora</a>
                    </div>
                </div>
            </div>
            
        
        `;
    }