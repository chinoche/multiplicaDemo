import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { AppService } from '../../app.service';
import { NotificationService } from '../../services/notification/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  model: any = {};

  constructor(private githubService: GithubService,
              private appService: AppService,
              private ns: NotificationService,
              private router: Router) { }

  ngOnInit() {
  }

  search(user) {
    this.githubService.searchUser(user).subscribe((response) => {
      this.appService.set('userInfo', response);
      this.router.navigate(['profile']);
    },
    (error) => {
      this.ns.emit(error.error.message);
    });
  }

}
