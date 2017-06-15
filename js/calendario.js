//Claudio Alejandro Loyola Perez
var date 
var month
var day
var mesInicio = new Array(12)
var mesDuracion = new Array(12)
var day_of_month = new Array(42);
var calendar_start = 2017;
var calendar_button = -1; //sabemos que no se han clickeado los botenes next back del calendario
date = new Date();
month = date.getMonth()+1;
year = date.getFullYear();
day = date.getDate();
mesInicio = [7, 3, 3, 6, 1, 4, 6, 2, 5, 7, 3, 5];
mesDuracion = [31, 28, 31, 30 , 31, 30, 31, 31, 30, 31, 30, 31];

//arreglar el llenado de enero en la variable mesinicio en la funcion next year

function anioBisiesto(year_local){
    if(year_local%4==0){
        if(year_local%100==0){
            if(year_local%400==0){
                return true;
            }
        }
        else{
            return true;
        }
    }
    return false;
}
//funcion que se llama al cargar la pagina para mostrar el calendario
//inicio calendario es en 2017
year = 2021;
function load_calendar(){
	write_calendar(year);	
}
//escribe los dias en la tabla html
function write_calendar(this_year){
	load_month(month);
	var dif; //calcula los dias que tienen que avanzar los primeros de cada mes
	dif = this_year - calendar_start;
	if(anioBisiesto(this_year) == true){
		mesDuracion[1] = 29;
	}
	else{
		mesDuracion[1] = 28;
	}
	for(var temp = 0; temp < 12; temp++){//en caso que el año inicial sea distinto de 2017 arregla automaticamente los primeros dias de cada mes
		mesInicio[temp] = mesInicio[temp] + dif;
		if(mesInicio[temp] > 7){
			mesInicio[temp] = mesInicio[temp]%7;
		}
	}
	if(anioBisiesto(this_year - 1) && this_year != 2017){
		for(var temp = 0; temp < 12; temp++){
			mesInicio[temp] = mesInicio[temp] + 1;
			if(mesInicio[temp] > 7){
				mesInicio[temp] = mesInicio[temp]%7;
			}
		}
	}
	for(var temp = 1; temp < 42; temp++){
		if(temp < mesInicio[month - 1]){
			//muestra el resto de dias del mes anterior
			document.getElementById(temp - 1).innerHTML= (mesDuracion[month -2] - mesInicio[month - 1]) + temp + 1;
		}
	}
}

function write_next_month(){//escribe en el calendario los dias correspondiente al mes
	load_month(month);
	for(var temp = 1; temp < 42; temp++){
		if(temp < mesInicio[month - 1]){
			//muestra el resto de dias del mes anterior
			document.getElementById(temp - 1).innerHTML= (mesDuracion[month -2] - mesInicio[month - 1]) + temp + 1;
		}
		else{
			document.getElementById(temp - 1).innerHTML= "";
		}
	}
}

function next_year(bool){//actualiza el array mesInicio
	if(bool == true){//next year
		if(anioBisiesto(year)){
			mesDuracion[1] = 29;
			for(var temp = 0; temp < 12; temp++){
				mesInicio[temp] = mesInicio[temp] + 1;
				if(mesInicio[temp] > 7){
					mesInicio[temp] = mesInicio[temp]%7;
				}
				if(temp == 2){
					mesInicio[temp]++;
				}
			}
		}
		else if(anioBisiesto(year - 1)){
			mesDuracion[1] = 28;
			for(var temp = 0; temp < 12; temp++){
				mesInicio[temp] = mesInicio[temp] + 2;
				if(mesInicio[temp] > 7){
					mesInicio[temp] = mesInicio[temp]%7;
				}
			}
		}
		else{
			mesDuracion[1] = 28;
			for(var temp = 0; temp < 12; temp++){
				mesInicio[temp] = mesInicio[temp] + 1;
				if(mesInicio[temp] > 7){
					mesInicio[temp] = mesInicio[temp]%7;
				}
			}
		}
	}
	else if(bool == false){//back year
		if(anioBisiesto(year)){
			mesDuracion[1] = 29;
			for(var temp = 0; temp < 12; temp++){
				mesInicio[temp] = mesInicio[temp] - 1;
				if(mesInicio[temp] > 7){
					mesInicio[temp] = mesInicio[temp]%7;
				}
				if(temp == 2){
					mesInicio[temp]++;
				}
			}
		}
		else if(anioBisiesto(year - 1)){
			mesDuracion[1] = 28;
			for(var temp = 0; temp < 12; temp++){
				mesInicio[temp] = mesInicio[temp] - 2;
				if(mesInicio[temp] > 7){
					mesInicio[temp] = mesInicio[temp]%7;
				}
			}
		}
		else{
			mesDuracion[1] = 28;
			for(var temp = 0; temp < 12; temp++){
				mesInicio[temp] = mesInicio[temp] - 1;
				if(mesInicio[temp] > 7){
					mesInicio[temp] = mesInicio[temp]%7;
				}
			}
		}
	}
}

function next_month(clicked){
	if(clicked == "true"){//next month
		month++;
		if(month == 13){
			month = 1;
			year++;
			next_year(true);
		}
		else{
			write_next_month();
		}
	}
	else if(clicked == "false"){//back month
		month--;
		if(month == 0){
			month = 12;
			year--;
			next_year(false);
		}
		else{
			write_next_month();
		}
	}
}

//funcion traduce el numero del mes al nombre y lo retorna
function load_month(month){
	var temp;
	switch(month){
		case 1:
			temp = "Enero";
		break;
		case 2:
			temp = "Febrero";
		break;
		case 3:
			temp = "Marzo";
		break;
		case 4:
			temp = "Abril";
		break;
		case 5:
			temp = "Mayo";
		break;
		case 6:
			temp = "Junio";
		break;
		case 7:
			temp = "Julio";
		break;
		case 8:
			temp = "Agosto";
		break;
		case 9:
			temp = "Septiembre";
		break;
		case 10:
			temp = "Octubre";
		break;
		case 11:
			temp = "Noviembre";
		break;
		case 12:
			temp = "Diciembre";
		break;
	}
	document.getElementById("month").innerHTML= temp + " - " + year;
}

//se llama la funcion y el id se pasa por parametro
function day_selection(clicked_id){

	alert(clicked_id);
	
}