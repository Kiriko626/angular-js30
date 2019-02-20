import { Component } from '@angular/core';
import { IPanel, panels } from "./flex-panel.const";

@Component({
    selector: 'app-flex-panel',
    templateUrl: './flex-panel.component.html',
    styleUrls: ['./flex-panel.component.styl']
})
export class FlexPanelComponent {
    public allPanels: IPanel[] = panels;

    public onPanelClick(panel: IPanel): void {
        panel.isOpen = !panel.isOpen;
    }
}
