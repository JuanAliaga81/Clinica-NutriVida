
let Trabajadores = [
    {id: 1,
        nombre: "Nut. Carolina Fuentes M. ",
        especialidad: "Obesidad y síndrome metabólico",
        dias_horario: "Lunes, Miércoles, Viernes",
        horario: "09:00 – 17:00"
    },
    {id: 2,
        nombre: "Nut. Rodrigo Sepúlveda A. ",
        especialidad: "Nutrición deportiva y rendimiento",
        dias_horario: "Martes, Jueves, Sábado",
        horario: "09:00 – 14:00"
    },
    {id: 3,
        nombre: "Nut. Daniela Morales C. ",
        especialidad: "Alimentación vegetariana, vegana y trastornos alimentarios",
        dias_horario: "Lunes a Viernes",
        horario: "08:00 – 13:00"
    },
    {id: 4,
        nombre: "Nut. Felipe Araya R. ",
        especialidad: "Nutrición pediátrica y familiar",
        dias_horario: "Martes a Viernes",
        horario: "14:00 – 19:00"
    }
];
    function emp(){
        let lista_trabajadores = document.getElementById("ListaTrabajadores");
        
            let login = JSON.parse(
                localStorage.getItem("login")
            );

            if(login != null && login.admin == "si"){
                lista_trabajadores.innerHTML += `<div class="col-12 mb-3">
                <button onclick="aniadirEmp()" class="btn btn-success">
                    Añadir Empleados
                </button>
            </div>`;
            }
            for (let i = 0; i < Trabajadores.length; i++){

                let botonElim = "";

            if(login != null && login.admin == "si"){
                botonElim = `
                    <button onclick="eliminarEmpleado(${Trabajadores[i].id})" class="btn btn-danger">
                        Eliminar Empleado
                    </button>
                `;
                }

                lista_trabajadores.innerHTML += `
                

                    <div class="col-sm-6 mb-3 mb-sm-0">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${Trabajadores[i].nombre}</h5>
                                <p class="card-text">Especialidad: ${Trabajadores[i].especialidad} <br>
                                    Horas: ${Trabajadores[i].dias_horario}(${Trabajadores[i].horario})</p>
                                <a onclick="Profesional(${Trabajadores[i].id})" class="btn btn-primary">Elegir especialista</a>
                                ${botonElim}
                            </div>
                        </div>
                    </div>
                    
                `;}
    }

function Profesional(id){
    let empleados;
    for(let i = 0; i <Trabajadores.length; i++){
        if (Trabajadores[i].id === id){
            empleados = Trabajadores[i];
        }
    }

    localStorage.setItem(
        "empleados",
        JSON.stringify(empleados),
    );
    
    document.getElementById("ListaTrabajadores").innerHTML=``;
    Tomadas();
}
