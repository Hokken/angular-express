import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class DataService {

  constructor(private http: Http) {

  }

  getVehicles() {
    return this.http.get("http://localhost:3000/api/vehicle")
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }

  getVehicleDetails(id) {
    return this.http.get("http://localhost:3000/api/vehicle/"+id)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        });
  }

}
