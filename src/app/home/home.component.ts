import { Component } from '@angular/core';
import { ALL_PROJECTS, IProject } from "../app.const";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.styl']
})
export class HomeComponent {
    public allCards: IProject[] = ALL_PROJECTS;
}
