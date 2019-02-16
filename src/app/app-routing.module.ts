import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DrumMachineComponent} from "./drum-machine/drum-machine.component";
import {HomeComponent} from "./home/home.component";
import {CanvasComponent} from "./canvas/canvas.component";
import {ClockComponent} from "./clock/clock.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'drum',
    component: DrumMachineComponent
  },
  {
    path: 'canvas',
    component: CanvasComponent
  },
  {
    path: 'clock',
    component: ClockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
