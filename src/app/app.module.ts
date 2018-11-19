import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorPageComponent } from './navigator-page/navigator-page.component';
import { HistoryComponent } from './history/history.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { MapComponent } from './map/map.component';
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorPageComponent,
    HistoryComponent,
    VehicleListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxMapboxGLModule.withConfig({
      accessToken: 'pk.eyJ1Ijoic3VwZXJhY3RybyIsImEiOiJjam9rNmJhNHowY29rM2ttc21ydWk1c2hlIn0.HZDRi6n1ACJrCtmXknJb0Q',
      geocoderAccessToken: 'TOKEN'
    })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
