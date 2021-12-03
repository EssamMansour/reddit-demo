import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeedModel } from './feed.model';

@Injectable({
  providedIn: 'any'
})
export class FeedsService {
  private baseUrl = environment.baseUrl;
  private _pageing: {beforeID?: string, aferID?: string, next?: boolean, prev?: boolean} = {}
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

  set paging(pageing: {beforeID?: string, aferID?: string} ) {
    this._pageing = {...pageing, prev: !!pageing.beforeID, next: !!pageing.aferID }
  } 

  get paging() {
   return this._pageing
  }

  selectFeed(feedItem: FeedModel) {
      this.selectecFeed = feedItem
  }
}
