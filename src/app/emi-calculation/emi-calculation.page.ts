import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-emi-calculation',
  templateUrl: './emi-calculation.page.html',
  styleUrls: ['./emi-calculation.page.scss'],
})
export class EmiCalculationPage implements OnInit {

  amount: any;
  rate: any;
  month: any;

  monthlyPayment: any;
  TotalPayment: any;
  totalInterest: any;
  monthlyInterest: any;

  constructor(
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe(data => {
      console.log('data => ', data);
      this.amount = data.data.amount;
      this.rate = data.data.rate;
      this.month = data.data.year * 12;
      this.rate = this.rate / 100 / 12;
      this.monthlyInterest = Math.pow(this.rate + 1, this.month);
      this.monthlyPayment = Math.round((this.amount * this.rate * this.monthlyInterest) / (this.monthlyInterest - 1));
      this.TotalPayment = Math.round(this.amount * this.monthlyInterest);
      this.totalInterest = Math.round(this.TotalPayment - this.amount);
    });
  }

  ngOnInit() {
  }

}
