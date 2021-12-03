import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedModel } from '../feed.model';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-feed-card',
  templateUrl: './feed-card.component.html',
  styleUrls: ['./feed-card.component.scss']
})
export class FeedCardComponent implements OnInit {

  @Input() item: FeedModel = null
  constructor(private feedsService: FeedsService, private router: Router) { }

  ngOnInit(): void {
  }

  selectFeed() {
    this.feedsService.selectFeed(this.item)
    this.router.navigate(['feeds', 'details'])
  }
}
