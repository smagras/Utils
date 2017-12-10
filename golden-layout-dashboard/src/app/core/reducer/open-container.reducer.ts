import {OpenContainerAction} from '../action/open-container.action';
import {Reducer} from '../../shared/redux/reducer';
import {CloseContainerAction} from '../action/close-container.action';
import {AppState} from '../state/state';


export class CloseContainerReducer extends Reducer<AppState, CloseContainerAction> {

  reduce(state: AppState, action: CloseContainerAction): AppState {
    state.uiState.componentToOpen = action.name;
    return state;
  }

}
