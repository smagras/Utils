import {Action} from './actions';
import {IAppState} from './state';


export function rootReducer(state: IAppState, action): IAppState {
  let actionType: string = action.type;
  state.lastAction = actionType;
  if (ReduxUtil.mapReducers[actionType] != null) {
    state = ReduxUtil.mapReducers[actionType](state, action.params);
  }
  return state;
}

export class ReduxUtil {

  static mapReducers = [];

  static addReducer(action, callback: (state: IAppState, action: any) => IAppState) {
    ReduxUtil.mapReducers[action] = callback;
  }


}
