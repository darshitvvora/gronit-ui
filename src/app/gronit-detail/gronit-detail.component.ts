import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GronitService} from '../gronit.service';
import { Status } from '../status';
import { Summary } from '../summary';


@Component({
  selector: 'app-gronit-detail',
  templateUrl: './gronit-detail.component.html',
  styleUrls: ['./gronit-detail.component.scss']
})
export class GronitDetailComponent implements OnInit {
  history: Status[];
  status: Status;
  summary: Summary;

  constructor( private route: ActivatedRoute, private gronitService: GronitService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.gronitService.getStatus(id)
      .subscribe(status => this.status = status);

    this.gronitService.getHistory(id.toString())
      .subscribe(history => this.history = history);

    this.gronitService.getSummary(id)
      .subscribe(summary => this.summary = summary);

  }

}
