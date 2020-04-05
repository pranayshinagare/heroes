import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { DataService } from '../pass-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  list: any = [];
  constructor(private toastr: ToastrService, private router: Router, private dataService: DataService) {
    let pagesCountArray = [15, 40, 24, 20, 13, 19, 13, 15, 15, 16, 24, 8, 17, 12, 10, 10, 13, 34];
    pagesCountArray.map((count, i) => {
      let item = {
        'name': `Chapter-0${i+1}`,
        'id': i+1,
        'pagesCount': count,
        'pages': []
      }
      for (let j = 1; j <= item.pagesCount; j++) {
        let datum = {
          'pathName': `../../assets/geeta/${item.name}/Gita-${item.name}-${j}.pdf`,
          'pageId': j
        }
        item.pages.push(datum);
      }
      this.list.push(item);
    });

    console.log(this.list);
  }

  ngOnInit() {
  }

  openChapter = (data) => {
    this.dataService.setData(data);
    this.router.navigate(['./user']);
  }
}
