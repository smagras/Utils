

import { ReduxService } from './redux/redux.service';
import { AppState } from './shared/state/state';
import { Component, ViewContainerRef, OnInit, OnDestroy,  ElementRef, ComponentRef, ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { Test1Component } from './test/test.component';
import { NgRedux } from 'ng2-redux';
import { OpenContainerReducer } from './shared/state/reducers/open-container.reducer';

import { OpenContainerAction } from './shared/state/actions/open-container.action';
import { CloseContainerAction } from './shared/state/actions/close-container.action';

declare var GoldenLayout: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';


  private config: any;
  private layout: any;

  
  constructor(private reduxService: ReduxService,private el: ElementRef,
    private viewContainer: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) {

    reduxService.subscribe(CloseContainerAction, function(state: AppState) {
      alert("ok");
    }.bind(this));

    //reduxService.addReducer(OpenContainerAction,new OpenContainerReducer());


    reduxService.subscribe(OpenContainerAction, function(state: AppState) {
      var newItemConfig = {
          type: 'component',
          componentName: state.componentToOpen
      };
      this.layout.root.contentItems[ 0 ].addChild( newItemConfig );
    }.bind(this));





     this.config = {
        content: [
          {
            type: 'row',
            content: [{
              type: 'component',
              componentName: 'test1',
              componentState: {
                message: 'Top Left'
              }
            }]
          }
        ]
      };
    }



  ngOnInit() {
    this.layout = new GoldenLayout(this.config, $(this.el.nativeElement).find("#layout"));
    
    this.layout.registerComponent('test1', (container, componentState) => {
      let factory = this.componentFactoryResolver.resolveComponentFactory(Test1Component);
      let compRef = this.viewContainer.createComponent(factory);
      container.getElement().append($(compRef.location.nativeElement));
    });
    
    this.layout.init();
  }

  increment() {
    this.reduxService.sendAction( new OpenContainerAction("test1") );
  }

  bob() {
    this.reduxService.sendAction( new CloseContainerAction("test1") );
  }
}
