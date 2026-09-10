let loginData = [
    {id: 1,
        email: "john@gmail.com",
        contrasena: "123",
        nombre: "john",
        apellido: "contreras",
        rut: "2132089-7",
        admin: "si"
    }
];

function loginBtn(){
    let entra = document.getElementById("btnLogin");
    document.getElementById("btnRegistro").innerHTML=``;


    entra.innerHTML = `<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3" placeholder="kirk@email.com">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3" placeholder="**********">
    </div>
  </div>

  <button onclick="Login()" type="button" class="btn btn-primary">Iniciar Sesion</button>
</form>`;
}


function regBtn(){
    let reg = document.getElementById("btnRegistro");
    document.getElementById("btnLogin").innerHTML=``;


    reg.innerHTML = `<form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" placeholder="kirk@email.com">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" placeholder="**********">
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre">
    </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="apellido">
    </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Rut</label>
    <input type="text" class="form-control" id="rut">
  </div>
    <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip">
    </div>
  <div class="col-12">
    <button onclick="Registro()" type="button" class="btn btn-primary">Registrarse</button>
  </div>
</form>`;
}



function Login(){

    let mail = document.getElementById("inputEmail3").value;
    let con = document.getElementById("inputPassword3").value;
    
    for(let i = 0; i < loginData.length; i++){

        if(loginData[i].email == mail &&
           loginData[i].contrasena == con){

            let usuario = {
                email: loginData[i].email,
                contrasena: loginData[i].contrasena
            };

            localStorage.setItem(
                "login",
                JSON.stringify(usuario)
            );

            window.location.href = "index.html";
        }
    }
}

function Registro(){
    
    let mail = document.getElementById("inputEmail4").value;
    let con = document.getElementById("inputPassword4").value;
    let nombre = document.getAnimations("nombre").value;
    let apellido = document.getAnimations("apellido").value;
    let rut = document.getAnimations("rut").value;

    let nuevoUsuario = {
        id: loginData.length + 1,
        email: mail,
        contrasena: con,
        nombre: nombre,
        apellido: apellido,
        rut: rut,

        admin: "no"
    };

    loginData.push(nuevoUsuario);
    
    loginBtn();
}