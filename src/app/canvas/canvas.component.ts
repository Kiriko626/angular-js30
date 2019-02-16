import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls: ['./canvas.component.styl']
})
export class CanvasComponent implements OnInit {
    @ViewChild('draw') canvasRef: ElementRef;
    canvasContext: CanvasRenderingContext2D;

    isDrawing: boolean;
    lastX: number;
    lastY: number;
    hue: number = 0;
    isReverse: boolean;

    ngOnInit(): void {
        this.canvasContext = this.canvasRef.nativeElement.getContext('2d');
        const ctx = this.canvasContext;
        this.canvasRef.nativeElement.width = this.canvasRef.nativeElement.offsetWidth;
        this.canvasRef.nativeElement.height = this.canvasRef.nativeElement.offsetHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 30;
    }

    onMouseDown(event: MouseEvent): void {
        this.isDrawing = true;
        this.lastX = event.offsetX;
        this.lastY = event.offsetY;
    }

    disableDrawing(): void {
        this.isDrawing = false;
    }

    onMouseMove(event: MouseEvent): void {
        if (!this.isDrawing) return;

        const ctx = this.canvasContext;
        ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.beginPath();
        ctx.moveTo(this.lastX, this.lastY);
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        this.lastX = event.offsetX;
        this.lastY = event.offsetY;
        this.hue++;

        if (this.hue >= 360) {
            this.hue = 0;
        }

        if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
            this.isReverse = !this.isReverse;
        }

        if (this.isReverse) {
            ctx.lineWidth++;
        } else {
            ctx.lineWidth--;
        }
    }
}
