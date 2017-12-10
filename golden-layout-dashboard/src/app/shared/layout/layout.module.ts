import {LayoutCore} from '../../core/layout-core';
import {HeaderComponent} from '../../menu/header/header.component';
import {HeaderModule} from '../../menu/header/header.module';
import {Test1Component} from '../../test/test.component';
import {Test1Module} from '../../test/test1.module';
import {LayoutComponent} from './layout.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgReduxModule, NgRedux} from 'ng2-redux';

let modules = [
  BrowserModule,
  FormsModule,
  HttpModule,
  NgReduxModule,
  HeaderModule
];

modules = [...LayoutCore.modules];

let components = [];
for (let i = 0; i < LayoutCore.containers.length; i++) {
  components.push(LayoutCore.containers[i].component);
}

@NgModule({

  imports: modules,
  entryComponents: components
})
export class LayoutModule {}
