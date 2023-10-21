import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchInputSubject = new BehaviorSubject<string>('');
  searchInput$: Observable<string> = this.searchInputSubject.asObservable();

  setSearchInput(input: string) {
    this.searchInputSubject.next(input);
  }


}