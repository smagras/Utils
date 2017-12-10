import {IAppState} from '../../shared/redux/state';
import {UiState} from './ui-state';

export class AppState extends IAppState {

  uiState: UiState = new UiState();

}

