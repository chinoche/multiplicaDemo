import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// custom modules
import { AppMaterialModule } from './modules/app-material/app-material.module';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

// Guards
import { AuthGuard } from './auth.guard';

// Services
import { GithubService } from './services/github/github.service';
// import components
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { GithubProfileComponent } from './components/github-profile/github-profile.component';
import { GithubReposComponent } from './components/github-repos/github-repos.component';
import { AppService } from './app.service';
import { NotificationService } from './services/notification/notification.service';
import { UtilsService } from './services/utils/utils.service';
import { IssuesViewerComponent } from './components/issues-viewer/issues-viewer.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchUserComponent,
    GithubProfileComponent,
    GithubReposComponent,
    IssuesViewerComponent
  ],
  imports: [
    AppMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AppService,
    GithubService,
    NotificationService,
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
