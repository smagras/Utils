import { Action } from './actions';
import { IAppState } from './state';
import { Injectable } from '@angular/core';
import { ReduxUtil } from './store';
import { NgRedux } from 'ng2-redux';
import { rootReducer } from './store';
import { IReducer } from './reducer';

@Injectable()
export class ReduxService {

  constructor(private ngRedux: NgRedux<IAppState>) { }

  init(state : IAppState, reducers : IReducer[]){
    this.ngRedux.configureStore(rootReducer, state );

    for(let r of reducers){
      //console.log(r.getAction());

      this.addReducer(r);
    }
  }

  addReducer <T> (callback: IReducer) {
    ReduxUtil.addReducer(callback.getAction().name , callback.reduce);
  }

/*
  addReducer <T> (action : { new (...args : any[]): T }, callback: (state: IAppState, action: T) => IAppState) {
    ReduxUtil.addReducer(action.name , callback);
  }
*/

  subscribe <T> (action : { new (...args : any[]): T }, callback: (state: IAppState) => any) {

    let state = this.ngRedux.getState();
    this.ngRedux.subscribe(function() {
      if (state.lastAction == action.name) {
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
