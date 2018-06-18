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


  rows: any = [];
  cols: any = [];
  mediaTypes: any = [];
  newTableRecord: any = {};

  items: any = [];

  selectedItems: any = [];
  showProdTable: boolean = false;
  isEditable: boolean = false;
  display: boolean = false;
  isNewTableRecord: boolean = false;

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
        "id": "10/Atlanta, GA/Digital Bulletins",
        "date": "05/15/18 - 06/11/18",
        // "facility": "123-456-12",
        "media": "Digital Bulletins",
        // "inventory": "10/Atlanta, GA/Digital Bulletins",
        "showingtype": "Unit",
        "units": "15",
        "duration": "1-4 weeks",
        "netamt": "$21,000.99"
      },
      {
        "id": "20/Atlanta, GA/Digital Bulletins",
        "date": "05/15/18 - 06/11/18",
        // "facility": "123-456-12",
        "media": "Digital Bulletins",
        // "inventory": "10/Atlanta, GA/Digital Bulletins",
        "showingtype": "Unit",
        "units": "10",
        "duration": "1-4 weeks",
        "netamt": "$10,999.00"
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
    this.newTableRecord = record;
  }
  editRecord() {
    this.isEditable = true;
  }
  saveRecord() {
    this.isEditable = false;
    console.log("Save")
  }
  cancelRecord() {
    this.isEditable = false;
    console.log("Cancel")
  }
  deleteRecord() {
    console.log("Delete")
  }

  createNewShowing() {
    this.router.navigate(['/createratecard']);
  }
  saveChanges() {

    this.isNewTableRecord = false;
  }

  cancel() {
    this.isNewTableRecord = false;
  }
}
