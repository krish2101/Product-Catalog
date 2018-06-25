import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createratecard',
  templateUrl: './createratecard.component.html',
  styleUrls: ['./createratecard.component.css']
})
export class CreateratecardComponent implements OnInit {

  billingRateControls: any[] = [];
  displayShowingsDialog: boolean = false;
  displayAddNewShowings: boolean = false;
  constructor() { }

  rateCardTypesCols = [
    {
      "filed": "showings",
      "title": "Showings"
    },
    {
      "filed": "units",
      "title": "Units"
    },
    {
      "filed": "1-4Weeks",
      "title": "1-4Weeks"
    },
    {
      "filed": "5-12Weeks",
      "title": "5-12Weeks"
    },
    {
      "filed": "13-25Weeks",
      "title": "13-25Weeks"
    },
    {
      "filed": "26-41Weeks",
      "title": "26-41Weeks"
    },
    {
      "filed": "52Weeks",
      "title": "52Weeks"
    }
  ];

  rateCardTypesRows = [
    {
      "showings": "",
      "units": "",
      "1-4Weeks": "",
      "5-12Weeks": "",
      "13-25Weeks": "",
      "26-41Weeks": "",
      "52Weeks": ""
    },
    {
      "showings": "",
      "units": "",
      "1-4Weeks": "",
      "5-12Weeks": "",
      "13-25Weeks": "",
      "26-41Weeks": "",
      "52Weeks": ""
    },
    {
      "showings": "",
      "units": "",
      "1-4Weeks": "",
      "5-12Weeks": "",
      "13-25Weeks": "",
      "26-41Weeks": "",
      "52Weeks": ""
    },
    {
      "showings": "",
      "units": "",
      "1-4Weeks": "",
      "5-12Weeks": "",
      "13-25Weeks": "",
      "26-41Weeks": "",
      "52Weeks": ""
    },
    {
      "showings": "",
      "units": "",
      "1-4Weeks": "",
      "5-12Weeks": "",
      "13-25Weeks": "",
      "26-41Weeks": "",
      "52Weeks": ""
    }
  ];

  createRateCardData = {
    "id": {
      "market": "",
      "description": "",
    },
    "date": "",
    "propsDescr": "",
    "active": true,
    "prodSched": "",
    "spaceMisc": "",
    "billingRate": "",
    "invtMngmtType": "",
    "billingPeriod": {
      "from": [],
      "to": []
    }
  };
  ngOnInit() {
    this.billingRateControls = [
      {
        'label': '1 Week',
        'value': '1W',
        'billing': ''
      }
    ];
  }

  createShowings() {
    this.displayShowingsDialog = true;
  }

  addNewShowings() {
    this.displayAddNewShowings = true;
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

  msgs: any[];

  uploadedFiles: any[] = [];

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

}
