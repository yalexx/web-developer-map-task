import {Component, OnDestroy, OnInit} from '@angular/core';
import {MapMouseEvent} from 'mapbox-gl';
import {Geometry} from 'geojson';
import {Region} from '../services/region.interface';
import {StateService} from '../services/state.service';
import {Vehicle} from '../services/vehicle.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: [
    './map.component.less']
})
export class MapComponent implements OnInit, OnDestroy {
  map;
  center = [25.4858, 42.7339];
  regions: Region[] = [];
  vehicles: Vehicle[] = [];
  subscription: Subscription;

  constructor(private state: StateService) {
    this.subscription = this.state.getVehicles().subscribe((vehicles: Vehicle[]) => {
      this.vehicles = vehicles;
      console.log('vehicles update: ', vehicles);
    });
  }

  ngOnInit() {
    this.regions = this.state.getRegions();
  }

  alert(message: string) {
    alert(message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
