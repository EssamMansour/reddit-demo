import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedDetailsComponent } from './feed-details/feed-details.component';
import { FeedsComponent } from './feeds.component';

const routes: Routes = [
  {path:"", component: FeedsComponent},
  {path:"details", component: FeedDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  
  exports: [RouterModule]
})
export class FeedsRoutingModule { }
