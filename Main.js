function validar() {

    let nomeuser = document.getElementById("nome");
    let email = document.getElementById("email");
  

    if (nomeuser.value == "") {
    alert("Nome não foi informado");    
    nomeuser.focus();
    return;
    }

    if (email.value == "") {
        alert("E@mail não foi informado");
        email.focus();
        return;
    }
    

}


 
