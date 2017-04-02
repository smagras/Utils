import { ACTIONS } from './actions';
import { IAppState } from './state';


export function rootReducer(state: IAppState, action): IAppState {

  if (ReduxUtil.mapReducers[action.type] != null) {
    let act: string = ACTIONS[action.type];
    // console.log(act);
    state.lastAction = act;
    state = ReduxUtil.mapReducers[action.type](state, action);
  }


  return state;
}

export class ReduxUtil {

  static mapReducers = [];

  static addReducer(action, callback: (state: IAppState, action: any) => IAppState) {
    ReduxUtil.mapReducers[action] = callback;
  }


}