import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from 'src/app/book-list/books.service';
import { retrievedBookList } from './books.actions';

@Injectable()
export class BooksEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Books Page] Load Books'),
    mergeMap(() => this.booksService.getBooks()
      .pipe(
        map(books => (retrievedBookList({ Book: books })),
        catchError(() => EMPTY)
      ))
    )
  ));

  constructor(
    private actions$: Actions,
    private booksService: GoogleBooksService,
  ) {}
}