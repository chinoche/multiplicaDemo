import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  user: any;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.user = this.appService.get('userInfo');
  }

  searchAnother() {
    this.appService.destroy().then(() => {
      this.router.navigate(['searchUser']);
    });
  }

}
