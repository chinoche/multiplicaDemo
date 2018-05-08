import {Component, Input, OnInit} from '@angular/core';
import { GithubService } from '../../services/github/github.service';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {

  @Input() url: string;
  repos: any[];
  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepos(this.url).subscribe((repos: any[]) => {
      console.warn(repos);
      this.repos = repos;
    });
  }

}
