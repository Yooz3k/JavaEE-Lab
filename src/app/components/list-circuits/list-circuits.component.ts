import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Circuit} from "../../model/circuit";
import {ResultsService} from "../../services/results.service";

@Component({
  selector: 'app-list-circuits',
  templateUrl: './list-circuits.component.html',
  styleUrls: ['./list-circuits.component.css']
})
export class ListCircuitsComponent implements OnInit {

  circuits: Observable<Circuit[]>;

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.circuits = this.resultsService.findAllCircuits();
  }

  remove(circuit: Circuit) {
    this.resultsService.removeCircuit(circuit)
      .subscribe(() => this.ngOnInit());
  }

}
