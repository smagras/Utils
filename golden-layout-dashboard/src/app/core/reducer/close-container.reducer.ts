import {OpenContainerAction} from '../action/open-container.action';
import {Reducer} from '../../shared/redux/reducer';
import {AppState} from '../state/state';


export class OpenContainerReducer extends Reducer<AppState, OpenContainerAction> {

  reduce(state: AppState, action: OpenContainerAction): AppState {
    state.uiState.componentToOpen = action.name;
    return state;
  }

}
