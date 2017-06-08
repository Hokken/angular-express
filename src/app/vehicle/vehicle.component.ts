import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() data:any;

  desktop:boolean;
  tablet:boolean;
  phone:boolean;

  vehicleDetails:object;

  constructor(private dataService:DataService) {
    this.vehicleDetails= {};
  }

  ngOnInit() {

    this.dataService.getVehicleDetails(this.data.id).subscribe(
      (data: any) => {
        this.vehicleDetails = data;
      }
    );

  this.setLayout(window.innerWidth);
  }

  onResize(event) {
    const w = event.target.innerWidth;
    this.setLayout(w);
  }

  setLayout(w){
    if(w>=768){
      this.desktop = true;
      this.tablet = false;
      this.phone = false;
    }
    if(w<768){
      this.desktop = false;
      this.tablet = false;
      this.phone = true;
    }
  }

}
