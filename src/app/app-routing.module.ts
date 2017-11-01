import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponentComponent } from './login-component/login-component.component';

const appRoutes: Routes = [
    {
      path: '',
      component: LoginComponentComponent
    }
  ]

  @NgModule(
      {
          imports: [RouterModule.forRoot(appRoutes,{enableTracing: true})],
          exports: [RouterModule]
      }
  )

  export class AppRoutingModule {}