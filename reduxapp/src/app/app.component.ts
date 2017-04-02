import { ACTIONS } from './redux/actions';
import { ReduxService } from './redux/redux.service';
import { IAppState } from './redux/state';
import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private reduxService: ReduxService) {


    reduxService.subscribe(ACTIONS.HELLO, function(state: IAppState) {
      console.log(state);
    });
    reduxService.subscribe(ACTIONS.BOB, function(state: IAppState) {
      console.log(state);
    });

    reduxService.addReducer(ACTIONS.HELLO, function(state: IAppState, action) {
      state.counter += action.params.power;
      return state;
    });

    reduxService.addReducer(ACTIONS.BOB, function(state: IAppState, action) {
      state.bob += action.params.power;
      return state;
    });

  }

  increment() {
    this.reduxService.sendAction(ACTIONS.HELLO, { power: 3 });
  }

  bob() {
    this.reduxService.sendAction(ACTIONS.BOB, { power: 3 });
  }
}
