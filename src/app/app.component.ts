import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { GoogleBooksService } from './book-list/books.service';
import { AppState } from './store/app.state';
import { addBook, removeBook, retrievedBookList } from './store/books/books.actions';
import { selectBooks, selectBookCollection } from './store/books/books.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-ngrx';
  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}