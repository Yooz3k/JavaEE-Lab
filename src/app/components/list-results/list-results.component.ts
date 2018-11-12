import {Component, OnInit} from '@angular/core';
import {ResultsService} from "../../services/results.service";
import {Observable} from "rxjs/Observable";
import {Result} from "../../model/result";

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.css']
})
export class ListResultsComponent implements OnInit {

  results: Observable<Result[]>;

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.results = this.resultsService.findAllResults();
  }

  remove(result: Result) {
    this.resultsService.removeResult(result)
      .subscribe(() => this.ngOnInit());
  }

}
