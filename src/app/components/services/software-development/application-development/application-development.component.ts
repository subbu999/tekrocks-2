import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-development',
  templateUrl: './application-development.component.html',
  styleUrls: ['./application-development.component.css']
})
export class ApplicationDevelopmentComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }
}
