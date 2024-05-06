import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dot-net',
  templateUrl: './dot-net.component.html',
  styleUrls: ['./dot-net.component.css']
})
export class DotNetComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
