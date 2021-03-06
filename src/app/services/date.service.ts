import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class DateService {

	constructor() { }

	// Extrae y retorna la fecha actual con un formato correcto
	public actual_date():string{
		let date = new Date();
		let dd, mm, hh, m;
		let day = date.getDate(); 
		let month = (date.getMonth().valueOf() + 1); 
		let year = date.getFullYear();
		let hour = date.getHours(); 
		let min = date.getMinutes();

		if( day < 10 ) { dd = '0'+day;  } else{ dd = day; }
		if( month < 10 ) { mm = '0'+month;  } else{ mm = month; }
		if( hour < 10 ){ hh = '0'+hour; } else{ hh = hour; }
		if( min < 10 ) { m  = '0'+min;  } else{ m  = min; }

		return `${ mm }-${ dd }-${ year } ${hh}:${m}`;
	}

	// Extrae y retorna el día actual
	public actual_day():string{
		let date = new Date();
		let dd, mm;
		let day = date.getDate(); 
		let month = (date.getMonth().valueOf() + 1); 
		let year = date.getFullYear();
				
		if( day < 10 ) { dd = '0'+ day; } else{ dd = day; }
		if( month < 10 ) { mm = '0'+ month; } else{ mm = month; }

		return `${ mm }-${ dd }-${ year }`;
	}   

	// Extrae y retorna la hora actual
	public actual_hour():string{
		let date = new Date();
		let hh, m;
		let hour = date.getHours(); 
		let min = date.getMinutes();

		if( hour < 10 ){ hh = '0'+hour; } else{ hh = hour; }
		if( min < 10 ) { m  = '0'+min;  } else{ m  = min; }

		return `${hh}:${m}`;
	}
}