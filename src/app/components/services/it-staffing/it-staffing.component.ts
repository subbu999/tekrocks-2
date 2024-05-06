import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-staffing',
  templateUrl: './it-staffing.component.html',
  styleUrls: ['./it-staffing.component.css']
})
export class ItStaffingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
