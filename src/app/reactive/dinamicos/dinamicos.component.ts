import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';


@Component({
    selector: 'app-dinamicos',
    templateUrl: 'dinamicos.component.html',
    styleUrls: ['dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

    miFormulario: FormGroup = this.builder.group({
        nombre: ["", [
            Validators.required,
            Validators.minLength(3)
        ]],
        favoritos: this.builder.array([
            ["WoW", Validators.required],
            ["FF8", Validators.required],
            ["Mario", Validators.required],
        ], Validators.required)
    });

    get favoritos(): FormArray {
        return this.miFormulario.get("favoritos") as FormArray
    }

    nuevoFavorito: FormControl = this.builder.control("", Validators.required);

    constructor(
        private builder: FormBuilder
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        // Do nothing
    }

    campoNoValido(campo: string) {
        return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
    }

    guardar() {
        if( this.miFormulario.invalid ) {
            this.miFormulario.markAllAsTouched();
            return;
        }

        console.log(this.miFormulario.value);
        this.miFormulario.reset();
        this.favoritos.clear();
    }

    agregar() {
        if( this.nuevoFavorito.invalid ) {
            return;
        }

        this.favoritos.push(this.builder.control(this.nuevoFavorito.value, Validators.required));
        this.nuevoFavorito.reset();
    }

    eliminar(index: number) {
        this.favoritos.removeAt(index);
    }

}
