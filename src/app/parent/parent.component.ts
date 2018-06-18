import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  parentData = "Data from Parent Component";
  constructor() { }

  ngOnInit() {
  }

  getChildNotification(event){
   console.log(event);
  }

}
