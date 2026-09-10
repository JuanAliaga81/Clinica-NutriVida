let planesDisponibles = [
    {id: 1,
        nombre: "Plan pérdida de peso",
        descripcion: "Incluye primera consulta +1 control quincenal + plan alimenticio personalizado + seguimiento por WhatsApp.",
        duracion: "1 mes",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 65000
    },
    {id: 2,
        nombre: "Plan Pérdida de peso",
        descripcion: "Incluye primera consulta +5 controles + 3 planes mensuales + seguimiento continuo.",
        duracion: "3 meses",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 170000
    },
    {id: 3,
        nombre: "Plan nutrición deportiva",
        descripcion: "Para deportistas y personas con actividad fisica frecuente. Cálculo de requerimientos energéticos y proteicos.",
        duracion: "1 mes",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 70000
    },
    {id: 4,
        nombre: "Plan control diabetes / hipertensión",
        descripcion: "Plan adaptado para patologías metabólicas. Coordinación con médico tratante si aplica.",
        duracion: "Dependiente",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 75000
    },
    {id: 5,
        nombre: "Plan alimentación vegetariana / vegana",
        descripcion: "Diseñado para garantizar aporte adecuado de proteínas, hierro, vitamina B12 y calcio sin productos animales.",
        duracion: "Dependiente",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 68000
    },
    {id: 6,
        nombre: "Plan alimentación Infantil",
        descripcion: "Evaluación nutricional pediátrica y diseño de plan adaptado a la etapa de desarrollo del niño.",
        duracion: "2-12 años",
        modalidad: "Presencial",
        profesional: "Nutricionista",
        precio: 65000
    }
];

function planes(){
    let lista_Planes = document.getElementById("ListaPlanes");

    let login = JSON.parse(
                localStorage.getItem("login")
            );

            if(login != null && login.admin == "si"){
                lista_Planes.innerHTML += `<div class="col-12 mb-3">
                <button onclick="aniadir('planesDisponibles')" class="btn btn-success">
                    Añadir Planes
                </button>
            </div>`;
            }

    for (let i = 0; i < planesDisponibles.length; i++){

        let botonElim = "";

            if(login != null && login.admin == "si"){
                botonElim = `
                    <button onclick="eliminarPlan(${planesDisponibles[i].id})" class="btn btn-danger">
                        Eliminar Empleado
                    </button>
                `;
                }

        lista_Planes.innerHTML += `
        
        
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${planesDisponibles[i].nombre}</h5>
                        <p class="card-text">${planesDisponibles[i].descripcion} <br>
                        Modalidad: ${planesDisponibles[i].modalidad}. <br> 
                        Precio: $${planesDisponibles[i].precio}. <br>
                        duracion: ${planesDisponibles[i].duracion}. <br>
                        profesional: ${planesDisponibles[i].profesional}</p>
                        <a onclick=Plan(${planesDisponibles[i].id}) class="btn btn-primary">Tomar hora</a>
                        ${botonElim}
                    </div>
                </div>
            </div>
        
        
        `;}
    }

function Plan(id){
    let planes;
    for(let i = 0; i <planesDisponibles.length; i++){
        if (planesDisponibles[i].id === id){
            planes = planesDisponibles[i];
        }
    }

    localStorage.setItem(
        "horario",
        JSON.stringify(planes),
    );
    document.getElementById("Horario").innerHTML=``;
    empleads();
}

