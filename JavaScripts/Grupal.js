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

let lista_Grupales = document.getElementById("TalleresGrupales");

    for (let i = 0; i < TalleresGrupales.length; i++){
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
                        <a href="#" class="btn btn-primary">Tomar hora</a>
                    </div>
                </div>
            </div>
        
        
        `;
    }