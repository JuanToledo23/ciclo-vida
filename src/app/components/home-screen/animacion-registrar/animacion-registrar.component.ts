import { Component, Input, OnInit } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    // ...
} from '@angular/animations';

@Component({
    selector: 'app-animacion-registrar',
    templateUrl: './animacion-registrar.component.html',
    animations: [
        trigger('slide', [
            // ...
            state('left', style({
                transform: 'translateX(-42%)'
            })),
            state('right', style({
                transform: 'translateX(70%)'
            })),
            state('top', style({
                transform: 'translateY(30%)'
            })),
            transition('* => *', [
                animate(800)
            ]),
        ]),
    ],
})
export class AnimacionRegistrar implements OnInit {
    @Input() activePane: PaneType = 'right';
    ngOnInit() {
    }
}
type PaneType = 'left' | 'right' | 'top';