import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import { DrumMachineComponent } from "./drum-machine/drum-machine.component";
import { CanvasComponent } from './canvas/canvas.component';
import { HomeComponent } from './home/home.component';
import { ClockComponent } from './clock/clock.component';

@NgModule({
    declarations: [
        AppComponent,
        DrumMachineComponent,
        CanvasComponent,
        HomeComponent,
        ClockComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MaterialModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
