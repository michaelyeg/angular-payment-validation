import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreditCardValidator } from 'angular-cc-library';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'payment-form',
  templateUrl: './app.component.html'
})

export class AppComponent {
  paymentForm: FormGroup;
  displayMessage: string;

  constructor(private fb: FormBuilder) {

    /* Declare Reactive Form Group here */
    this.paymentForm = this.fb.group({
      card_holder_name: ['', [Validators.required, Validators.minLength(1)]],
      card_number: ['', [Validators.required, Validators.minLength(1), CreditCardValidator.validateCCNumber]],
      expiry_month: ['', [Validators.required, Validators.pattern('^\\d{2}$'), Validators.max(12)]],
      expiry_year: ['', [Validators.required, Validators.pattern('^\\d{4}$')]],
      cvc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
    });
  }

  submitForm() {
    /* Change the display message on button click / submit form */
    if (this.paymentForm.valid) {
      this.displayMessage = 'Payment Successful!';
    } else {
      this.displayMessage = 'Payment Failed!';
    }
  }
}
