import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-side-menu',
    templateUrl: 'side-menu.component.html',
    styleUrls: ['side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

    templateMenu: MenuItem[] = [
        { texto: "Basicos", ruta: "/template/basicos" },
        { texto: "Dinamicos", ruta: "/template/dinamicos" },
        { texto: "Switches", ruta: "/template/switches" }
    ];
    reactiveMenu: MenuItem[] = [
        { texto: "Basicos", ruta: "/reactive/basicos" },
        { texto: "Dinamicos", ruta: "/reactive/dinamicos" },
        { texto: "Switches", ruta: "/reactive/switches" }
    ];

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

}

interface MenuItem {
    texto: string;
    ruta: string;
}
