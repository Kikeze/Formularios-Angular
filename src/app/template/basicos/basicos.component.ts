import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-basicos',
    templateUrl: 'basicos.component.html',
    styleUrls: ['basicos.component.css']
})
export class BasicosComponent implements OnInit {

    @ViewChild("miFormulario") miFormulario!: NgForm;

    initForm = {
        producto: "Algo",
        precio: 10,
        existencia: 10
    };

    constructor() {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    nombreValido(): boolean {
        return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
    }

    precioValido(): boolean {
        return this.miFormulario?.controls['precio']?.touched && this.miFormulario?.controls['precio']?.value < 0;
    }

    guardar(): void {
        console.log("Se guarda");
        console.log(this.miFormulario);

        this.miFormulario.resetForm({
            precio: 0,
            existencia: 0
        });
    }

}
