import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  getMenu = function () {
    fetch(`http://localhost:3000/menus`, {
      method: 'get'
      // headers: {
      //   "Content-Type": "application/json; charset=utf-8",
      // }
    }).then(res => res.json()).then(res => {
      this.menus = res;
    });
  }
  constructor() {
    this.getMenu();
  }

  ngOnInit() {
  }

}
