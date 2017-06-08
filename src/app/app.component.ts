import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  vehicles: Array<any>;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {

    this.dataService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data.vehicles;

      }
    );
  }
}
