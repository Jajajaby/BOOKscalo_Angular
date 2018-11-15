import { Message } from '@angular/compiler/src/i18n/i18n_ast';
// Interface libro
export interface Books{
	author:						string;
	title:						string;
	editorial:				string;
	type:							string;
	categories:				Array<string>;
	language:					string;
	comment:					string;
	num_page:					number;
	original:					boolean;
	transaction:			string;
	user:							any;
	date:							any;
	id:								string;
	uid?:							string;
	price?:						number;
	images?:					Array<string>;
};

// Interface users
export interface Users{
	uid:							string;
	name:							string;
	rut:							string;
	last_name1:				string;
	last_name2:				string;
	email:						string;
	categories:				Array<string>;
	google:						boolean;
	status: 					boolean;
	role:							string;
	created_date: 		any;
	img?:							string;
	preferences?:			Array<string>;
	phone?:						string;
};

// Interface del mensaje para establecer la transacción
export interface Message{
	transaction:			string;
	pref: 						any;
	text:							Array<any>;
	date:							any;
	book:							any;
	user_owner:				any;
	uid_interested:		Users;
	status:						boolean;
	price?:						number;
};

// Interface de los reportes de imagenes y de usuario
export interface Report{
	id:								string;
	user:							any;
	day:							string;
	hour:							string;
	type:							string;
	status: 					string;
	img?:							any;
	user_reported?:		any;
};