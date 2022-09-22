import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailPattern, nombreCompletoPattern, yaEstaRegistrado } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';


@Component({
    selector: 'app-registro',
    templateUrl: 'registro.component.html',
    styleUrls: ['registro.component.css']
})
export class RegistroComponent implements OnInit {

    miFormulario: FormGroup = this.builder.group({
        nombre: ["", [Validators.required, Validators.pattern(this.ValidatorSvc.nombreCompletoPattern)]],
        email: ["", [Validators.required, Validators.pattern(this.ValidatorSvc.emailPattern)], [this.EMailValidator]],
        username: ["", [Validators.required, this.ValidatorSvc.yaEstaRegistrado]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmar: ["", [Validators.required]]
    }, {
        validators: [this.ValidatorSvc.camposIguales("password","confirmar")]
    });

    get emailErrorMsg(): string {
        const errors = this.miFormulario.get("email")?.errors;
        const required = (errors === null) ? false : errors!["required"];
        const pattern = (errors === null) ? false : errors!["pattern"];
        const registrado = (errors === null) ? false : errors!["correoRegistrado"];

        if( required ) {
            return "El correo es obligatorio";
        }

        if( pattern ) {
            return "El valor especificado no es un correo";
        }

        if( registrado ) {
            return "El correo ya ha sido registrado con anterioridad";
        }

        return "";
    }

    constructor(
        private builder: FormBuilder,
        private ValidatorSvc: ValidatorService,
        private EMailValidator: EmailValidatorService
    ) {
        // Do nothing
    }

    ngOnInit(): void {
        this.miFormulario.reset({
            nombre: "Alguien nuevo",
            email: "test1@test.com",
            username: "algunxpersona",
            password: "123456",
            confirmar: "123456"
        });
    }

    campoInvalido(campo: string) {
        return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
    }

    emailRequired() {
        const email = this.miFormulario.get("email");
        const errors = email?.errors;
        const required = (errors === null) ? false : errors!["required"];

        return required && email?.touched;
    }

    emailPattern() {
        const email = this.miFormulario.get("email");
        const errors = email?.errors;
        const pattern = (errors === null) ? false : errors!["pattern"];

        return pattern && email?.touched;
    }

    emailRegistrado() {
        const email = this.miFormulario.get("email");
        const errors = email?.errors;
        const registrado = (errors === null) ? false : errors!["correoRegistrado"];

        console.log("Registrado", registrado);

        return registrado && email?.touched;
    }

    guardar() {
        console.log(this.miFormulario.value);
        this.miFormulario.markAllAsTouched();
    }

}
