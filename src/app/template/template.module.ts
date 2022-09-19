import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateRoutingModule } from 'src/app/template/template-routing.module';
import { BasicosComponent } from 'src/app/template/basicos/basicos.component';
import { DinamicosComponent } from 'src/app/template/dinamicos/dinamicos.component';
import { SwitchesComponent } from 'src/app/template/switches/switches.component';
import { CustomMinDirective } from 'src/app/template/directives/custom-min.directive';


@NgModule({
    declarations: [
        BasicosComponent,
        DinamicosComponent,
        SwitchesComponent,
        CustomMinDirective,
    ],
    imports: [
        CommonModule,
        TemplateRoutingModule,
        FormsModule,
    ]
})
export class TemplateModule { }
