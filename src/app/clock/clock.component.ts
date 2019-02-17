import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval, Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
    selector: 'app-clock',
    templateUrl: './clock.component.html',
    styleUrls: ['./clock.component.styl']
})
export class ClockComponent implements OnInit, OnDestroy {

    @ViewChild('second') secondHand: ElementRef;
    @ViewChild('minute') minuteHand: ElementRef;
    @ViewChild('hour') hourHand: ElementRef;

    unsubscribe$: Subject<void> = new Subject();
    interval$: Observable<number> = interval(1000);

    ngOnInit() {
        this.interval$
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => this.setClockTime());
    }

    private setClockTime(): void {
        const now = new Date();

        const seconds = now.getSeconds();
        const secondsDegree = ((seconds / 60) * 360) + 90;
        this.secondHand.nativeElement.style.transform = `rotate(${secondsDegree}deg)`;

        const minutes = now.getMinutes();
        const minutesDegree = ((minutes / 60) * 360) + 90;
        this.minuteHand.nativeElement.style.transform = `rotate(${minutesDegree}deg)`;

        const hours = now.getHours();
        const hoursDegree = ((hours / 12) * 360) + 90;
        this.hourHand.nativeElement.style.transform = `rotate(${hoursDegree}deg)`;
    }

    ngOnDestroy(): void {
        this.unsubscribe$.next();
    }
}
