import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

import 'rxjs/add/operator/map';

const BASE_URL = 'https://api.github.com';
const HEADERS = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable()
export class GithubService {

  constructor(private http: HttpClient) { }

  searchUser(user) {
    return this.http.get(`${ BASE_URL }/users/${user}`);
  }

  getRepos(url) {
    return this.http.get(url);
  }

}
