// Interface libro
export interface Books{
	author:				string;
	title:				string;
	editorial:		string;
	type:					string;
	categories:		Array<string>;
	language:			string;
	comment:			string;
	num_page:			number;
	original:			boolean;
	transaction:	string;
	user:					any;
	date:					any;
	id:						string;
	uid?:					string;
	price?:				number;
	images?:			Array<string>;
};

// Interface users
export interface Users{
	uid:					string;
	name:					string;
	rut:					string;
	last_name1:		string;
	last_name2:		string;
	email:				string;
	categories:		Array<string>;
	google:				boolean;
	status: 			boolean;
	role:					string;
	created_date: any;
	img?:					string;
	preferences?:	Array<string>;
	phone?:				string;
};

export interface Predet_Message{
	transaction:			string;
	pref: 						any;
	text:							string;
	date:							any;
	book:							any;
	user_owner:				any;
	uid_interested:		Users;
	status:						boolean;
	price?:						number;
};