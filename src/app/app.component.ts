import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { AppState } from './store/app.state';
import { addBook, removeBook, retrievedBookList } from './store/books/books.actions';
import { selectBooks, selectBookCollection } from './store/books/books.selectors'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',       
})
export class AppComponent {
  title = 'angular-ngrx';

  constructor(
  ) {}

  ngOnInit() {}         
}
