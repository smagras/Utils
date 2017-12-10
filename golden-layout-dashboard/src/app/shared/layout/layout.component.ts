
import {CloseContainerAction} from '../../core/action/close-container.action';
import {OpenContainerAction} from '../../core/action/open-container.action';
import {LayoutCore} from '../../core/layout-core';
import {AppState} from '../../core/state/state';
import {ReduxService} from '../redux/redux.service';
import {Test1Component} from '../../test/test.component';
import {
  Component, ViewContainerRef, OnInit, OnDestroy, ElementRef, ComponentRef,
  ComponentFactory, ComponentFactoryResolver
} from '@angular/core';

declare var GoldenLayout: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {

  private config: any;
  private layout: any;


  constructor(private reduxService: ReduxService, private el: ElementRef,
    private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

    reduxService.subscribe(CloseContainerAction, function(state: AppState) {
      alert('ok');
    }.bind(this));

    reduxService.subscribe(OpenContainerAction, function(state: AppState) {
      let currentContainer = null;
      let isClosable = true;
      if (state.uiState.componentToOpen === LayoutCore.initContainer.id.toString()) {
        isClosable = false;
        currentContainer = LayoutCore.initContainer;
      }


      for (let i = 0; i < LayoutCore.containers.length; i++) {
        if (LayoutCore.containers[i].id.toString() === state.uiState.componentToOpen) {
          currentContainer = LayoutCore.containers[i];
        }
      }

      if (currentContainer != null) {
        let newItemConfig = {
          type: 'component',
          isClosable: isClosable,
          componentName: currentContainer.name,
          componentState: {name: 'Wolfram'}
        };
        this.layout.root.contentItems[0].addChild(newItemConfig);
      }

    }.bind(this));


    this.config = {
      settings: {
        showPopoutIcon: false,
        showMaximiseIcon: true,
      },
      content: [
        {
          type: 'row',
          content: []
        }
      ]
    };


  }



  ngOnInit() {
    this.layout = new GoldenLayout(this.config, $(this.el.nativeElement).find('#layout'));

    // Base container
    if (LayoutCore.initContainer != null) {
      let layoutContainer = LayoutCore.initContainer;
      this.layout.registerComponent(layoutContainer.name, (container, componentState) => {
        let factory = this.componentFactoryResolver.resolveComponentFactory(layoutContainer.component);
        let compRef = this.viewContainer.createComponent(factory);
        container.getElement().append($(compRef.location.nativeElement));
      });
    }

    // Init all containers
    for (let i = 0; i < LayoutCore.containers.length; i++) {
      let layoutContainer = LayoutCore.containers[i];
      this.layout.registerComponent(layoutContainer.name, (container, componentState) => {
        let factory = this.componentFactoryResolver.resolveComponentFactory(layoutContainer.component);
        let compRef = this.viewContainer.createComponent(factory);
        container.getElement().append($(compRef.location.nativeElement));
      });
    }

    this.layout.init();

    if (LayoutCore.initContainer != null) {
      this.reduxService.sendAction(new OpenContainerAction(LayoutCore.initContainer.id.toString()));
    }

  }


}
