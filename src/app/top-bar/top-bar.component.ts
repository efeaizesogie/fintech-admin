import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  searchInput: string = '';
  showMenu: boolean = false;

  constructor(private searchService: SearchService, private route: ActivatedRoute) { }

  isDashboardRoute() {
    return this.route.snapshot.routeConfig?.path === '';
  }

  isUsersRoute() {
    return this.route.snapshot.routeConfig?.path === 'users';
  }

  updateSearch() {
    this.searchService.setSearchInput(this.searchInput);
  }

  showNavMenu() {
    this.showMenu = true;
  }

  closeNavMenu() {
    this.showMenu = false;
  }
}
