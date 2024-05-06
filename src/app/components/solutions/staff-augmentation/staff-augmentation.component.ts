import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-staff-augmentation',
  templateUrl: './staff-augmentation.component.html',
  styleUrls: ['./staff-augmentation.component.css']
})
export class StaffAugmentationComponent implements OnInit {
  loading: boolean = true;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 1000)
  }

}
