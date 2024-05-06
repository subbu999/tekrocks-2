import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-it-consulting',
  templateUrl: './it-consulting.component.html',
  styleUrls: ['./it-consulting.component.css']
})
export class ItConsultingComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }

}
