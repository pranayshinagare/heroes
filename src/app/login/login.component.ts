import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  createLogin = function (email, password) {
    let userName = '123';
    let passwd = '123';

    if(email != userName || password != passwd){
      this.toastr.error('Something went wrong');
    } else {
      this.router.navigate(['./heroes']);
    }
  }
  constructor(private toastr: ToastrService,  private router: Router) { }

  ngOnInit() {
  }
}
