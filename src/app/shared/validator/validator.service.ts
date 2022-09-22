import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";


@Injectable({
    providedIn: 'root'
})
export class ValidatorService {
    public nombreCompletoPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
    public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

    constructor() {
        // Do nothing
    }

    public yaEstaRegistrado (control: FormControl): ValidationErrors | null {
        const valor = control.value?.trim().toLowerCase();

        if(valor === "alguien") {
            return {yaExiste: true}
        }

        return null;
    }

    public camposIguales(campo1: string, campo2: string) {
        return (group: AbstractControl): ValidationErrors | null => {
            const password = group.get(campo1)!.value;
            const confirmar = group.get(campo2)!.value;

            if( password === confirmar ) {
                group.get(campo2)!.setErrors(null);
                return null;
            }
            else {
                group.get(campo2)!.setErrors({ camposIguales: false });
                return {
                    camposIguales: false
                };
            }
        }
    }

}
