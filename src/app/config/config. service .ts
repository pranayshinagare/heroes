import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ConfService {
  configUrl = 'assets/config.json';

  getConfig() {
    return this.http.get(this.configUrl);
  }
  constructor(private http: HttpClient) {
    console.log(http);
  }
}