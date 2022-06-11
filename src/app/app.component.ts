import { LoggingService } from './logging.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private authServeice: AuthService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.authServeice.autoLogin();
    this.loggingService.printLog('log appcomponnent');
  }
}
