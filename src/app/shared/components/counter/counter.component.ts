import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AVAILIBLE_FEEDS_COUNT } from 'src/app/appConfig';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Input() activeItem: string

  @Output() count = new EventEmitter<string>();

  availibleCounts: string[] = AVAILIBLE_FEEDS_COUNT

  constructor() { }

  ngOnInit(): void {
  }

  changePageSize() {
    this.count.emit(this.activeItem)
  }

}
