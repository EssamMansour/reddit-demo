import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { FeedsService } from './feeds.service';

describe('FeedsService', () => {
  let service: FeedsService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {

    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(FeedsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get the feeds and set the pageing', () => {
    const response = {
      before:'1',
      after:'12321',

      }
    httpClientSpy.get.and.returnValue(of(response));

    service.getFeeds({count: '5', after: 'test'}).subscribe((data)=> {
      expect(httpClientSpy.get.calls.count()).toBe(1);
      expect(service.paging).toBe({beforeID:'1', aferID:'12321'}); 
    })
  });

  it('should set the selected Feed ', () => {
    const feed = {data: {
      thumbnail: 'string',
      num_comments: 'string',
      author: 'string',
      score: 'string',
      title: 'string',
      selftext: '',
      url: 'string'
    }}
    service.selectFeed(feed)
    expect(service.selectecFeed).toEqual(feed);
  });
});
