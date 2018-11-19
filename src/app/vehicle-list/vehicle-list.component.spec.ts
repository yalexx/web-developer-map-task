import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleListComponent } from './vehicle-list.component';
import {DebugElement} from '@angular/core';

describe('VehicleListComponent', () => {
  let component: VehicleListComponent;
  let fixture: ComponentFixture<VehicleListComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleListComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create vehicle list component', () => {
    expect(component).toBeTruthy();
  });

});
