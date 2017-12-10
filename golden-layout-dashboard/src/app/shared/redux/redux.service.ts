import {Action} from './actions';
import {IAppState} from './state';
import {Injectable} from '@angular/core';
import {ReduxUtil} from './store';
import {NgRedux} from 'ng2-redux';
import {rootReducer} from './store';
import {IReducer} from './reducer';

@Injectable()
export class ReduxService {

  constructor(private ngRedux: NgRedux<IAppState>) {}

  init(state: IAppState) {
    this.ngRedux.configureStore(rootReducer, state);
  }

  addReducer<T>(action: {new (...args: any[]): T}, callback: IReducer) {
    ReduxUtil.addReducer(action.name, callback.reduce);
  }


  subscribe<T>(action: {new (...args: any[]): T}, callback: (state: IAppState) => any) {

    let state = this.ngRedux.getState();
    this.ngRedux.subscribe(function() {
      if (state.lastAction === action.name) {
        callback(state);
      }
    }.bind(state, action, callback));
  }

  sendAction(action: Action) {
    this.ngRedux.dispatch({
      'type': action.constructor.name,
      'params': action,
    });
  }


}
