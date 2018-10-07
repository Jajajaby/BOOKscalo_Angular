import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Angularfire2
import { AngularFireAuth } from 'angularfire2/auth';

// Plugins
import swal from 'sweetalert';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor( private router:Router, private auth: AngularFireAuth) { }

  ngOnInit() {
  }

  searchBook( input:string ){
  	// console.log(input);
  	this.router.navigate( ['/search', input] );
  }

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
      })
      .catch( ()=> swal('Error al cerrar sesión', 'Vuelva a intentarlo', 'error') );
  }

}
