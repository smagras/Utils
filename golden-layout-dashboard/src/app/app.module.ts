import {AppComponent} from './app.component';
import {ReduxService} from './shared/redux/redux.service';
import {AppState} from './core/state/state';


import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgReduxModule, NgRedux} from 'ng2-redux';

import {CoreService} from './core/core.service';
import {HeaderComponent} from './menu/header/header.component';
import {LayoutComponent} from './shared/layout/layout.component';
import {LayoutModule} from './shared/layout/layout.module';


@NgModule({
  declarations: [
    AppComponent, LayoutComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    LayoutModule
  ],
  providers: [ReduxService, CoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
