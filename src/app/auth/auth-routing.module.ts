import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from 'src/app/auth/pages/registro/registro.component';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';


const routes: Routes = [
    {
        path: "",
        children: [
            { path: "registro", component: RegistroComponent },
            { path: "login", component: LoginComponent },
            { path: "**", redirectTo: "registro" },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
