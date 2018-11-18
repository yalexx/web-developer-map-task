import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NavigatorPageComponent} from './navigator-page/navigator-page.component';

const routes: Routes = [
  {path: 'navigator', component: NavigatorPageComponent},
  {path: '', redirectTo: 'navigator', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
