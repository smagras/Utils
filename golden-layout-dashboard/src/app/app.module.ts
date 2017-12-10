import { AppComponent } from './app.component';
import { ReduxService } from './redux/redux.service';
import { AppState } from './shared/state/state';
import { OpenContainerReducer } from './shared/state/reducers/open-container.reducer';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from 'ng2-redux';
import { Test1Component } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,Test1Component
  ],
  entryComponents:[
    Test1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [ReduxService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private reduxService : ReduxService) {

    reduxService.init(new AppState(),[
      new OpenContainerReducer()
    ]);


    

  }
}
