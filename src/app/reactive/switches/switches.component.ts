import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';


@Component({
    selector: 'app-switches',
    templateUrl: 'switches.component.html',
    styleUrls: ['switches.component.css']
})
export class SwitchesComponent implements OnInit {

    miFormulario: FormGroup = this.builder.group({
        genero: ["M", Validators.required],
        notificaciones: [true, Validators.required],
        condiciones: [false, Validators.requiredTrue]
    });

    persona = {
        genero: "F",
        notificaciones: false
    };

    constructor(
        private builder: FormBuilder
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        this.miFormulario.reset({
            ...this.persona,
            condiciones: false
        });

        this.miFormulario.valueChanges
            .subscribe({
                next: (v) => {
                    const value = { ...v };
                    delete value.condiciones;

                    this.persona = value;
                },
                error: (e) => {
                    console.error(e);
                },
                complete: () => {
                    console.log("Cambios en formulario terminado");
                }
            });
    }

    guardar() {
        const value = { ...this.miFormulario.value };
        delete value.condiciones;

        this.persona = value;
    }

}
