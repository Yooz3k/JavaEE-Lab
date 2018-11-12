import {Component, OnInit} from '@angular/core';
import {Circuit} from "../../model/circuit";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-circuit',
  templateUrl: './edit-circuit.component.html',
  styleUrls: ['./edit-circuit.component.css']
})
export class EditCircuitComponent implements OnInit {

  circuit: Circuit;

  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id == null) {
      this.circuit = new Circuit();
    } else {
      this.resultsService.findCircuit(Number(id))
        .subscribe(circuit => this.circuit = circuit);
    }
  }

  save() {
    if (this.checkNotNullableFields(this.circuit)) {
      this.resultsService.saveCircuit(this.circuit)
        .subscribe(() => this.router.navigateByUrl('/circuits'))
    } else {
      alert("Nie można dodać pustego toru!");
    }
  }

  checkNotNullableFields(circuit: Circuit) {
    return circuit.name != ""
      && circuit.country != null;
  }

}
