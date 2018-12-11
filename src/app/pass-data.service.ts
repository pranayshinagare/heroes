import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { HttpClientModule, HttpResponse } from '@angular/common/http';

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  data = null;

  setData(data) {
    this.data = data;
  };

  getData() {
    return this.data;
  };

  configUrl = 'assets/config.json';

  getConfig() {
    console.log(this.http.get<Config>(this.configUrl));
    return this.http.get<Config>(this.configUrl);
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

  constructor(private http: HttpClient) {
    // this.getConfig();
  }
}