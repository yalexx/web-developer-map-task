import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {DataService} from './data.service';
import {Vehicle} from './vehicle.interface';
import {Region} from './region.interface';
import {Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StateService {
  private vehicles: Vehicle[] = [];
  private regions: Region[] = [];
  private colors: String[] = [];
  private carModels: String[] = [];
  private history: String[] = [];

  private vehiclesSubject = new Subject<any>();
  private historySubject = new Subject<any>();

  constructor(private dataService: DataService) {
  }

  getVehicles(): Observable<any> {
    return this.vehiclesSubject.asObservable();
  }

  getHistory(): Observable<any> {
    return this.historySubject.asObservable();
  }

  private setHistory(message: string): void {
    const currentTime = new Date();
    const result = currentTime.toISOString().substr(11, 8);
    this.history.push(result + ' ' + message);
    console.log('History: ', this.history);
    this.historySubject.next([...this.history]);
  }

  generateVehicles(): void {
    this.regions = this.dataService.getRegions();
    this.colors = this.dataService.getColors();
    this.carModels = this.dataService.getCarModels();
    for (let i = 1; i <= _.random(4, 6); i++) {
      const startRegion = this.regions[_.random(0, this.regions.length - 1)];
      this.vehicles.push({
        name: `Car${i}`,
        region: startRegion.name,
        color: this.colors[_.random(0, this.colors.length - 1)],
        model: this.carModels[_.random(0, this.carModels.length - 1)],
        selected: false,
        coordinates: startRegion.coordinates
      });
    }
    console.log([...this.vehicles]);
    this.vehiclesSubject.next([...this.vehicles]);
    this.setHistory('Welcome!');
  }

  selectVehicle(vehicle: Vehicle): void {
    this.vehicles.forEach((currVehicle: Vehicle) => {
      if (currVehicle.name === vehicle.name) {
        currVehicle.selected = true;
      } else {
        currVehicle.selected = false;
      }
    });
    this.vehiclesSubject.next([...this.vehicles]);
  }

  updateRegion(vehicle: Vehicle, region: Region): void {
    console.log(vehicle);
    if (vehicle) {
      this.vehicles.forEach((currVehicle: Vehicle) => {
        if (currVehicle.name === vehicle.name) {
          if (currVehicle.region !== region.name) {
            this.setHistory(`${currVehicle.name} was navigated from ${currVehicle.region} to ${region.name}`);
            currVehicle.region = region.name;
            currVehicle.coordinates = region.coordinates;
          } else {
            this.setHistory('the vehicle is already there!');
          }
        }
      });
      this.vehiclesSubject.next([...this.vehicles]);
    } else {
      this.setHistory('no vehicle selected!');
    }
  }

  getRegions() {
    return [...this.regions];
  }
}

