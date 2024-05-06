import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permanent-staffing',
  templateUrl: './permanent-staffing.component.html',
  styleUrls: ['./permanent-staffing.component.css']
})
export class PermanentStaffingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
