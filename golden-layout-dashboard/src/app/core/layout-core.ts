import {Test1Component} from '../test/test.component';
import {Test1Module} from '../test/test1.module';


export enum LayoutContainerId {
  TEST_LAYOUT, BASE_LAYOUT
}

export class LayoutCore {

  public static modules = [Test1Module];

  public static initContainer = {id: LayoutContainerId.BASE_LAYOUT, name: 'base', component: Test1Component, params: {}};

  public static containers = [

    {id: LayoutContainerId.TEST_LAYOUT, name: 'neqdqk', component: Test1Component, params: {}}

  ];


}
