import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedModel } from '../feed.model';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-feed-details',
  templateUrl: './feed-details.component.html',
  styleUrls: ['./feed-details.component.scss']
})
export class FeedDetailsComponent implements OnInit {
  selectedItem: FeedModel = null
  constructor(private feedsService: FeedsService, private router: Router) { }

  ngOnInit(): void {
    this.selectedItem = this.feedsService.selectecFeed
    if(!this.selectedItem) {
      this.router.navigate(['feeds'])
      return;
    }
  }

}
