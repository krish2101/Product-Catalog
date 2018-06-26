import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers: [{ provide: Router, useValue: {} }]
})
export class ProductComponent implements OnInit {

  displayShowingsDialog: boolean = false;
  displayAddNewShowings: boolean = false;

  marketOptions = [
    {
      "label": "Select Market",
      "value": ""
    },
    {
      "label": "Atlanta, GA",
      "value": "ATL"
    },
    {
      "label": "Boston, MA",
      "value": "BOS"
    },
    {
      "label": "New York, NY",
      "value": "NYC"
    },
    {
      "label": "Los Angels, CA",
      "value": "LOS"
    }
  ]

  rateCardTypesRows = [
    {
      "id": {
        "market": "Atlanta, GA",
        "description": "Airport Shuttles",
      },
      "date": "05/24/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins (Showings)",
      },
      "date": "03/11/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins (Individual Units)",
      },
      "date": "01/22/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Poster Rates (Individual Units)",
      },
      "date": "01/22/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Poster Rates (Showings)",
      },
      "date": "01/22/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Bus Rates - Interior",
      },
      "date": "01/22/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Junior Poster Rates - Individual Units",
      },
      "date": "01/22/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Poster Rates - Ethinic Showings",
      },
      "date": "01/22/2016",
    }
    , {
      "id": {
        "market": "Atlanta, GA",
        "description": " Sation Saturation",
      },
      "date": "01/22/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Shelter Rates - Individual Units",
      },
      "date": "01/21/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Shelter Rates - Showings",
      },
      "date": "01/21/2016",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Shelter Rates - Showings",
      },
      "date": "01/21/2016",
    }
  ];
  newRateCardTypesRows = [
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

  productShowingsList = [
    "King size Bus Posters - Bus Rates African American",
    "Taillight Bus Displays",
    "Bus Posters - Ethinic",
    "Digital Poster Showing",
    "Digital Junior Posters"
  ]

  rows: any = [];
  cols: any = [];
  mediaTypes: any = [];
  newTableRecord: any = {};
  isCopy: boolean = false;
  isEdit: boolean = false;

  items: any = [];

  showingsList: any = [
    {
      'label': '1 Week',
      'value': '1W',
      'billing': ''
    }
  ];

  selectedItems: any = [];
  showProdTable: boolean = false;
  isEditable: boolean = false;
  display: boolean = false;
  isNewTableRecord: boolean = false;
  editProduct: boolean = false;
  editShowings: any = {};

  products: any = [];
  editProductData = {
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

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    });

    this.cols = [
      { field: 'id', header: 'Market/Media' },
      { field: 'date', header: 'Start/End Date' },
      // { field: 'facility', header: 'Facility / Group Schedule' },
      { field: 'media', header: 'Media' },
      // { field: 'inventory', header: 'Inventory Management' },
      { field: 'showingtype', header: 'Showing Type' },
      { field: 'units', header: 'Units' },
      { field: 'duration', header: 'Duration' },
      { field: 'netamt', header: 'Net Amount' }
    ];

    this.rows = [
      {
        "id": {
          "market": "10/Atlanta, GA/Digital Bulletins",
          "coverage": "Unit B143",
          "type": "Regular"
        },
        "date": "06/15/2018 - 06/20/2018",
        // "facility": "123-456-12",
        "media": "Digital Bulletins",
        // "inventory": "10/Atlanta, GA/Digital Bulletins",
        "showingtype": "Unit",
        "units": "15",
        "duration": "1-4 weeks",
        "netamt": "21,000.99"
      },
      {
        "id": {
          "market": "20/Atlanta, GA/Digital Bulletins",
          "coverage": "Unit B143",
          "type": "Regular"
        },
        "date": "05/20/2018 - 06/25/2018",
        // "facility": "123-456-12",
        "media": "Digital Bulletins",
        // "inventory": "10/Atlanta, GA/Digital Bulletins",
        "showingtype": "Unit",
        "units": "10",
        "duration": "1-4 weeks",
        "netamt": "10,999.00"
      }
    ];

    this.mediaTypes = [
      {
        "header": "Atlanta, GA - Airport Shuttle (Showings)",
        "content": ["Fullback Bus Displays"],
        "selected": false
      },
      {
        "header": 'Atlanta, GA - African American - Bus Rates - African-American',
        "content": ['King Size Bus Posters - 30"H X 144"W - African-American Coverage', 'Taillight Bus Displays'],
        "selected": true
      }
      ,
      {
        "header": "Atlanta, GA - BUS RATES EXTERIOR",
        "content": ['HeadLight Displays - 20"H X 48"W'],
        "selected": false
      }
    ];
    this.items = [
      {
        label: 'Individual Selection', icon: '', command: () => {
          this.selectIndividual()
        }
      },
      {
        label: 'Individual Selection (Quick Add)', icon: '', command: () => {
          this.selectIndividualQuickAdd()
        }
      },
      {
        label: 'Showings', icon: '', command: () => {
          this.showings();
        }
      }
    ]

    this.rows.map(row => {
      row.isEditable = false;
    });
  }
  selectIndividual() {
    this.showTable();
  }

  selectIndividualQuickAdd() {
    this.showTable();
  }

  showings() {
    this.showTable();
  }

  showTable() {
    this.showProdTable = true;
    this.display = true;
  }
  showDialog() {
    this.display = true;
  }

  copyRecord(product) {
    // this.newTableRecord = Object.assign({}, record);
    this.editProductData = product;
    this.editProductData = {
      "id": {
        "market": product.id.market,
        "description": product.id.description,
      },
      "date": product.date,
      "propsDescr": "Atlanta,GA Digital Bulletin Rate Showings",
      "prodSched": "Test",
      "active": false,
      "spaceMisc": "Space",
      "billingRate": "Weekly",
      "invtMngmtType": "None",
      "billingPeriod": {
        "from": [
          {
            "label": "1",
            "value": "1"
          },
          {
            "label": "5",
            "value": "5"
          },
          {
            "label": "26",
            "value": "26"
          },
          {
            "label": "41",
            "value": "41"
          },
          {
            "label": "",
            "value": ""
          }
        ],
        "to": [
          {
            "label": "4",
            "value": "4"
          },
          {
            "label": "25",
            "value": "25"
          },
          {
            "label": "40",
            "value": "40"
          },
          {
            "label": "52",
            "value": "52"
          },
          {
            "label": "",
            "value": ""
          }
        ]
      }
    }
    console.log(this.editProductData)
    this.editProduct = true;
    this.isCopy = true;
    this.isEdit = false;
  }




  saveChanges(product) {
    console.log(this.newTableRecord)
    this.rows.push(this.newTableRecord);
    this.isNewTableRecord = false;
  }

  cancel() {
    this.editProduct = false;
  }

  editRecord(product) {
    this.editProductData = product;
    this.editProductData = {
      "id": {
        "market": product.id.market,
        "description": product.id.description,
      },
      "date": product.date,
      "propsDescr": "Atlanta,GA Digital Bulletin Rate Showings",
      "prodSched": "Test",
      "active": false,
      "spaceMisc": "Space",
      "billingRate": "Weekly",
      "invtMngmtType": "None",
      "billingPeriod": {
        "from": [
          {
            "label": "1",
            "value": "1"
          },
          {
            "label": "5",
            "value": "5"
          },
          {
            "label": "26",
            "value": "26"
          },
          {
            "label": "41",
            "value": "41"
          },
          {
            "label": "",
            "value": ""
          }
        ],
        "to": [
          {
            "label": "4",
            "value": "4"
          },
          {
            "label": "25",
            "value": "25"
          },
          {
            "label": "40",
            "value": "40"
          },
          {
            "label": "52",
            "value": "52"
          },
          {
            "label": "",
            "value": ""
          }
        ]
      }
    }
    console.log(this.editProductData)
    this.editProduct = true;
    this.isEdit = true;
    this.isCopy = false;
  }

  saveRecord(product) {
    this.isEditable = false;
    console.log(product)
    product.isEditable = false;
  }

  cancelRecord(product) {
    this.isEditable = false;
    product.isEditable = false;
  }

  deleteRecord(index) {
    console.log("Delete")
    this.rows.splice(index, 1);
    this.isNewTableRecord = false;
  }

  createNewShowings(showing) {
    this.displayShowingsDialog = true;
    this.editShowings = showing;
    console.log(this.editShowings);
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
    this.showingsList.push(dynamicBillingObj);
  }
  removeControls(index: number) {
    this.showingsList.splice(index, 1);
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

  cancelShwoings() {
    this.displayAddNewShowings = false;
  }

  deleteProductFromList(i) {

  }

}
