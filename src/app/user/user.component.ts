import { Component, OnInit } from '@angular/core';
import { DataService } from '../pass-data.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  fileSrc = '../assets/geeta/chapter-1/';
  dataFromChapter: any = [];
  constructor(private dataService: DataService, private router: Router) { }

  onProgress = (e) => {
    console.log(e);
  }

  callBackFn = (e) => {
    console.log(e);
  }

  ngOnInit() {
    this.dataFromChapter = this.dataService.getData();
    console.log(this.dataFromChapter);
    this.fileSrc = '../../assets/geeta/Chapter-01/Gita-Chapter-01-1.pdf';

    if (this.dataFromChapter) {
      setTimeout(() => {
        $("#flipbook").turn({
          width: 800,
          height: 600,
          autoCenter: true
        });
      }, 1000);
    } else {
      this.router.navigate(['./login']);
    }
  }
}
