import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { FeedsService } from '../feeds.service';

import { FeedDetailsComponent } from './feed-details.component';

let feedsServiceStub: Partial<FeedsService>= {
  selectecFeed: null
}; 

let routerSpy = {navigate: jasmine.createSpy('navigate')};
 

describe('FeedDetailsComponent', () => {
  let component: FeedDetailsComponent;
  let fixture: ComponentFixture<FeedDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FeedDetailsComponent ],
      providers: [
        { provide: FeedsService, useValue: feedsServiceStub },
        {provide: Router, useValue: routerSpy},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = null;

  })
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to the list page if no selecteditem ', () => {

    component.ngOnInit()
    expect(routerSpy.navigate).toHaveBeenCalledWith(['feeds']);
  });

  it('should not navigate if there is selecteditem ', () => {

    const item = {data: {
      thumbnail: 'string',
      num_comments: 'string',
      author: 'string',
      score: 'string',
      title: 'string',
      selftext: '',
      url: 'string'
    }}
    feedsServiceStub.selectecFeed = item
    fixture.detectChanges();
    component.ngOnInit()
    expect(component.selectedItem).toEqual(item);
  });
});
