import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ODListComponent } from './od-list/od-list.component';
import { OwnersComponent } from './owners/owners.component';
import { PlayersComponent } from './players/players.component';
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'owners', component: OwnersComponent},
  { path: 'players', component: PlayersComponent},
  { path: 'reservations', component: ODListComponent},
  { path: 'stats', component: StatisticsComponent},
  { path: 'login', component: LoginComponent},
  {
    path: '',
    component: NavbarComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'owners', component: OwnersComponent },
      { path: 'players', component: PlayersComponent },
      { path: 'reservations', component: ODListComponent },
      { path: 'stats', component: StatisticsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
