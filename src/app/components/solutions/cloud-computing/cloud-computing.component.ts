import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cloud-computing',
  templateUrl: './cloud-computing.component.html',
  styleUrls: ['./cloud-computing.component.css']
})
export class CloudComputingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
