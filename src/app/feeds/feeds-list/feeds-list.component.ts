import { Component, Input, OnInit } from '@angular/core';
import { FeedModel } from '../feed.model';

@Component({
  selector: 'app-feeds-list',
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {

  @Input() feedsList: FeedModel[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
