import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Vehicle} from '../services/vehicle.interface';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  subscription: Subscription;
  history;

  constructor(private state: StateService) {
    this.subscription = this.state.getHistory().subscribe((history: String[]) => {
      this.history = history;
    });
  }

  ngOnInit() {
  }

}
