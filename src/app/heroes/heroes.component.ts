import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../pass-data.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService, private dataService: DataService) {
    this.fetchHeros();
  }

  fetchHeros = function () {
    this.spinner.show();
    fetch('http://localhost:3000/heros')
      .then(res => res.json())
      .then(res => {
        this.spinner.hide();
        this.heroes = res;
        return res;
      });
  };

  deleteHero(hero: any): void {
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

  onSelect(hero: any): void {
    this.dataService.setData(hero);
  }
}
