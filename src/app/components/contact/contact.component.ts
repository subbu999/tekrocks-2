import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  loading: boolean = true;
  myForm!: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1500)
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      phone: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      yourMessage: ['', Validators.required],
    });

  }
  onFormSubmit() {
    console.log(this.myForm.value);
  }

}
