import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';

const routes: Routes = [
  {path:'',component:TopheadingComponent}, //home
  {path:'tech',component:TechnewsComponent}, //technews
  {path:'business',component:BusinessnewsComponent}, //businessnews
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
