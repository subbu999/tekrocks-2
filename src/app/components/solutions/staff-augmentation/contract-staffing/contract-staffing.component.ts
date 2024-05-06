import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contract-staffing',
  templateUrl: './contract-staffing.component.html',
  styleUrls: ['./contract-staffing.component.css']
})
export class ContractStaffingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
