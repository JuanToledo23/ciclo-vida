import { Injectable } from '@angular/core';
import { Location } from '@angular/common';

@Injectable({
    providedIn: 'root'
})
export class HeaderService {

    constructor(
        public location: Location
    ) { }

    goBack() {
        this.location.back();
    }
}

