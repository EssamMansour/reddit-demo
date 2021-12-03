import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FeedsComponent } from './feeds.component';
import { FeedsService } from './feeds.service';
import { SharedService } from '../shared/services/shared.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

let response = [{data: {
  thumbnail: 'string',
  num_comments: 'string',
  author: 'string',
  score: 'string',
  title: 'string',
  selftext: '',
  url: 'string'
}}]
let feedsServiceStub: Partial<FeedsService>= {
  selectFeed () {

  },
  getFeeds() {
    return of(response)
  }
}; 

let sharedServiceStub : Partial<SharedService>= {
  pageSize: '25'
}; 
describe('FeedsComponent', () => {
  let component: FeedsComponent;
  let fixture: ComponentFixture<FeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ FeedsComponent ],
      providers: [
        { provide: FeedsService, useValue: feedsServiceStub },
        { provide: SharedService, useValue: sharedServiceStub },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the page size from the shared and render the feeds in component ngOnInit', () => {
    let spy = spyOn(component, 'renderFeeds').and.callThrough();
    
    component.ngOnInit()
    expect(component.pageSize).toEqual('25');
    expect(spy).toHaveBeenCalled();
  });

  it('should get the new feeds when changePage ', () => {
    let spy = spyOn(component, 'renderFeeds').and.callThrough();
    const data = {beforeID:'1', afterID: '2'}
    var dummyElement = document.createElement('div');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);
    let spyElement = spyOn(dummyElement, 'scrollIntoView').and.callThrough();
    component.pageSize = '20'
    component.changePage(data, dummyElement)
    expect(spy).toHaveBeenCalledWith(data);
    expect(dummyElement.scrollIntoView).toHaveBeenCalledWith({behavior: 'smooth'});
  });

  it('should render feeds and change the pagesize ', () => {
    let spy = spyOn(component, 'renderFeeds').and.callThrough();
    component.changePageSize('25')
    expect(component.pageSize).toEqual('25')
    expect(sharedServiceStub.pageSize).toEqual('25')
    expect(spy).toHaveBeenCalled();
  });

  it('should call  getfeeds and change the feeds ', () => {
    const data = {beforeID:'1', afterID: '2'}

    let spy = spyOn(feedsServiceStub, 'getFeeds').and.callThrough();
    component.renderFeeds(data)
    expect(component.pageSize).toEqual('25')
    expect(spy).toHaveBeenCalledWith({count:'25', before: '1', after:'2'});
    feedsServiceStub.getFeeds({count:'25', before: '1', after:'2'}).subscribe(()=> {
      expect(component.feeds).toEqual(response)
    })
  });
});
