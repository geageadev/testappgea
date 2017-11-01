import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { MenuoneComponent } from '../menuone//menuone.component';
import { MenutwoComponent } from '../menutwo/menutwo.component';
import { MenuthreeComponent } from '../menuthree/menuthree.component';

const menuRoutes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children:
            [
                {path: 'menuone', component: MenuoneComponent},
                {path: 'menutwo', component: MenutwoComponent},
                {path: 'menuthree', component: MenuthreeComponent}
            ]
    }
]

@NgModule(
    {
        imports: [RouterModule.forChild(menuRoutes)],
        exports: [RouterModule]
    }
)

export class DashboardRoutingModule {}