import {Component, OnInit} from '@angular/core';
import {Driver} from "../../model/driver";
import {ResultsService} from "../../services/results.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-driver',
  templateUrl: './view-driver.component.html',
  styleUrls: ['./view-driver.component.css']
})
export class ViewDriverComponent implements OnInit {

  driver: Driver

  constructor(private resultsService: ResultsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.resultsService.findDriver(Number(id))
      .subscribe(driver => this.driver = driver);
  }

}
