import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-peoplesoft-training',
  templateUrl: './peoplesoft-training.component.html',
  styleUrls: ['./peoplesoft-training.component.css']
})
export class PeoplesoftTrainingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
