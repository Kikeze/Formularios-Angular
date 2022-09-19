import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-basicos',
    templateUrl: 'basicos.component.html',
    styleUrls: ['basicos.component.css']
})
export class BasicosComponent implements OnInit {

    // miFormulario: FormGroup = new FormGroup({
    //     producto: new FormControl("RTX 4080ti"),
    //     precio: new FormControl(1500),
    //     existencia: new FormControl(1)
    // });

    miFormulario: FormGroup = this.builder.group({
        producto: ["", [
            Validators.required,
            Validators.minLength(3)
        ]],
        precio: [0, [
            Validators.required,
            Validators.min(0)
        ]],
        existencia: [0, [
            Validators.required,
            Validators.min(0)
        ]]
    });

    constructor(
        private builder: FormBuilder
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        this.miFormulario.setValue({
            producto: "RTX 4080ti",
            precio: 1600,
            existencia: 10
        });
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
    }

}
