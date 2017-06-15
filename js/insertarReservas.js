var bloqueSeleccionado
function seleccionBloque(){
	var seleccion;
	var bool = false;
	var i=1;
	while(bool == false){
		seleccion = document.getElementById(i);
		if(seleccion.checked){
			bool=true;
			bloqueSeleccionado = i;
		}
		else{
			i++;
		}
	}
}
function comprobarReserva(){
	seleccionBloque();
	if(respuestaGlobal[bloqueSeleccionado - 1] == '0'){
				document.getElementById("ocultarReservas").style.display = "none";
				document.getElementById("comprobarReserva2").style.display = "block";
	}
}
function realizarReserva(){
	var comprobarUsuario = document.form.comprobarUsuario.value;
	var comprobarPw = document.form.comprobarPw.value;
	var bloqueSeleccion = bloqueSeleccionado; 
	$.ajax({
			type:'POST',
			url:'comprobarReserva.php',
			data: ('comprobarUsuario=' + comprobarUsuario + '&comprobarPw=' + comprobarPw + '&bloqueSeleccion=' + bloqueSeleccion),
			success:function(respuesta2){
				if(respuesta2 == 1){
					document.getElementById("comprobarReserva2").style.display = "none";
					document.getElementById("reservaCompleta").innerHTML= "Reserva Realizada con éxito";
					document.getElementById("reservaCompleta").style.display = "block";
				}
				else{
					document.getElementById("comprobarReserva2").style.display = "none";
					document.getElementById("reservaCompleta").innerHTML= respuesta2;
					document.getElementById("reservaCompleta").style.display = "block";
				}
			}
	})
}