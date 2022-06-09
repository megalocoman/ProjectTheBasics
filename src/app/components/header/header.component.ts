import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/directives/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;

  constructor(
    private httpRequestData: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.httpRequestData.storeRecipes();
  }

  onFetchData() {
    this.httpRequestData.fetchRecipe().subscribe();
  }

  onLogout() {
    this.isAuthenticated = false;
    this.router.navigate(['/auth']);
  }
}
