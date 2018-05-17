import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github/github.service';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-issues-viewer',
  templateUrl: './issues-viewer.component.html',
  styleUrls: ['./issues-viewer.component.css']
})
export class IssuesViewerComponent implements OnInit {

  issues: any = null;
  repoInfo: any;

  constructor(
    private appService: AppService,
    private githubService: GithubService) { }

  ngOnInit() {
    this.repoInfo = this.appService.get('repoInfo');
    this.githubService.getContent(this.repoInfo.issues_url).subscribe((response) => {
      this.issues = response;
      console.warn(response);
    });
  }

}
