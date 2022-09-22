import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { delay, map, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {

    constructor(
        private http: HttpClient
    ) {
        // Do nothing
    }

    validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const email = control.value;
        const params = new HttpParams()
            .set("q", email);

        return this.http.get<Usuario[]>("http://localhost:3000/usuarios", { params })
            .pipe(
                delay(1000),
                map((v) => {
                    if(v.length > 0) {
                        return {
                            correoRegistrado: true
                        }
                    }

                    return null;
                }));
    }

    // registerOnValidatorChange?(fn: () => void): void {
    //     throw new Error('Method not implemented.');
    // }

}


export interface Usuario {
    id:       number;
    email:    string;
    username: string;
}
