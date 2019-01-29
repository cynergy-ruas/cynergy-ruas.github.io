import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Other Pages to be used in the Router
import { EventsComponent } from './components/events/events.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { TeamComponent } from './components/team/team.component';
import { HallOfFameComponent } from './components/hall-of-fame/hall-of-fame.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'countdown', component: CountdownComponent },
  { path: 'team', component: TeamComponent },
  { path: 'hall-of-fame', component: HallOfFameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
