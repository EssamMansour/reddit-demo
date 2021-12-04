import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isIn = false;   // store state

  constructor() { }

  ngOnInit(): void {
  }
  toggleState() { // click handler
      let bool = this.isIn;
      this.isIn = bool === false ? true : false; 
  }
}
