import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-to-hire-staffing',
  templateUrl: './contract-to-hire-staffing.component.html',
  styleUrls: ['./contract-to-hire-staffing.component.css']
})
export class ContractToHireStaffingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
