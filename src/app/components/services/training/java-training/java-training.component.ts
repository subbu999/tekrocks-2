import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-java-training',
  templateUrl: './java-training.component.html',
  styleUrls: ['./java-training.component.css']
})
export class JavaTrainingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
