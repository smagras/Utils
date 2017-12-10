import {CloseContainerAction} from '../../core/action/close-container.action';
import {OpenContainerAction} from '../../core/action/open-container.action';
import {LayoutContainerId} from '../../core/layout-core';
import {ReduxService} from '../../shared/redux/redux.service';
import {Test1Component} from '../../test/test.component';
import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor(private reduxService: ReduxService) {

  }

  increment() {
    this.reduxService.sendAction(new OpenContainerAction(LayoutContainerId.TEST_LAYOUT.toString()));
  }

  bob() {
    this.reduxService.sendAction(new CloseContainerAction(LayoutContainerId.TEST_LAYOUT.toString()));
  }

}
