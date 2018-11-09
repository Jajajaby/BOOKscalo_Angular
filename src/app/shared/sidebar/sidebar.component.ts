import { Component, OnInit } from '@angular/core';

// SERVICES
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  books:any;

  // TODO: FIXME: hay que crear estas datas en archivos aparte para mantener el orden.
  categories:Array<string>=["Antiguedades y Coleccionables", "Arquitectura", "Arte", "Artes Escénicas", "Biografía y Autobiografía", "Casa y Hogar", "Ciencia", "Ciencias Políticas", "Ciencias Sociales", "Cocina", "Comida y Bebestibles", "Colecciones Literarias", "Cómics y Novelas Gráficas", "Computación e Internet", "Crímenes", "Crítica Literaria", "Cuerpo", "Mente y Espíritu", "Deportes y Recreación", "Drama", "Educación", "Estudio de Lenguas Extranjeras", "Ensayos Académicos", "Familia y Relaciones", "Ficción", "Ficción Adolescente", "Ficción para Niños", "Filosofía", "Fotografía", "Historia y Geografía", "Humor", "Jardinería", "Juegos", "Lectura escolar", "Lengua y Literatura", "Leyes", "Manualidades y Hobbies", "Mascotas y Animales", "Matemáticas", "Medicina", "Música", "Naturaleza y Aire libre", "Negocios y Economía", "Niños y Jóvenes", "Papelería", "Poesía", "Psicología", "Religión y Espiritualidad", "Salud y Bienestar", "Tecnología", "Transporte", "Viajes"];

  constructor( private _dbService: DatabaseService ) { }

  ngOnInit() {
    this._dbService.getData('books')
		  .valueChanges()
			.subscribe( data => this.books = data );
  }

  // Busca los libros según el search, que es la categoría.
  searchCategory( search:string ){
    let searchCategories = [];
    
    for(let book of this.books){
      let categories = book.genres;
      let flag = false; // con esto valido que se agregue solo 1 vez el mismo libro

      for( let category of categories ){
        let cat = category.toLowerCase();
        if( cat.indexOf(search.toLowerCase()) >= 0 && !flag ) {
          flag = true;
          searchCategories.push(book);
        }
      }
      console.log(searchCategories);
      return searchCategories;
    }
  }

}
