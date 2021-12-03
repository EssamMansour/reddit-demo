import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from './core/core.module';
import { FeedsModule } from './feeds/feeds.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {path:'', loadChildren: ()=> HomeModule},
  {path:'feeds', loadChildren: ()=> FeedsModule},
  {path:'**', redirectTo: ''}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
