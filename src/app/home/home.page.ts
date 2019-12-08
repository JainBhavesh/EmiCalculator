import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private emiData: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController
  ) {
    this.emiData = this.formBuilder.group({
      amount: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      rate: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
      year: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.required])],
    });
  }

  getCalculation() {
    console.log(this.emiData.value);
    this.navCtrl.navigateForward('emi-calculation', {
      queryParams: {
        data: this.emiData.value
      }
    });
  }
}
