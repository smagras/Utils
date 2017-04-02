import { ACTIONS } from './actions';
import { IAppState } from './state';
import { Injectable } from '@angular/core';
import { ReduxUtil } from './store';
import { NgRedux } from 'ng2-redux';

@Injectable()
export class ReduxService {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  addReducer(action, callback: (state: IAppState, action: any) => IAppState) {
    ReduxUtil.addReducer(action, callback);
  }

  subscribe(action, callback: (state: IAppState) => any) {
    let state = this.ngRedux.getState();
    this.ngRedux.subscribe(function() {
      if (state.lastAction == ACTIONS[action]) {
        callback(state);
      }
    }.bind(state, action, callback));
  }

  sendAction(action: ACTIONS, params: any) {
    this.ngRedux.dispatch({
      'type': action,
      'params': params,
    });
  }


}
