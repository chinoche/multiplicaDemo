import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import {SearchUserComponent} from '../../components/search-user/search-user.component';
import {GithubProfileComponent} from '../../components/github-profile/github-profile.component';

const routes: Routes = [
  { path: 'searchUser', component: SearchUserComponent },
  { path: 'profile', component: GithubProfileComponent, canActivate: [AuthGuard] },
  { path: '**', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
