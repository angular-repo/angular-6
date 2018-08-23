import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertsearchComponent } from './property/propertsearch/propertsearch.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DataentryComponent } from './data-entry/dataentry/dataentry.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'propertysearch',component:PropertsearchComponent},
  {path:'profile',component:ProfileComponent},
  {path:'dataentry',component:DataentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
