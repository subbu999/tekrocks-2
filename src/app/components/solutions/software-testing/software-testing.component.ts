import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-software-testing',
  templateUrl: './software-testing.component.html',
  styleUrls: ['./software-testing.component.css']
})
export class SoftwareTestingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
