function validateForm(){
	/* Escribe tú código aquí */
  var password = document.getElementById("input-password").value;
  var bici = document.getElementById("opciones").value;

  if(password == "password" || password == "123456" || password == "098754"){
    alert("Valor de password invalido, por favor ingresar nuevo");
  }
  if(bici == "0"){
    alert("Por favor Ingresar valor de bici");
  }

}
