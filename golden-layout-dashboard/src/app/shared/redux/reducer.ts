import {Action} from './actions';
import {IAppState} from './state';
import {ReduxService} from './redux.service';

export interface IReducer {
  reduce(state: IAppState, action: Action);
}

export abstract class Reducer<S extends IAppState, A extends Action> implements IReducer {

  abstract reduce(state: S, action: A): any;

}




