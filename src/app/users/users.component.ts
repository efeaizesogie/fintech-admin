import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  data: any[] = [
    {
      name: 'Wealth',
      transactionType: 'Bank Transfer',
      transactionMethod: 'Credit',
      amount: '10,000',
      status: 'Success',
      timestamp: '2022-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Efeosa ',
      transactionType: 'Ussd',
      transactionMethod: 'Credit',
      amount: '22,000',
      status: 'Failed',
      timestamp: '2022-12-19',
      username: 'chuckyefe',
      email: "chucky******@gmail.com",
      lastName: "Chuky",
    },
    {
      name: 'Aizesogie ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'chilly',
      email: "chiily******@gmail.com",
      lastName: "chilly",
    },
    {
      name: 'Wealth',
      transactionType: 'Bank transfer',
      transactionMethod: 'Credit',
      amount: '20,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'chizzy',
      email: "chizzy******@gmail.com",
      lastName: "chizzy",
    },
    {
      name: 'Tiny',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '10,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'linda',
      email: "linda******@gmail.com",
      lastName: "linda",
    },
    {
      name: 'Godwin',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '2,000',
      status: 'Failed',
      timestamp: '2020-10-19',
      username: 'okoro',
      email: "okoro******@gmail.com",
      lastName: "okoro",
    },
    {
      name: 'Success',
      transactionType: 'Ussd',
      transactionMethod: 'Credit',
      amount: '15,000',
      status: 'Failed',
      timestamp: '2020-10-19',
      username: 'mikey',
      email: "successmike******@gmail.com",
      lastName: "mike",
    },
    {
      name: 'efeosa',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'efey',
      email: "efey******@gmail.com",
      lastName: "efey",
    },
    {
      name: ' osaibhie',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'treyl',
      email: "trey******@gmail.com",
      lastName: "trey",
    },
    {
      name: 'Nosa',
      transactionType: 'Charges',
      transactionMethod: 'Debit',
      amount: '500',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'rexnosa',
      email: "rexy******@gmail.com",
      lastName: "rex",
    },
    {
      name: 'Blessing',
      transactionType: 'Bank Transfer',
      transactionMethod: 'Credit',
      amount: '100,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'giftbless',
      email: "gifty******@gmail.com",
      lastName: "gift",
    },
    {
      name: 'Promise',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Isaac',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '20,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Jakes',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Failed',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Aizesogie ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'efeosa ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Happy',
      transactionType: 'Ussd',
      transactionMethod: 'Credit',
      amount: '30,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Aizesogie ',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Isreal',
      transactionType: 'Topup',
      transactionMethod: 'Credit',
      amount: '15,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'James',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '20,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'John',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '15,000',
      status: 'Failed',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'osaibhie',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '5,000',
      status: 'Pending',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
    {
      name: 'Mike',
      transactionType: 'Withdrawal',
      transactionMethod: 'Debit',
      amount: '10,000',
      status: 'Success',
      timestamp: '2020-10-19',
      username: 'wealthylee',
      email: "wealth******@gmail.com",
      lastName: "Ben",
    },
  ];

  currentPage = 1;
  itemsPerPage = 9;

  getCurrentPageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.data.slice(startIndex, endIndex);
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
}
