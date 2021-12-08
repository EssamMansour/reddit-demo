import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedsService } from '../feeds.service';

import { FeedCardComponent } from './feed-card.component';

let feedsServiceStub: Partial<FeedsService>= {
  selectFeed () {

  }
}; 
let routerSpy = {
  navigate: jasmine.createSpy('navigate')
};
 
const feed = {data: {
  thumbnail: 'string',
  num_comments: 'string',
  author: 'string',
  score: 'string',
  title: 'string',
  selftext: '',
  url: 'string',
  created: 1212121212
}}

describe('FeedCardComponent', () => {
  let component: FeedCardComponent;
  let fixture: ComponentFixture<FeedCardComponent>;

  beforeEach(async () => {
    

    await TestBed.configureTestingModule({
      declarations: [ FeedCardComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [ 
        { provide: FeedsService, useValue: feedsServiceStub },
        { provide: Router, useValue: routerSpy}
      ]
    })
    .compileComponents();

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should selectFeed', () => {
    let spy = spyOn(feedsServiceStub, 'selectFeed').and.callThrough();
    component.item = feed
    component.selectFeed()
    expect(spy).toHaveBeenCalledWith(feed)
    expect(routerSpy.navigate).toHaveBeenCalledWith(['feeds', 'details']);
  });
});
