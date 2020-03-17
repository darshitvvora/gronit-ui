import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {GronitLinkRendererComponent} from '../gronit-link-renderer/gronit-link-renderer.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = 'app';
  columnDefs = [
    {headerName: 'Tag', field: 'name' },
    {headerName: 'Description', field: 'description' },
    {
      headerName: 'Gronit#',
      field: 'gronit_id',
      cellRendererFramework: GronitLinkRendererComponent,
      cellRendererParams: {
        inRouterLink: '/detail'
      }
    }
  ];

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get('http://api.quezx.test/api/emailTemplates/crons?salt=9JeQWhZ8VZR5ugm');
  }

}
