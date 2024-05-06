import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-app-development',
  templateUrl: './mobile-app-development.component.html',
  styleUrls: ['./mobile-app-development.component.css']
})
export class MobileAppDevelopmentComponent implements OnInit {
  loading: boolean = true;
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
