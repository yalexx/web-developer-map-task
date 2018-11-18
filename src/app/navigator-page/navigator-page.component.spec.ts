import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorPageComponent } from './navigator-page.component';

describe('NavigatorPageComponent', () => {
  let component: NavigatorPageComponent;
  let fixture: ComponentFixture<NavigatorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigatorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
