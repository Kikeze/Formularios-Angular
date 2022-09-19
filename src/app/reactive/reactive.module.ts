import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from 'src/app/reactive/reactive-routing.module';
import { BasicosComponent } from 'src/app/reactive/basicos/basicos.component';
import { DinamicosComponent } from 'src/app/reactive/dinamicos/dinamicos.component';
import { SwitchesComponent } from 'src/app/reactive/switches/switches.component';


@NgModule({
    declarations: [
        BasicosComponent,
        DinamicosComponent,
        SwitchesComponent,
    ],
    imports: [
        CommonModule,
        ReactiveRoutingModule,
    ]
})
export class ReactiveModule { }
