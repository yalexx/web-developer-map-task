import {Component, OnInit} from '@angular/core';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-navigator-page',
  templateUrl: './navigator-page.component.html',
  styleUrls: ['./navigator-page.component.less']
})
export class NavigatorPageComponent implements OnInit {
  constructor(private state: StateService) {

  }

  ngOnInit() {
    this.state.generateVehicles();
  }
}
