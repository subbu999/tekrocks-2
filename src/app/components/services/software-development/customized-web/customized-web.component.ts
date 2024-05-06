import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customized-web',
  templateUrl: './customized-web.component.html',
  styleUrls: ['./customized-web.component.css']
})
export class CustomizedWebComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
