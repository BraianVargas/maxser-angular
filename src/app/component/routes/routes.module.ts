import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { AboutComponent } from './about/about.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
import { EventsComponent } from './events/events.component';
import { GarantyComponent } from './garanty/garanty.component';
import { ServiceComponent } from './service/service.component';




@NgModule({
    declarations: [
        IndexComponent,
        AboutComponent,
        EnterpriseComponent,
        EventsComponent,
        GarantyComponent,
        ServiceComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class RoutesModule { }