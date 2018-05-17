import { Component, Input, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import { UtilsService } from '../../services/utils/utils.service';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() url: string;
  repos: any[];
  constructor(
    private appService: AppService,
    private githubService: GithubService,
    private router: Router,
    private utils: UtilsService) { }

  ngOnInit() {
    this.githubService.getContent(this.url).subscribe((repos: any[]) => {
      this.repos = repos;
    });
  }

  navigateToIssues (repoInfo) {
    repoInfo.issues_url = this.utils.removeUrlParams(repoInfo.issues_url);
    this.appService.set('repoInfo', repoInfo);
    this.router.navigate(['issues']);
  }
}
