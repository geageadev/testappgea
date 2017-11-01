import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module'
import { MenuoneComponent } from '../menuone//menuone.component';
import { MenutwoComponent } from '../menutwo/menutwo.component';
import { MenuthreeComponent } from '../menuthree/menuthree.component';


@NgModule({
    imports: [DashboardRoutingModule],
    declarations:[MenuoneComponent,MenutwoComponent,MenuthreeComponent],
    exports:[DashboardRoutingModule]
})

export class DashboardModule{}
