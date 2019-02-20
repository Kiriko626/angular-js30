import { Component } from '@angular/core';
import { checkItems, ICheckboxItem } from "./multiple-checkboxes.const";

@Component({
    selector: 'app-multiple-checkboxes',
    templateUrl: './multiple-checkboxes.component.html',
    styleUrls: ['./multiple-checkboxes.component.styl']
})
export class MultipleCheckboxesComponent {
    public allItems: ICheckboxItem[] = checkItems;
    public lastChecked: ICheckboxItem;

    private onClick(clickedCheckbox: ICheckboxItem, event: MouseEvent): void {
        let isBetween = false;
        clickedCheckbox.isCheck = !clickedCheckbox.isCheck;

        if (event.shiftKey && clickedCheckbox.isCheck) {
            this.allItems.forEach(item => {

                if (item === clickedCheckbox || item === this.lastChecked) {
                    isBetween = !isBetween;
                }

                if (isBetween) {
                    item.isCheck = true;
                }
            });
        }

        this.lastChecked = clickedCheckbox;
    }
}
