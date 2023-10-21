import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  totalDebit: number = 0;
  totalCredit: number = 0;
  totalDisbursement: number = 0;
  totalUsers: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.totalCredit$.subscribe((totalCredit) => {
      this.totalCredit = totalCredit;

    });

    this.dataService.totalDebit$.subscribe((totalDebit) => {
      this.totalDebit = totalDebit;

    });

    this.dataService.totalDisbursement$.subscribe((totalDisbursement) => {
      this.totalDisbursement = totalDisbursement;
    });

    this.dataService.totalUsers$.subscribe((totalUsers) => {
      this.totalUsers = totalUsers;
    });
  }

}
