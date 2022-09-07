import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from './person/person.component';
import { PersonGuardService } from './service/PersonGuard.service';


const routes: Routes = [
  {path:"app-person", component:PersonComponent,canDeactivate:[PersonGuardService]},
  {path:"app-dashboard", component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
