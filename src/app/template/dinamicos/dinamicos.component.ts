import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-dinamicos',
    templateUrl: 'dinamicos.component.html',
    styleUrls: ['dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

    persona: Persona = {
        nombre: "Alguien",
        favoritos: [
            {id: 1, nombre: "WoW"},
            {id: 2, nombre: "FF8"},
            {id: 3, nombre: "Mario"}
        ]
    };

    nuevoFavorito: string = "";

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    guardar() {
        // Do nothing
    }

    agregar() {
        const len = this.persona.favoritos.length;
        const favorito: Favorito = {
            id: (len <= 0) ? 1 : this.persona.favoritos[len -1].id + 1,
            nombre: this.nuevoFavorito
        }
        this.persona.favoritos.push( favorito );
        this.nuevoFavorito = "";
    }

    eliminar(index: number) {
        this.persona.favoritos.splice(index, 1);
    }

}


interface Persona {
    nombre: string;
    favoritos: Favorito[];
}

interface Favorito {
    id: number,
    nombre: string
}
