function Horarios(){
    
        let horario = document.getElementById("Horario");
        
        horario.innerHTML = `
                <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Consultas
                </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row" id="ListaConsulta"></div>    
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Planes
                </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row" id="ListaPlanes"></div>
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Evaluaciones
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row" id="ListaEvaluaciones"></div>
                    </div>
                </div>
            </div>


            <div class="accordion-item">
                <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Talleres Grupales
                </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <div class="row" id="TalleresGrupales"></div>
                    </div>
                </div>
            </div>

            
            </div>
            `;
            
        document.getElementById("Hora").innerHTML=``;
            
        consul();
        grupal();
        planes();
        evalua();
}
function empleads(){
    let profesion = document.getElementById("Empleados");

    profesion.innerHTML = `
    <div class="row" id="ListaTrabajadores"></div>
    `;

    emp();
}
function Principal(){

    window.location.href = "index.html";
    }

function Tomadas(){
    document.getElementById("Horario").innerHTML=``;
    
    let miHora = document.getElementById("Hora");

    

    miHora.innerHTML = `
                <div class="row">
    <div class="col-sm-6 mb-3 mb-sm-0">
        <div class="card">
        <div class="card-body">
            <h5 class="card-title"><p id="nombre"></p></h5>
            <p class="card-text"><p id="precio"></p>
                    <p id="descripcion"></p>
                    <p id="duracion"></p>
                    <p id="modalidad"></p></p>
            </div>
            </div>
        </div>
        <div class="col-sm-6">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title"><h2 id="nombreE"></h2></h5>
                <p class="card-text"><p id="especialidadE"></p>
                        <p id="dias_horarioE"></p>
                        <p id="horarioE"></p></p>
                <a onclick="cancelar()" class="btn btn-primary">Cancelar Hora</a>
            </div>
            </div>
        </div>
        </div>
    `;

     let horario = JSON.parse(
        localStorage.getItem("horario")
    );

    if (horario != null) {

        document.getElementById("nombre").textContent =
            horario.nombre;

        document.getElementById("descripcion").textContent =
            horario.descripcion;

        document.getElementById("precio").textContent =
            "Precio: $" + horario.precio;

        document.getElementById("duracion").textContent =
            horario.duracion;

        document.getElementById("modalidad").textContent =
            horario.modalidad;
    }

    let empleados = JSON.parse(
        localStorage.getItem("empleados")
    );

    if (empleados != null) {

        document.getElementById("nombreE").textContent =
            empleados.nombre;

        document.getElementById("especialidadE").textContent =
            empleados.especialidad;

        document.getElementById("dias_horarioE").textContent =
            empleados.dias_horario;

        document.getElementById("horarioE").textContent =
            empleados.horario;
    }
}
        
    

function cancelar(){
    localStorage.setItem(
        "horario",
        JSON.stringify(),
    );

    localStorage.setItem(
        "empleados",
        JSON.stringify(),
    );

    window.location.href = "index.html"
}


function eliminarEmpleado(id){

    for(let i = 0; i < Trabajadores.length; i++){

        if(Trabajadores[i].id === id){

            Trabajadores.splice(i, 1);

            break;
        }
    }

    document.getElementById("Empleados").innerHTML = `
        <div class="row" id="ListaTrabajadores"></div>
    `;

    emp();
}


