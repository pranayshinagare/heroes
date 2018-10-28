import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from '../pass-data.service';

@Component({
  selector: 'hero-list',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero: Hero;

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
  }

  deleteHero(hero): void {
    fetch(`http://localhost:3000/heros/${hero.id}`, {
      method: 'delete',
      // body: JSON.stringify({name: heroName, qualities: ['Front end', 'Back end']})
    })
      .then(res => res.json())
      .then(res => {
        this.fetchHeros();
        this.toastr.success('Hero deleted successfully');
      });
  }

  ngOnInit() {
  }

  navigateToCreate() {
    this.dataService.setData(null);
  }

  onSelect(hero: Hero): void {
    // this.selectedHero = hero;
    // this.masterId = hero.id;
    // this.heroName = hero.name;
    // this.tags = hero.qualities;
    // this.imageUrl = hero.url;
    this.dataService.setData(hero);
  }
}