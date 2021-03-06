import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

// ANGULARFIRE2
import { AngularFireAuth } from 'angularfire2/auth';

// SERVICE
import { DatabaseService } from "../../services/database.service";

// PLUGINS
import swal from 'sweetalert';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	profile:any;
	loading:boolean = true;

	constructor( 	private router:Router, 
					private auth: AngularFireAuth,
					private _dbService:DatabaseService ) {
		let actual_user = JSON.parse( localStorage.getItem( "user" ) );
		  
		this._dbService.getDataQuery( "users", "uid", "==", actual_user.uid)
			.snapshotChanges()
			.pipe(
				map(actions => actions.map(a => {
					const data = a.payload.doc.data();
					const key = a.payload.doc.id;
					return { key, ...data };
				}))
			).subscribe( data => {
				this.profile = [];
				this.profile = data[0];
				this.loading = false;
			});
	}

	ngOnInit() {
		this.resetProfile();
	}

  // Busca un libro según el texto de entrada
	searchBook( input:string ){
		this.router.navigate(['/search', input]);
	}

  // Cierra la sesión del usuario actual
	logout(){
		this.auth.auth.signOut()
			.then( () => {
				localStorage.removeItem('user');

				let rememberMe = JSON.parse(localStorage.getItem('session')).rememberMe;
				localStorage.setItem('session', JSON.stringify({
					session: false,
					rememberMe: rememberMe
				}));

				swal('Adiós', 'Vuelva pronto', 'success');
				this.router.navigate(['/login']);
			})
			.catch( ()=> swal('Error al cerrar sesión', 'Vuelva a intentarlo', 'error') );
  }
  
  resetProfile(){
    this.profile =  {
			uid: 			    '', 
			rut: 			    '', 
			name: 		   	'', 
			last_name1: 	'', 
			last_name2: 	'', 
			email: 		  	[], 
			phone: 		  	'', 
			ranking: 	  	0,
			favs_genres:	[], 
			commune: 	  	''
		};
  }

}
