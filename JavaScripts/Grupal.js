let TalleresGrupales = [
    {id: 1,
        nombre: "Taller de alimentación saludable",
        descripcion: "Máx. 10 personas. Conceptos básicos de alimentación equilibrada y lectura de etiquetas.",
        duracion: "90 minutos",
        modalidad: "Presencial(Grupo)",
        profesional: "Nutricionista",
        precio: 15000
    },
    {id: 2,
        nombre: "Taller de cocina nutritiva",
        descripcion: "Preparación de recetas saludables. Incluye degustación. Máx 8 personas.",
        duracion: "120 minutos",
        modalidad: "Presencial(Grupo)",
        profesional: "Nutricionista",
        precio: 20000
    },
    {id: 3,
        nombre: "Taller nutrición para deportistas",
        descripcion: "Hidratación, nutricion pre y post entrenamiento, suplementación básica. Máx 12 personas.",
        duracion: "90 minutos",
        modalidad: "Presencial(Grupo)",
        profesional: "Nutricionista",
        precio: 18000
    }
];
    function grupal(){
    let lista_Grupales = document.getElementById("TalleresGrupales");

    let login = JSON.parse(
                localStorage.getItem("login")
            );

            if(login != null && login.admin == "si"){
                lista_Grupales.innerHTML += `<div class="col-12 mb-3">
                <button onclick="aniadir('TalleresGrupales')" class="btn btn-success">
                    Añadir Grupos
                </button>
            </div>`;
            }

    for (let i = 0; i < TalleresGrupales.length; i++){

        let botonElim = "";

            if(login != null && login.admin == "si"){
                botonElim = `
                    <button onclick="eliminarGrupo(${TalleresGrupales[i].id})" class="btn btn-danger">
                        Eliminar Empleado
                    </button>
                `;
                }

        lista_Grupales.innerHTML += `
        
            <div class="col-sm-6 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${TalleresGrupales[i].nombre}</h5>
                        <p class="card-text">${TalleresGrupales[i].descripcion} <br>
                        Modalidad: ${TalleresGrupales[i].modalidad}. <br> 
                        Precio: $${TalleresGrupales[i].precio}. <br>
                        duracion: ${TalleresGrupales[i].duracion}. <br>
                        profesional: ${TalleresGrupales[i].profesional}</p>
                        <a onclick=Grupales(${TalleresGrupales[i].id}) class="btn btn-primary">Tomar hora</a>
                        ${botonElim}
                    </div>
                </div>
            </div>
        
        `;
    }
}

function Grupales(id){
    let grupos;
    for(let i = 0; i <TalleresGrupales.length; i++){
        if (TalleresGrupales[i].id === id){
            grupos = TalleresGrupales[i];
        }
    }

    localStorage.setItem(
        "horario",
        JSON.stringify(grupos),
    );
    document.getElementById("Horario").innerHTML=``;
    empleads();
}