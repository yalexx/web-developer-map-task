import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {Region} from './region.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private regions: Region[] = [
    {
      name: 'Haskovo',
      selected: false,
      coordinates: [
        25.557211,
        41.931278
      ]

    },
    {
      name: 'Plovdiv',
      selected: false,
      coordinates: [
        24.745291,
        42.135406
      ]

    },
    {
      name: 'Sofia',
      selected: false,
      coordinates: [
        23.321867,
        42.697708
      ]
    },
    {
      name: 'Varna',
      selected: false,
      coordinates: [
        27.914734,
        43.214050,
      ]
    },
    {
      name: 'Ruse',
      selected: false,
      coordinates: [
        25.955231,
        43.849579
      ]
    },
    {
      name: 'Stara Zagora',
      selected: false,
      coordinates: [
        25.624900,
        42.423920
      ]
    },
    {
      name: 'Pleven',
      selected: false,
      coordinates: [
        24.620621,
        43.408329
      ]
    },
    {
      name: 'Dobrich',
      selected: false,
      coordinates: [
        27.827261,
        43.572590
      ]
    }
  ];

  private colors: String[] = ['red', 'green', 'blue', 'orange', 'purple', 'black'];
  private carModels: String[] = ['Mercedes', 'BMW', 'Audi', 'Lada', 'Tesla', 'Volkswagen'];

  constructor() {
  }

  getRegions() {
    return _.map(this.regions, _.clone);
  }

  getColors() {
    return _.map(this.colors, _.clone);
  }

  getCarModels() {
    return _.map(this.carModels, _.clone);
  }
}
