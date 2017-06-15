<?php
class actuallyDate{

	//funcion que retorna el numero del dia de la semana actual para poder mostrar los dias restantes de la semana.
	public function getWeekDay(){
    	$actuallyDay = date("N");
    	return $actuallyDay;
	}	

	//retorna la cantidad de dias del mes, en caso de que sea año  bisiesto agrega un dia a febrero.
	

	public function getDay($day){
		switch ($day) {
			case '1':
				return "Lunes";
				break;
			case '2':
				return "Martes";
				break;
			case '3':
				return "Miercoles";
				break;
			case '4':
				return "Jueves";
				break;
			case '5':
				return "Viernes";
				break;
			case '6':
				return "Sabado";
				break;
			case '7':
				return "Domingo";
				break;
			
			default:
				# code...
				break;
		}
	}
	//consulta si el año pasado por parametro es bisiesto
	private function bisYear($year){
		if($year%4
		 == 0){
			if($year%100 == 0){
				if($year%400){
					return true;
				}
				return false;
			}
			return true;
		}

		return false;
	}
}
?>