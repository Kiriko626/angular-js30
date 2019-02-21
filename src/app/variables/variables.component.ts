import { Component, ElementRef, ViewChild } from '@angular/core';
import { IVariable, variables } from "./variables.const";

@Component({
    selector: 'app-variables',
    templateUrl: './variables.component.html',
    styleUrls: ['./variables.component.styl']
})

export class VariablesComponent {

    @ViewChild('comp') document: ElementRef;
    public allVariables: IVariable[] = variables;

    public onInput(item: IVariable, $event: any): void {
        item.value = $event.target.value;
        this.changeProperty(item);
    }

    private changeProperty(item: IVariable): void {
        if (item.isRange) {
            this.document.nativeElement.style.setProperty(`--${item.name}`, item.value+'px');
        } else {
            this.document.nativeElement.style.setProperty(`--${item.name}`, item.value);
        }
    }
}
