import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GronitDetailComponent } from './gronit-detail/gronit-detail.component';
import { GronitLinkRendererComponent } from './gronit-link-renderer/gronit-link-renderer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GronitDetailComponent,
    GronitLinkRendererComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  entryComponents: [
    GronitLinkRendererComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
