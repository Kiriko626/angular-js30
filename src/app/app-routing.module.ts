import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrumMachineComponent } from "./drum-machine/drum-machine.component";
import { HomeComponent } from "./home/home.component";
import { CanvasComponent } from "./canvas/canvas.component";
import { ClockComponent } from "./clock/clock.component";
import { FlexPanelComponent } from "./flex-panel/flex-panel.component";
import { SortArticleComponent } from "./sort-article/sort-article.component";
import { MultipleCheckboxesComponent } from "./multiple-checkboxes/multiple-checkboxes.component";
import { VariablesComponent } from "./variables/variables.component";

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
    },
    {
        path: 'flex',
        component: FlexPanelComponent
    },
    {
        path: 'sort-without-article',
        component: SortArticleComponent
    },
    {
        path:'multiple-checkboxes',
        component: MultipleCheckboxesComponent
    },
    {
        path:'css-variables',
        component: VariablesComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
