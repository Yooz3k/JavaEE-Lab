import {Component, OnInit} from '@angular/core';
import {ResultsService} from "../../services/results.service";
import {Observable} from "rxjs/Observable";
import {Driver} from "../../model/driver";

@Component({
  selector: 'app-list-drivers',
  templateUrl: './list-drivers.component.html',
  styleUrls: ['./list-drivers.component.css']
})
export class ListDriversComponent implements OnInit {

  drivers: Observable<Driver[]>

  constructor(private resultsService: ResultsService) { }

  ngOnInit() {
    this.drivers = this.resultsService.findAllDrivers();

    // this.drivers.forEach(driver => driver[0].dateOfBirth = this.setDateOfBirth(driver[0]));
  }

  remove(driver: Driver) {
    this.resultsService.removeDriver(driver)
      .subscribe(() => this.ngOnInit());
  }

/*  setDateOfBirth(driver: Driver) {
    driver.dateOfBirth = driver.dateOfBirth.toString();
  }*/

}
