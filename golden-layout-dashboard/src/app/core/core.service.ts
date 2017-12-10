import {Injectable} from '@angular/core';

import {ReduxService} from '../shared/redux/redux.service';
import {CloseContainerAction} from './action/close-container.action';
import {CoreLoadedAction} from './action/core-loaded.action';
import {AppState} from './state/state';


import {OpenContainerAction} from './action/open-container.action';
import {OpenContainerReducer} from './reducer/close-container.reducer';
import {CloseContainerReducer} from './reducer/open-container.reducer';

@Injectable()
export class CoreService {

  constructor(private reduxService: ReduxService) {}

  /**
   * Action and Reducer binding
   */
  init() {

    // Init State
    this.reduxService.init(new AppState());

    // Binding Reducer
    this.reduxService.addReducer(OpenContainerAction, new OpenContainerReducer());
    this.reduxService.addReducer(CloseContainerAction, new CloseContainerReducer());

  }

  /**
   * This method is call before rendering layout
   */
  loading() {

    // TODO All preloading here...
    setTimeout(function() {
      this.reduxService.sendAction(new CoreLoadedAction());
    }.bind(this), 200);


  }



}