function eliminarConsulta(id){

    for(let i = 0; i < consultasDisponibles.length; i++){

        if(consultasDisponibles[i].id === id){

            consultasDisponibles.splice(i, 1);

            break;
        }
    }

    Horarios();
}

    function eliminarEvaluacion(id){

    for(let i = 0; i < EvaluacionesDisponibles.length; i++){

        if(EvaluacionesDisponibles[i].id === id){

            EvaluacionesDisponibles.splice(i, 1);

            break;
        }
    }

    Horarios();

}

    function eliminarGrupo(id){

    for(let i = 0; i < TalleresGrupales.length; i++){

        if(TalleresGrupales[i].id === id){

            TalleresGrupales.splice(i, 1);

            break;
        }
    }

    Horarios();
}

    function eliminarPlan(id){

    for(let i = 0; i < planesDisponibles.length; i++){

        if(planesDisponibles[i].id === id){

            planesDisponibles.splice(i, 1);

            break;
        }
    }

    Horarios();

}
    function aniadir(arrai){
        document.getElementById("Horario").innerHTML = ` 
        <form class="row g-3">
  <div class="col-md-4">
    <label for="Nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="Nombre"  required>
  </div>

  <div class="col-md-4">
    <label for="Modalidad" class="form-label">Modalidad</label>
    <input type="text" class="form-control" id="Modalidad"  required>
  </div>

  <div class="col-md-4">
    <label for="Precio" class="form-label">Precio</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">$</span>
      <input type="text" class="form-control" id="Precio" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>

  <div class="col-md-6">
    <label for="Descripción" class="form-label">Descripción</label>
    <input type="text" class="form-control" id="Descripcion" required>
  </div>

  <div class="col-md-3">
    <label for="Duración" class="form-label">Duración</label>
    <input type="text" class="form-control" id="Duracion" required>
      

  </div>
  <div class="col-md-3">
    <label for="Profesional" class="form-label">Profesional</label>
    <input type="text" class="form-control" id="Profesional" required>
  </div>

  <div class="col-12">
    <button onclick="aniadiendo('${arrai}')" class="btn btn-primary" type="button">Agregar Horario</button>
  </div>
</form>
    }`; 
    }


        


    function aniadiendo(arrai){
        let nombre = document.getElementById("Nombre").value;
        let descripcion = document.getElementById("Descripcion").value;
        let duracion = document.getElementById("Duracion").value;
        let modalidad = document.getElementById("Modalidad").value;
        let profesional = document.getElementById("Profesional").value;
        let precio = document.getElementById("Precio").value;

        let horarios = {
            nombre: nombre,
            descripcion: descripcion,
            duracion: duracion,
            modalidad: modalidad,
            profesional: profesional,
            precio: precio
        };

        if(arrai == "consultasDisponibles"){
            horarios.id = consultasDisponibles.length + 1;
            consultasDisponibles.push(horarios);
        }

        if(arrai == "EvaluacionesDisponibles"){
            horarios.id = EvaluacionesDisponibles.length + 1;
            EvaluacionesDisponibles.push(horarios);
        }

        if(arrai == "TalleresGrupales"){
            horarios.id = TalleresGrupales.length + 1;
            TalleresGrupales.push(horarios);
        }

        if(arrai == "planesDisponibles"){
            horarios.id = planesDisponibles.length + 1;
            planesDisponibles.push(horarios);
        }

        document.getElementById("Horario").innerHTML = ``;
        Horarios();
    }

    function aniadirEmp(){
        document.getElementById("ListaTrabajadores").innerHTML = ` 
        <form class="row g-3">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="validationDefault01" value="Mark" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">horario</label>
    <input type="text" class="form-control" id="validationDefault02" value="Otto" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">dias_horario</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">especialidad</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-12">
    <button onclick="(aniadiendoEmp())"class="btn btn-primary" type="button">Guardar Empleado</button>
  </div>
</form>
`;       }
    function aniadiendoEmp(){
        let nombre = document.getElementById("validationDefault01").value;
        let especialidad = document.getElementById("validationDefault03").value;
        let dias_horario = document.getElementById("validationDefaultUsername").value;
        let horario = document.getElementById("validationDefault02").value;


        let empleados = {
            id: Trabajadores.length + 1,
            nombre: nombre,
            especialidad: especialidad,
            dias_horario: dias_horario,
            horario: horario,
        };

        Trabajadores.push(empleados);
        document.getElementById("ListaTrabajadores").innerHTML =``;
        Horarios();
    }
