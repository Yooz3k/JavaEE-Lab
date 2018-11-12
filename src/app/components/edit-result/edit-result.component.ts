import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResultsService} from "../../services/results.service";
import {Result} from "../../model/result";
import {Circuit} from "../../model/circuit";

@Component({
  selector: 'app-edit-result',
  templateUrl: './edit-result.component.html',
  styleUrls: ['./edit-result.component.css']
})
export class EditResultComponent implements OnInit {

  result: Result;
  availableCircuits: Circuit[];

  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id == null) {
      this.result = new Result();
    } else {
      this.resultsService.findResult(Number(id))
        .subscribe(result => this.result = result);
    }

    this.resultsService.findAllCircuits()
      .subscribe(circuits => this.availableCircuits = circuits);
  }

  save() {
    if (this.checkNotNullableFields(this.result)) {
      this.resultsService.saveResult(this.result)
        .subscribe(() => this.router.navigateByUrl('/results'));
    } else {
      alert("Nie można dodać pustego wyniku!");
    }
  }

  compareResults(result1: Result, result2: Result): boolean {
    return result1 && result2 ? result1.id === result2.id : result1 === result2;
  }

  checkNotNullableFields(result: Result) {
    return result.circuit != null
      && result.pos != null
      && result.pos != 0;
  }
}
