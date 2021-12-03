import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagingComponent } from './paging.component';

describe('PagingComponent', () => {
  let component: PagingComponent;
  let fixture: ComponentFixture<PagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit changePage', () => {
    let spy = spyOn(component.changePage, 'emit').and.callThrough();

    const data = {beforeID: '1' , afterID: '2'}
    component.changePageHandler(data)
    expect(spy).toHaveBeenCalledWith(data);
  });
});
