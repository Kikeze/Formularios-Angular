import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from 'src/app/auth/auth-routing.module';
import { RegistroComponent } from 'src/app/auth/pages/registro/registro.component';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';


@NgModule({
    declarations: [
        RegistroComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AuthModule { }
