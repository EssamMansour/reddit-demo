import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageModel } from '../../models/page.model';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  @Input() paging: PageModel;
  @Output() changePage= new EventEmitter<{beforeID?: string, afterID?: string}>();;

  constructor() { }

  ngOnInit(): void {
  }
  changePageHandler(data: {beforeID?: string, afterID?: string}) {
    this.changePage.emit(data)
  }
}
