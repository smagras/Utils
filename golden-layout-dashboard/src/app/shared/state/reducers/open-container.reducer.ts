import { OpenContainerAction } from '../actions/open-container.action';
import { Reducer } from '../../../redux/reducer';
import { AppState } from '../state';


export class OpenContainerReducer extends Reducer<AppState,OpenContainerAction> {


	getAction() : OpenContainerAction{
		retrun OpenContainerAction;
	}

	reduce(state: AppState, action: OpenContainerAction) : AppState{
		state.componentToOpen = action.name;
		return state;
	}


}