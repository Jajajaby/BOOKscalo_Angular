// Interface libro
export interface Books{
	author:			string;
	title:			string;
	editorial:		string;
	type:			string;
	genres:			Array<string>;
	language:		string;
	comment:		string;
	num_page:		number;
	original:		boolean;
	transaction:	string;
	user:			any;
	date:			any;
	id:				string;
	uid?:			string;
	price?:			number;
	images?:		Array<string>;
};

// Interface users
export interface Users{
	uid:			string;
	name:			string;
	rut:			string;
	last_name1:		string;
	last_name2:		string;
	email:			string;
	favs_genres:	Array<string>;
	google:			boolean;
	preferences?:	Array<string>;
	commune?:		string;
	phone?:			string;
	ranking?:		number;
};

export interface Predet_Message{
	transaction:		string;
	pref: 				any;
	text:				string;
	date:				any;
	book:				any;
	user_owner:			any;
	uid_interested:		Users;
	status:				boolean;
	price?:				number;
};