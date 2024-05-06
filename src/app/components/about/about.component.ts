import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  loading: boolean = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => { this.loading = false }, 1500)
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)
        window.scrollTo(0, 0)
      else
        return;
    })
  }


}
