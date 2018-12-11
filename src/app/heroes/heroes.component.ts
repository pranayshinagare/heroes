import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../pass-data.service';

@Component({
  selector: 'hero-list',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  // config: Config;

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private dataService: DataService) {
    this.fetchHeros();
    // this.showConfig();
  }

  // showConfigResponse() {
  //   this.dataService.getConfigResponse()
  //     .subscribe(resp => {
  //       const keys = resp.headers.keys();
  //       this.headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  //       this.config = { ...resp.body };
  //     });
  // }

  // showConfig = function () {
  //   this.dataService.getConfig()
  //     .subscribe((data: Config) => this.config = { ...data }, 
  //     error => this.error = error
  //     );
  // }

  fetchHeros = function () {
    this.spinner.show();
    fetch('http://localhost:3000/heros')
      .then(res => res.json())
      .then(res => {
        this.spinner.hide();
        this.heroes = res;
        return res;
      });
  }

  deleteHero(hero): void {
    fetch(`http://localhost:3000/heros/${hero.id}`, {
      method: 'delete',
    })
      .then(res => res.json())
      .then(res => {
        this.fetchHeros();
        this.toastr.success('Data deleted successfully');
      });
  }

  ngOnInit() {
  }

  navigateToCreate() {
    this.dataService.setData(null);
  }

  onSelect(hero): void {
    this.dataService.setData(hero);
  }
}