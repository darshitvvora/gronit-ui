import { Component, OnInit } from '@angular/core';
import {ICellRendererAngularComp} from 'ag-grid-angular/main';


@Component({
  selector: 'app-gronit-link-renderer',
  template: '<a [routerLink]="[params.inRouterLink,params.value]">{{params.value}}</a>'
})
export class GronitLinkRendererComponent implements ICellRendererAngularComp {

  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    return false;
  }

}
