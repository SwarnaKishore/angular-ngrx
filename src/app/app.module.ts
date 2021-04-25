import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './my-counter/counter.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
// import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent, MyCounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    AppRoutingModule,
    // StoreModule.forRoot(reducers, {
    //   metaReducers
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
