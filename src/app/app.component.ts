import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean = true;
  title = 'TekRocks IT Services LLC';
  windowScrolled: boolean = false;
  constructor() { }
  @HostListener('window:scroll', []) onWindowScroll() {
    if (window.scrollY > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.scrollY < 10) {
      this.windowScrolled = false;
    }
  }
  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
  }
  onScrollTopClick() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
