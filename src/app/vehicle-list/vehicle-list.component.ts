import {Component, OnDestroy, OnInit} from '@angular/core';
import {StateService} from '../services/state.service';
import {Vehicle} from '../services/vehicle.interface';
import {Region} from '../services/region.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.less']
})
export class VehicleListComponent implements OnInit, OnDestroy {
  vehicles: Vehicle[] = [];
  regions: Region[] = [];
  currentVehicle: Vehicle;
  subscription: Subscription;

  constructor(private state: StateService) {
    this.subscription = this.state.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
    });
  }

  ngOnInit() {
    this.regions = this.state.getRegions();
  }

  clickSelectVehicle(vehicle: Vehicle) {
    this.state.selectVehicle(vehicle);
    this.currentVehicle = vehicle;
  }

  clickSelectRegion(region) {
    this.state.updateRegion(this.currentVehicle, region);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
