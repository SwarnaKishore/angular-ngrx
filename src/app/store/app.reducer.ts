import { ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "../my-counter/counter.reducer";
import { AppState } from "./app.state";
import { booksReducer } from "./books/books.reducer";
import { collectionReducer } from "./collection.reducer";

export const appReducer: ActionReducerMap<AppState> = {
    count: counterReducer , 
    books: booksReducer, 
    collection: collectionReducer
}