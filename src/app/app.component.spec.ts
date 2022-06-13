import { TestBed, async } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {CreditCardDirectivesModule} from 'angular-cc-library';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        CreditCardDirectivesModule
      ],
      providers: []
    }).compileComponents();
  }));


  it('form should be invalid when empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.paymentForm.valid).toBeFalsy();
  });

  it('card number validation should work', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls['card_number'].setValue('1234123412345678');
    expect(app.paymentForm.controls['card_number'].valid).toBeFalsy();
    app.paymentForm.controls['card_number'].setValue('4367778679080754');
    expect(app.paymentForm.controls['card_number'].valid).toBeTruthy();
  }));

  it('expiration date validation should work', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls['expiry_month'].setValue("134");
    app.paymentForm.controls['expiry_year'].setValue("2017");
    expect(app.paymentForm.controls['expiry_month'].valid).toBeFalsy();
    expect(app.paymentForm.controls['expiry_year'].valid).toBeTruthy();
  }));

  it('cvv/cvc validation should work', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls['cvc'].setValue("677");
    expect(app.paymentForm.controls['cvc'].valid).toBeTruthy();
  }));

  it('submit button should display the success message', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls['card_holder_name'].setValue("Mathew Jerome");
    app.paymentForm.controls['card_number'].setValue("4367778679080754");
    app.paymentForm.controls['expiry_month'].setValue("11");
    app.paymentForm.controls['expiry_year'].setValue("2017");
    app.paymentForm.controls['cvc'].setValue("677");
    app.submitForm();
    expect(app.displayMessage).toBe("Payment Successful!");
  }));

  it('submit button should display the failure message', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.paymentForm.controls['card_holder_name'].setValue("Mathew Jerome");
    app.paymentForm.controls['card_number'].setValue("4367778679080754");
    app.paymentForm.controls['expiry_month'].setValue("15");
    app.paymentForm.controls['expiry_year'].setValue("2017");
    app.paymentForm.controls['cvc'].setValue("6776");
    app.submitForm();
    expect(app.displayMessage).toBe("Payment Failed!");
  }));
});
