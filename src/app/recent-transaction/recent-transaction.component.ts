import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-recent-transaction',
  templateUrl: './recent-transaction.component.html',
  styleUrls: ['./recent-transaction.component.css']
})
export class RecentTransactionComponent implements OnInit {
  data: any[] = [
    {
      name: 'Wealth',
      transactionType: 'Bank Transfer',
      transactionMethod: 'Credit',
      amount: '10,000',
      status: 'Success',
      timestamp: '2022-10-19',
    },
    {
      name: 'Efeosa ',
      transactionType: 'Ussd',
      transactionMethod: 'Credit',
      amount: '22,000',
      status: 'Failed',
      timestamp: '2022-12-19',
    },
    {
      name: 'Aizesogie ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: 'Wealth',
      transactionType: 'Bank transfer',
      transactionMethod: 'Credit',
      amount: '20,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'Tiny',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '10,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'Godwin',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '2,000',
      status: 'Failed',
      timestamp: '2020-10-19',
    },
    {
      name: 'Success',
      transactionType: 'Ussd',
      transactionMethod: 'Credit',
      amount: '15,000',
      status: 'Failed',
      timestamp: '2020-10-19',
    },
    {
      name: 'efeosa',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: ' osaibhie',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: 'Nosa',
      transactionType: 'Charges',
      transactionMethod: 'Debit',
      amount: '500',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'Blessing',
      transactionType: 'Bank Transfer',
      transactionMethod: 'Credit',
      amount: '100,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'Promise',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'Isaac',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '20,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: 'Jakes',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Failed',
      timestamp: '2020-10-19',
    },
    {
      name: 'Aizesogie ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'efeosa ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: 'Happy',
      transactionType: 'Ussd',
      transactionMethod: 'Credit',
      amount: '30,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'Aizesogie ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: 'Isreal',
      transactionType: 'Topup',
      transactionMethod: 'Credit',
      amount: '15,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'James',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '20,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
    {
      name: 'John',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Failed',
      timestamp: '2020-10-19',
    },
    {
      name: 'osaibhie',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '5,000',
      status: 'Pending',
      timestamp: '2020-10-19',
    },
    {
      name: 'Mike',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '10,000',
      status: 'Success',
      timestamp: '2020-10-19',
    },
  ];

  currentPage = 1;
  itemsPerPage = 4;

  filteredData: any[] = this.data;
  searchInput: string = '';

  totalDebit: number = 0;
  totalCredit: number = 0;
  totalDisbursement: any;
  totalUsers: any = this.data.length;



  calculateTotals() {
    for (const transaction of this.data) {
      if (transaction.transactionMethod === 'Debit') {
        this.totalDebit += parseInt(transaction.amount.replace(/,/g, ''), 10);

      } else if (transaction.transactionMethod === 'Credit') {
        this.totalCredit += parseInt(transaction.amount.replace(/,/g, ''), 10);

      }
    }
    const formatCredit = this.formatAmount(this.totalCredit);
    const formatDebit = this.formatAmount(this.totalDebit);
    this.totalDisbursement = this.totalCredit + this.totalDebit;

    const formatDisbursement = this.formatAmount(this.totalDisbursement);

    this.dataService.setTotalDebit(formatDebit);
    this.dataService.setTotalCredit(formatCredit);
    this.dataService.setTotalDisbursement(formatDisbursement);

    this.dataService.setTotalUsers(this.totalUsers);
  }

  formatAmount(amount: number): string {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  updateSearch() {
    this.searchService.setSearchInput(this.searchInput);
  }


  search() {
    this.filteredData = this.data.filter((row) => {
      const searchLower = this.searchInput.toLowerCase();
      const nameLower = row.name.toLowerCase();
      const transactionMethodLower = row.transactionMethod.toLowerCase();
      const transactionTypeLower = row.transactionType.toLowerCase();
      const statusLower = row.status.toLowerCase();

      return (
        nameLower.includes(searchLower) ||
        transactionMethodLower.includes(searchLower) ||
        statusLower.includes(searchLower) ||
        transactionTypeLower.includes(searchLower)
      );
    });
    this.currentPage = 1;
  }
  constructor(private searchService: SearchService, private dataService: DataService) { }

  ngOnInit() {
    this.filteredData = [...this.data];



    this.searchService.searchInput$.subscribe((searchInput) => {
      if (searchInput) {
        this.filteredData = this.data.filter((row) => {
          const searchLower = this.searchInput.toLowerCase();
          const nameLower = row.name.toLowerCase();
          const transactionMethodLower = row.transactionMethod.toLowerCase();
          const transactionTypeLower = row.transactionType.toLowerCase();
          const statusLower = row.status.toLowerCase();

          return (
            nameLower.includes(searchLower) ||
            transactionMethodLower.includes(searchLower) ||
            statusLower.includes(searchLower) ||
            transactionTypeLower.includes(searchLower)
          );
        });
        this.currentPage = 1;
      } else {
        this.filteredData = [...this.data];
      }
    });

    this.calculateTotals();
  }

  getCurrentPageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredData.slice(startIndex, endIndex);
  }


  nextPage() {
    if (this.currentPage < this.getTotalPages()) {
      this.currentPage++;
    }
  }


  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }


  getTotalPages() {
    return Math.ceil(this.data.length / this.itemsPerPage);
  }

  getRowStyle(status: string): any {
    if (status === 'Failed') {
      return { 'background-color': '#ff996634', 'color': '#cc3300' };
    }
    else if (status === 'Success') {
      return { 'background-color': '#99cc3334', 'color': '#339900' };
    }
    else if (status === 'Pending') {
      return { 'background-color': '#ffcc0034', 'color': '#ffcc00' };
    }

    else {
      return {};
    }
  }
  getTypeStyle(status: string): any {
    if (status === 'Failed') {
      return { 'color': '#cc3300' };
    }
    else if (status === 'Success') {
      return { 'color': '#339900' };
    }
    else if (status === 'Pending') {
      return { 'color': '#ffcc00' };
    }

    else {
      return {};
    }
  }



}
