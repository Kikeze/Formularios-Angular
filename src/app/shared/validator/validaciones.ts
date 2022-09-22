import { FormControl } from "@angular/forms";


export const nombreCompletoPattern: string = "([a-zA-Z]+) ([a-zA-Z]+)";
export const emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const yaEstaRegistrado = (control: FormControl) => {
    const valor = control.value?.trim().toLowerCase();

    if(valor === "alguien") {
        return {yaExiste: true}
    }

    return null;
}


