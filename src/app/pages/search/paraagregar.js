// Input desde el Search, traen el elemento a mostrar
	@Input() booksSearch:any[];
	@Input() authorsSearch:any[];
	@Input() categoriesSearch:any[];
	@Input() name:string;
	@Input() author:string;
	@Input() fav_genres:string;


setTimeout(() => {
			for (let b of this.books.values.name){
				if (this.name === b){
					this.loading = false;
					this.books = this.booksSearch;
				}else {
				let aux = [];

				for(let book of this.booksSearch){
					if( book.name ===  this.name ) aux.push(book);
				}
				this.loading = false;
				this.books = aux;
				}
			}
		}, 2000);