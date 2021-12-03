import { Component, OnInit } from '@angular/core';

import { PageModel } from '../shared/models/page.model';
import { SharedService } from '../shared/services/shared.service';
import { FeedModel } from './feed.model';
import { FeedsService } from './feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  pageSize: string;
  paging: PageModel;
  feeds: FeedModel[];
  constructor(private feedsService: FeedsService, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.pageSize = this.sharedService.pageSize
    this.renderFeeds()
  }

  changePage(data: {beforeID?: string, afterID?: string}, scrollTarget: HTMLElement) {
    this.renderFeeds({beforeID: data.beforeID, afterID: data.afterID})
    scrollTarget.scrollIntoView({behavior: 'smooth'});
  }

  changePageSize(count: string) {
    this.sharedService.pageSize = count
    this.pageSize = count
    this.renderFeeds()
  }

  renderFeeds (data: {beforeID?: string, afterID?: string} = {}) {
    //can implement loading
    this.feedsService.getFeeds({count: this.pageSize, before: data.beforeID, after: data.afterID}).subscribe((res)=> {
      this.paging = this.feedsService.paging
      this.feeds = res
    })
  }
}
