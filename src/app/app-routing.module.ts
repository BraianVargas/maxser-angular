import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AboutComponent } from './component/routes/about/about.component';
import { EnterpriseComponent } from './component/routes/enterprise/enterprise.component';
import { EventsComponent } from './component/routes/events/events.component';
import { IndexComponent } from './component/routes/index/index.component';
import { ServiceComponent } from './component/routes/service/service.component';

const routes: Route[] = [
  { path : '', component : IndexComponent },
  { path : 'about', component : AboutComponent },
  { path : 'enterprise', component : EnterpriseComponent },
  { path : 'events', component : EventsComponent},
  { path : 'service', component : ServiceComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }