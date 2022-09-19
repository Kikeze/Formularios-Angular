import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-switches',
    templateUrl: 'switches.component.html',
    styleUrls: ['switches.component.css']
})
export class SwitchesComponent implements OnInit {

    persona = {
        genero: "",
        notificaciones: true
    };

    terminos: boolean = false;

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    guardar() {
        // Do nothing
    }

}
