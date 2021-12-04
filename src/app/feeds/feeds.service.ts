import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageModel } from '../shared/models/page.model';
import { FeedModel } from './feed.model';

@Injectable({
  providedIn: 'any'
})
export class FeedsService {
  private baseUrl = environment.baseUrl;
  private _pageing: PageModel = {}
  public selectecFeed: FeedModel = null
  constructor(private http: HttpClient) { }


  getFeeds (callParams: {count: string, after?: string, before?: string}) {
    let pageingParams = callParams.before ? `&before=${callParams.before}` : ''
    pageingParams += callParams.after ? `&after=${callParams.after}` : ''
    return this.http.get(`${this.baseUrl}?limit=${callParams.count}${pageingParams}`).pipe(map((res: any) => {
    const  data = res.data
    this.paging = {beforeID:data.before, aferID: data.after}
      return data.children
    }))
  }

  set paging(data: {beforeID?: string, aferID?: string} ) {
    this._pageing = {...data, prev: !!data.beforeID, next: !!data.aferID }
  } 

  get paging() {
   return this._pageing
  }

  selectFeed(feedItem: FeedModel) {
      this.selectecFeed = feedItem
  }
}
