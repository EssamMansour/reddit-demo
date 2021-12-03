import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  pageSize: string;
  
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.pageSize = this.sharedService.pageSize;
  }

  changePageSize(count: string) {
    this.sharedService.pageSize = count;
    this.pageSize = count;
  }

}
