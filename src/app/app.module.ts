import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
// import { counterReducer } from './my-counter/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { BookListComponent } from './book-list/book-list.component';
// import { booksReducer } from './store/books.reducer';
// import { collectionReducer } from './store/collection.reducer';
import { appReducer } from './store/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BooksComponent } from './books/books.component';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent, MyCounterComponent, BookListComponent, BookCollectionComponent, BooksComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(appReducer),
    AppRoutingModule,
    HttpClientModule
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
