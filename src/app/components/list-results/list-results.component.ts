import {Component, OnInit} from '@angular/core';
import {ResultsService} from "../../services/results.service";
import {Result} from "../../model/result";
import {ResultsDTO} from "../../model/resultsDTO";

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.css']
})
export class ListResultsComponent implements OnInit {

  // results: Observable<Result[]>;
  results: ResultsDTO;

  private urlPrefix: string = 'http://localhost:8080/JAX-RX-1.0-SNAPSHOT/api';

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
     this.resultsService.findResults()
       .subscribe(results => this.results = results);
  }

  remove(result: Result) {
    this.resultsService.removeResult(result)
      .subscribe(() => this.ngOnInit());
  }

  getPreviousPage() {
    this.resultsService.findResults(this.urlPrefix + this.results.previousPage)
      .subscribe(results => this.results = results);
  }

  getNextPage() {
    this.resultsService.findResults(this.urlPrefix + this.results.nextPage)
      .subscribe(results => this.results = results);
  }

}
