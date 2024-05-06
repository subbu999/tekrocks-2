import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offshore-staffing',
  templateUrl: './offshore-staffing.component.html',
  styleUrls: ['./offshore-staffing.component.css']
})
export class OffshoreStaffingComponent implements OnInit {

  constructor() { }
  loading: boolean = true;
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
