import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ResultsService} from "../../services/results.service";
import {Driver} from "../../model/driver";
import {Result} from "../../model/result";

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.css']
})
export class EditDriverComponent implements OnInit {

  driver: Driver;
  availableResults: Result[];

  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id == null) {
      this.driver = new Driver();
    } else {
      this.resultsService.findDriver(Number(id))
        .subscribe(driver => this.driver = driver);
    }

    this.resultsService.findAllResults()
      .subscribe(results => this.availableResults = results);
  }

  save() {
    if (this.checkNotNullableFields(this.driver)) {
      this.resultsService.saveDriver(this.driver)
        .subscribe(() => this.router.navigateByUrl('/drivers'));
    } else {
      alert("Nie można dodać pustego kierowcy!");
    }
  }

  compareDrivers(driver1: Driver, driver2: Driver): boolean {
    return driver1 && driver2 ? driver1.id === driver2.id : driver1 === driver2;
  }

  checkNotNullableFields(driver: Driver) {
    return driver.firstName != ""
      && driver.secondName != ""
      && driver.team != "";
  }
}
