import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  totalDebit: number = 0;
  totalCredit: any;
  totalDisbursement: any;
  totalUsers: any;

  private totalCreditSource = new BehaviorSubject<any>(0);
  private totalDebitSource = new BehaviorSubject<any>(0);
  private totalUsersSource = new BehaviorSubject<any>(0);
  private totalDisbursementSource = new BehaviorSubject<any>(0);

  totalCredit$ = this.totalCreditSource.asObservable();
  totalDebit$ = this.totalDebitSource.asObservable();
  totalUsers$ = this.totalUsersSource.asObservable();
  totalDisbursement$ = this.totalDisbursementSource.asObservable();

  setTotalCredit(totalCredit: any) {
    this.totalCreditSource.next(totalCredit);
  }

  setTotalDebit(totalDebit: any) {
    this.totalDebitSource.next(totalDebit);
  }
  setTotalUsers(totalUsers: any) {
    this.totalUsersSource.next(totalUsers);
  }

  setTotalDisbursement(totalDisbursement: any) {
    this.totalDisbursementSource.next(totalDisbursement);
  }

  constructor() { }


}
