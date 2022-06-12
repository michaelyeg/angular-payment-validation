import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
  paymentForm: FormGroup;
  displayMessage: string;

  constructor() {

    /* Declare Reactive Form Group here */

  }

  submitForm() {
    /* Change the display message on button click / submit form */
  }
}
