import { Action } from './actions';
import { IAppState } from './state';


export function rootReducer(state: IAppState, action): IAppState {

  if (ReduxUtil.mapReducers[action.type] != null) {
    let act: string = action.type;
    state.lastAction = act;
    state = ReduxUtil.mapReducers[act](state, action.params);
  }
  return state;
}

export class ReduxUtil {

  static mapReducers = [];

  static addReducer(action, callback: (state: IAppState, action: any) => IAppState) {
    ReduxUtil.mapReducers[action] = callback;
  }


}