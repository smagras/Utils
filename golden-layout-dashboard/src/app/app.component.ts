import {CoreService} from './core/core.service';
import {ReduxService} from './shared/redux/redux.service';
import {AppState} from './core/state/state';
import {
  Component, ViewContainerRef, OnInit, OnDestroy, ElementRef, ComponentRef,
  ComponentFactory, ComponentFactoryResolver
} from '@angular/core';

import {Test1Component} from './test/test.component';
import {NgRedux} from 'ng2-redux';

import {OpenContainerAction} from './core/action/open-container.action';
import {CloseContainerAction} from './core/action/close-container.action';
import {CoreLoadedAction} from './core/action/core-loaded.action';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private loaded: boolean = false;

  constructor(private coreService: CoreService, private reduxService: ReduxService) {
    this.coreService.init();
  }

  ngOnInit() {

    this.reduxService.subscribe(CoreLoadedAction, function(state: AppState) {
      this.loaded = true;
    }.bind(this));

    this.coreService.loading();

  }


}
