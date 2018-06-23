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
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    }
    , {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    },
    {
      "id": {
        "market": "Atlanta, GA",
        "description": " Digital Bulletins",
      },
      "date": "05/20/2018",
    }
  ];

  rows: any = [];
  cols: any = [];
  mediaTypes: any = [];
  newTableRecord: any = {};

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
  displayAddNewShowing: boolean = false;

  products: any = [];

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

  copyRecord(record) {
    console.log(record)
    this.isNewTableRecord = true;
    this.newTableRecord = Object.assign({}, record);
    // this.newTableRecord = record;
  }

  saveChanges(product) {
    console.log(this.newTableRecord)
    this.rows.push(this.newTableRecord);
    this.isNewTableRecord = false;
  }

  cancel() {
    this.newTableRecord = {};
    this.isNewTableRecord = false;
  }

  editRecord(product) {
    console.log(product)
    this.isNewTableRecord = false;
    this.isEditable = true;

    this.rows.filter(row => row.isEditable).map(r => {
      r.isEditable = false;
      return r;
    })
    product.isEditable = true;
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

  createNewShowing() {
    // this.router.navigate(['/createratecard']);
    this.displayAddNewShowing = true;
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

}
