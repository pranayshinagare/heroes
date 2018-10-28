import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../pass-data.service';
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Hero } from '../hero';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {
  errorHandle = function () {
    let isValid = true;

    if (!this.heroName) {
      isValid = false;
      this.isValidHero = true;
    }

    if (!this.tags) {
      isValid = false;
      this.isValidTag = true;
    }

    if (!this.imageUrl) {
      isValid = false;
      this.isValidPath = true;
    }

    return isValid;
  }

  createHero(heroName, tags, imageUrl, hero: Hero): void {
    if (!this.errorHandle()) {
      this.toastr.error('Please enter valid data');
    } else {
      if (!this.masterId) { // create
        this.spinner.show();
        fetch(`http://localhost:3000/heros`, {
          method: 'post',
          headers: {
            "Content-Type": "application/json; charset=utf-8",
          },
          body: JSON.stringify({ name: heroName, url: imageUrl, qualities: tags })
        })
          .then(res => res.json())
          .then(res => {
            // this.heroes.push(res);
            this.heroName = null;
            this.tags = null;
            this.imageUrl = null;
            this.spinner.hide();
            this.selectedHero = { id: undefined, name: heroName, url: imageUrl, qualities: tags };
            this.toastr.success('Hero added successfully');
            this.router.navigate(['./heroes']);
          });
      } else { // update
        this.spinner.show();
        fetch(`http://localhost:3000/heros/${this.masterId}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name: heroName, qualities: tags, url: imageUrl })
        })
          .then(res => res.json())
          .then(res => {
            // this.fetchHeros();
            this.masterId = null;
            this.heroName = null;
            this.tags = null;
            this.imageUrl = null;
            this.spinner.hide();
            this.selectedHero = { name: heroName, url: imageUrl, qualities: tags };
            this.toastr.success('Hero updated successfully');
            this.router.navigate(['./heroes']);
          });
      }
    }
  }
  constructor(private toastr: ToastrService, private dataService: DataService, private router: Router, private spinner: NgxSpinnerService) {
    this.masterId = null;
    this.selectedHero = null;
    this.heroName = null;
    this.tags = null;
    this.imageUrl = null;
    if (!this.dataService.data) {
    } else {
      this.masterId = this.dataService.data.id;
      this.selectedHero = this.dataService.data;
      this.heroName = this.dataService.data.name;
      this.tags = this.dataService.data.qualities;
      this.imageUrl = this.dataService.data.url;
    }
  }

  ngOnInit() {
  }

}
