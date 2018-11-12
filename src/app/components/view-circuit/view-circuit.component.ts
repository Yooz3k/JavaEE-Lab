import {Component, OnInit} from '@angular/core';
import {Circuit} from "../../model/circuit";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-circuit',
  templateUrl: './view-circuit.component.html',
  styleUrls: ['./view-circuit.component.css']
})
export class ViewCircuitComponent implements OnInit {

  circuit: Circuit;

  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.resultsService.findCircuit(Number(id))
      .subscribe(circuit => this.circuit = circuit);
  }

}
