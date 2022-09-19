import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: "template",
        loadChildren: () => import("src/app/template/template.module").then(m => m.TemplateModule)
    },
    {
        path: "reactive",
        loadChildren: () => import("src/app/reactive/reactive.module").then(m => m.ReactiveModule)
    },
    {
        path: "**",
        redirectTo: "template"
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
