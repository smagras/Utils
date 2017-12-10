import { Action } from './actions';
import { IAppState } from './state';
import { ReduxService } from './redux.service';

export interface IReducer {
	
	getAction() : Action;

	reduce(state: IAppState , action : Action);

}


export abstract class Reducer <S extends IAppState, A extends Action> implements IReducer {

	abstract getAction() : A;

	abstract reduce(state: S , action : A) : any;

}




