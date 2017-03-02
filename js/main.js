function validateForm(){
	/* Escribe tú código aquí */
 var name = document.getElementById("name").value;
 var apell = document.getElementById("lastName")
 var password = document.getElementById("input-password").value;
 var bici = document.getElementById("opciones").value;
if((name != "" && apell  != "") && (password != "" && bici != "")){
  if(name.match(/[A-Z]{1,}[a-z]+/) == null){
    alert("nien");
  }
  if(password == "password" || password == "123456" || password == "098754"){
    alert("Valor de password invalido, por favor ingresar nuevo");
  }
  if(bici == "0"){
    alert("Por favor Ingresar valor de bici");
  }


}else{
  alert("Falta Ingresar Valores");
}

}
