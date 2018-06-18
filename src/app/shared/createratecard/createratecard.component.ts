import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createratecard',
  templateUrl: './createratecard.component.html',
  styleUrls: ['./createratecard.component.css']
})
export class CreateratecardComponent implements OnInit {

  billingRateControls: any[] = [];
  constructor() { }

  ngOnInit() {
    this.billingRateControls = [
      {
        'label': '1 Week',
        'value': '1W',
        'billing': ''
      }
    ];
  }

  addControls() {
    let dynamicBillingObj = {
      'label': '',
      'value': '',
      'billing': ''
    }
    this.billingRateControls.push(dynamicBillingObj);
  }
  removeControls(index: number) {
    this.billingRateControls.splice(index, 1);
  }

}
