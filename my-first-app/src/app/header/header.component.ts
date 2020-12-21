import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = true;

  constructor(
    private dataStorageService: DataStorageService
  ) {}

  ngOnInit() {
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    // this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
  }

  ngOnDestroy() {
  }
}
