import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Setting up the routing for the app
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

