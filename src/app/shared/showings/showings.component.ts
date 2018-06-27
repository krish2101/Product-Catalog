import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'showings',
  templateUrl: './showings.component.html',
  styleUrls: ['./showings.component.css']
})
export class ShowingsComponent implements OnInit {

  rows: any = [];
  cols: any = [];
  mediaTypes: any = [];
  newTableRecord: any = {};
  displayShowingsDialog: boolean = false;

  items: any = [];

  showingsList: any = [
    {
      'label': '1 Week',
      'value': '1W',
      'billing': ''
    }
  ];

  selectedRow = {};

  selectedItems: any = [];
  showProdTable: boolean = false;
  isEditable: boolean = false;
  display: boolean = false;
  isNewTableRecord: boolean = false;
  displayAddNewShowing: boolean = false;

  products: any = [];

  constructor(private productService: ProductService, private router: Router) { }

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

  ngOnInit() {
    this.productService.getProducts().subscribe(result => {
      this.products = result;
    });

    this.cols = [
      { field: 'id', header: 'Market/Media' },
      { field: 'date', header: 'Effective Date' },
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
          "seqno": "10",
          "market": "Atlanta, GA",
          "description": "Digital Bulletins",
          "coverage": "Unit B143",
          "path": "oms.outfrontmedia.com",
        },
        "date": "06/15/2018",
        // "facility": "123-456-12",
        "media": "Digital Bulletins",
        // "inventory": "10/Atlanta, GA/Digital Bulletins",
        "showingtype": "Unit",
        "units": "15",
        "duration": "1-4 weeks",
        "netamt": "21,000.99",
        "invtMgmtType": "Atlanta Malls"
      },
      {
        "id": {
          "seqno": "20",
          "market": "Atlanta, GA",
          "description": "Digital Bulletins",
          "coverage": "Unit B143",
          "path": ""
        },
        "date": "05/20/2018",
        // "facility": "123-456-12",
        "media": "Digital Bulletins",
        // "inventory": "10/Atlanta, GA/Digital Bulletins",
        "showingtype": "Unit",
        "units": "10",
        "duration": "1-4 weeks",
        "netamt": "10,999.00",
        "invtMgmtType": "Atlanta Digital"
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
    // console.log(product)
    // this.isNewTableRecord = false;
    // this.isEditable = true;
    this.selectedRow = product;
    console.log(this.selectedRow)
    this.displayShowingsDialog = true;
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

