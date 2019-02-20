import { Component } from '@angular/core';
import { ALL_PROJECTS, IProject } from "./app.const";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styles: []
})
export class AppComponent {
    public projects: IProject[] = ALL_PROJECTS;
}
