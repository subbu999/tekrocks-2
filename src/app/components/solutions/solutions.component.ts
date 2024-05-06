import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css']
})
export class SolutionsComponent implements OnInit {
  loading: boolean = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => { this.loading = false }, 1500)
  }

}
