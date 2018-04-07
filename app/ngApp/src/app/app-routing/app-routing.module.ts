import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {LoginFormComponent} from "../login-form/login-form.component";



const appRoutes: Routes = [

  {

    path: "login",

component: LoginFormComponent

}

];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],

exports: [RouterModule]

})

export class AppRoutingModule { }
