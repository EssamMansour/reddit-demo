import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsComponent } from './feeds.component';
import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedCardComponent } from './feed-card/feed-card.component';
import { FeedsService } from './feeds.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FeedsListComponent } from './feeds-list/feeds-list.component';
import { FeedDetailsComponent } from './feed-details/feed-details.component';


@NgModule({
  declarations: [
    FeedsComponent,
    FeedCardComponent,
    FeedsListComponent,
    FeedDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FeedsRoutingModule,
    SharedModule
  ],
  providers: [FeedsService]
})
export class FeedsModule { }
