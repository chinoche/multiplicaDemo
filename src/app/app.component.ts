import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { NotificationService } from './services/notification/notification.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Repositorio multiplica';
  sidebarVisible = false;

  constructor( private snackBar: MatSnackBar,
               private ns: NotificationService,
               private router: Router,
               public appService: AppService) {
  }
  ngOnInit() {
    this.ns.notification$
      .subscribe((notification) => this.showNotification(notification));
  }

  activeUser() {
    this.sidebarVisible = null !== localStorage.getItem('appState')
    return null !== localStorage.getItem('appState');
  }

  showNotification(notification) {
    this.snackBar.open(notification, 'Ok', {
      duration: 3000
    });
  }

  newSearch() {
    this.appService.destroy().then(() => {
      this.router.navigate(['searchUser']);
    });
  }
}
