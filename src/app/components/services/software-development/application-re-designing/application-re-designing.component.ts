import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-re-designing',
  templateUrl: './application-re-designing.component.html',
  styleUrls: ['./application-re-designing.component.css']
})
export class ApplicationReDesigningComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
