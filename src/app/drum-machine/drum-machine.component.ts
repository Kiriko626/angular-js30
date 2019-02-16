import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { drumItems, IDrumItem } from "./drum-machine.const";

@Component({
    selector: 'drum-machine',
    templateUrl: './drum-machine.component.html',
    styleUrls: ['./drum-machine.component.styl']
})
export class DrumMachineComponent {

    public allKeys: IDrumItem[] = drumItems;

    @HostListener('document:keypress', ['$event'])
    private onKeyDown(event: KeyboardEvent) {
        const audio = new Audio();
        const activeItem = this.allKeys.find(item => item.key === event.keyCode);
        if (activeItem) {
            audio.src = './assets/sounds/' + activeItem.audio;
            audio.load();
            activeItem.isPlaying = true;
            audio.play();
        }
    }
}
