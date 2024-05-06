import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dba',
  templateUrl: './dba.component.html',
  styleUrls: ['./dba.component.css']
})
export class DbaComponent implements OnInit {
  loading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
