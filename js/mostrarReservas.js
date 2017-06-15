//Claudio Loyola Perez
//consulta de reservas
var respuestaGlobal
var seleccionDiaCont
function mostrarDiaActual(){
	var i = 0;
	$.ajax({
		type:'POST',
		url: 'reservas.php',
		data: ('anio=' + anio + '&mesCont=' + mesCont + '&diaCont=' + diaCont),
		success:function(respuesta){
			while(i < 14){
				if(respuesta.charCodeAt(i) == 48){
					document.getElementById("bloque" + (i + 1)).innerHTML = "Disponible";
					document.getElementById("bloque" + (i + 1)).style.color = "black";
				}
				else if(respuesta.charCodeAt(i) == 49){
					document.getElementById("bloque" + (i + 1)).innerHTML = "Por confirmar";
					document.getElementById("bloque" + (i + 1)).style.color = "#3469D3";
				}
				else{
					document.getElementById("bloque" + (i + 1)).innerHTML = "No disponible";
					document.getElementById("bloque" + (i + 1)).style.color = "#FF4C4C";
				}
				i++;
			}
			respuestaGlobal = respuesta;
		}
	})
}
function seleccionDia(){
	var i = 0;
	var bool = false;
	if(mesCont == fecha.getMonth() + 1){
		while(bool == false){
			if(dia[i] == diaCont){
				document.getElementById("dia" + (i+1)).style.background = "#C8C8C8";
				seleccionDiaCont = i;
				bool = true;
			}
			else{
				i++;
			}
		}
	}
}
function seleccionDia2(){
	document.getElementById("dia" + (seleccionDiaCont + 1)).style.background = "#FFFFFF";
	document.getElementById("dia" + h).style.background = "#C8C8C8";
}
function dia1(){
	if(dia[0] > fecha.getDate() && dia[0] != "" || mesCont > fecha.getMonth() + 1 && dia[0] != "" || anio > fecha.getFullYear() && dia[0] != ""){
		diaCont = dia[0];
		h = 1;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 0;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia2(){
	if(dia[1] > fecha.getDate() && dia[1] != "" || mesCont > fecha.getMonth() + 1 && dia[1] != "" || anio > fecha.getFullYear() && dia[1] != ""){
		diaCont = dia[1];
		h = 2;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 1;	
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia3(){
	if(dia[2] > fecha.getDate() && dia[2] != "" || mesCont > fecha.getMonth() + 1 && dia[2] != "" || anio > fecha.getFullYear() && dia[2] != ""){
		diaCont = dia[2];
		h = 3;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 2;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia4(){
	if(dia[3] > fecha.getDate() && dia[3] != "" || mesCont > fecha.getMonth() + 1 && dia[3] != "" || anio > fecha.getFullYear() && dia[3] != ""){
		diaCont = dia[3];
		h = 4;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 3;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia5(){
	if(dia[4] > fecha.getDate() && dia[4] != "" || mesCont > fecha.getMonth() + 1 && dia[4] != "" || anio > fecha.getFullYear() && dia[4] != ""){
		diaCont = dia[4];
		h = 5;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 4;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia6(){
	if(dia[5] > fecha.getDate() && dia[5] != "" || mesCont > fecha.getMonth() + 1 && dia[5] != "" || anio > fecha.getFullYear() && dia[5] != ""){
		diaCont = dia[5];
		h = 6;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 5;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia7(){
	if(dia[6] > fecha.getDate() && dia[6] != "" || mesCont > fecha.getMonth() + 1 && dia[6] != "" || anio > fecha.getFullYear() && dia[6] != ""){
		diaCont = dia[6];
		h = 7;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 6;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia8(){
	if(dia[7] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[7];
		h = 8;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 7;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia9(){
	if(dia[8] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[8];
		h = 9;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 8;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia10(){
	if(dia[9] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[9];
		h = 10;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 9;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia11(){
	if(dia[10] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[10];
		h = 11;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 10;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia12(){
	if(dia[11] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[11];
		h = 12;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 11;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia13(){
	if(dia[12] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[12];
		h = 13;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 12;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia14(){
	if(dia[13] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[13];
		h = 14;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 13;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia15(){
	if(dia[14] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[14];
		h = 15;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 14;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia16(){
	if(dia[15] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[15];
		h = 16;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 15;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia17(){
	if(dia[16] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[16];
		h = 17;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 16;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia18(){
	if(dia[17] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[17];
		h = 18;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 17;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia19(){
	if(dia[18] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[18];
		h = 19;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 18;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia20(){
	if(dia[19] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[19];
		h = 20;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 19;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia21(){
	if(dia[20] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[20];
		h = 21;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 20;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia22(){
	if(dia[21] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[21];
		h = 22;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 21;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia23(){
	if(dia[22] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[22];
		h = 23;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 22;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia24(){
	if(dia[23] > fecha.getDate() || mesCont > fecha.getMonth() + 1 || anio > fecha.getFullYear()){
		diaCont = dia[23];
		h = 24;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 23;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia25(){
	if(dia[24] > fecha.getDate() && dia[24] >14 || mesCont > fecha.getMonth() + 1 && dia[24] >13 || anio > fecha.getFullYear() && dia[24] >13){
		diaCont = dia[24];
		h = 25;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 24;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia26(){
	if(dia[25] > fecha.getDate() && dia[25] >14 || mesCont > fecha.getMonth() + 1 && dia[25] >13 || anio > fecha.getFullYear() && dia[25] >13){
		diaCont = dia[25];
		h = 26;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 25;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia27(){
	if(dia[26] > fecha.getDate() && dia[26] >14 || mesCont > fecha.getMonth() + 1 && dia[26] >13 || anio > fecha.getFullYear() && dia[26] >13){
		diaCont = dia[26];
		h = 27;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 26;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia28(){
	if(dia[27] > fecha.getDate() && dia[27] >14 || mesCont > fecha.getMonth() + 1 && dia[27] >14 || anio > fecha.getFullYear() && dia[27] >14){
		diaCont = dia[27];
		h = 28;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 27;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia29(){
	if(dia[28] > fecha.getDate() && dia[28] >14 || mesCont > fecha.getMonth() + 1 && dia[28] >14 || anio > fecha.getFullYear() && dia[28] >14){
		diaCont = dia[28];
		h = 29;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 28;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia30(){
	if(dia[29] > fecha.getDate() && dia[29] >14 || mesCont > fecha.getMonth() + 1 && dia[29] >14 || anio > fecha.getFullYear() && dia[29] >14){
		diaCont = dia[29];
		h = 30;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 29;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia31(){
	if(dia[30] > fecha.getDate() && dia[30] >14 || mesCont > fecha.getMonth() + 1 && dia[30] >14 || anio > fecha.getFullYear() && dia[30] >14){
		diaCont = dia[30];
		h = 31;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 30;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia32(){
	if(dia[31] > fecha.getDate() && dia[31] >14 || mesCont > fecha.getMonth() + 1 && dia[31] >14 || anio > fecha.getFullYear() && dia[31] >14){
		diaCont = dia[31];
		h = 32;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 31;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia33(){
	if(dia[32] > fecha.getDate() && dia[32] >14 || mesCont > fecha.getMonth() + 1 && dia[32] >14 || anio > fecha.getFullYear() && dia[32] >14){
		diaCont = dia[32];
		h = 33;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 32;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia34(){
	if(dia[33] > fecha.getDate() && dia[33] >14 || mesCont > fecha.getMonth() + 1 && dia[33] >14 || anio > fecha.getFullYear() && dia[33] >14){
		diaCont = dia[33];
		h = 34;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 33;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia35(){
	if(dia[34] > fecha.getDate() && dia[34] >14 || mesCont > fecha.getMonth() + 1 && dia[34] >14 || anio > fecha.getFullYear() && dia[34] >14){
		diaCont = dia[34];
		h = 35;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 34;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia36(){
	if(dia[35] > fecha.getDate() && dia[35] >14 || mesCont > fecha.getMonth() + 1 && dia[35] >14 || anio > fecha.getFullYear() && dia[35] >14){
		diaCont = dia[35];
		h = 36;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 35;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia37(){
	if(dia[36] > fecha.getDate() && dia[36] >14 || mesCont > fecha.getMonth() + 1 && dia[36] >14 || anio > fecha.getFullYear() && dia[36] >14){
		diaCont = dia[36];
		h = 37;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 36;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia38(){
	if(dia[37] > fecha.getDate() && dia[37] >14 || mesCont > fecha.getMonth() + 1 && dia[37] >14 || anio > fecha.getFullYear() && dia[37] >14){
		diaCont = dia[37];
		h = 38;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 37;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia39(){
	if(dia[38] > fecha.getDate() && dia[38] >14 || mesCont > fecha.getMonth() + 1 && dia[38] >14 || anio > fecha.getFullYear() && dia[38] >14){
		diaCont = dia[38];
		h = 39;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 38;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia40(){
	if(dia[39] > fecha.getDate() && dia[39] >14 || mesCont > fecha.getMonth() + 1 && dia[39] >14 || anio > fecha.getFullYear() && dia[39] >14){
		diaCont = dia[39];
		h = 40;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 39;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia41(){
	if(dia[40] > fecha.getDate() && dia[40] >14 || mesCont > fecha.getMonth() + 1 && dia[40] >14 || anio > fecha.getFullYear() && dia[40] >14){
		diaCont = dia[40];
		h = 41;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 40;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}
function dia42(){
	if(dia[41] > fecha.getDate() && dia[41] >14 || mesCont > fecha.getMonth() + 1 && dia[41] >14 || anio > fecha.getFullYear() && dia[41] >14){
		diaCont = dia[41];
		h = 42;
		seleccionDia2();
		mostrarDiaActual();
		llenarFechaReservas();
		seleccionDiaCont = 41;
	}
	else{
		alert("No puedes Seleccionar este dia.");
	}
}






































