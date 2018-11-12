import {Component, OnInit} from '@angular/core';
import {Result} from "../../model/result";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

  result: Result;

  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.resultsService.findResult(Number(id))
      .subscribe(result => this.result = result);
  }

}
