import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() {
  }

  cars = [
    'Ford','Chevrolet','Buick'
  ];

  data = null;

  setData (data) {
    this.data = data;
  };

  getData () {
    return this.data;
  };

  // return {
  //   setData: setData,
  //   getData: getData,
  // };
}