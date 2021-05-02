import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GoogleBooksService } from '../book-list/books.service';
import { AppState } from '../store/app.state';
import { addBook, removeBook, retrievedBookList } from '../store/books/books.actions';
import { selectBooks, selectBookCollection } from '../store/books/books.selectors';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  bookCollection$ = this.store.pipe(select(selectBookCollection));

  onAdd(bookId) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    // private booksService: GoogleBooksService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    this.store.dispatch({ type: '[Books Page] Load Books' });
    // this.booksService
    //   .getBooks()
    //   .subscribe((Book) => this.store.dispatch(retrievedBookList({ Book })));
  }
}
