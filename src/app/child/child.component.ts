import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: any;

  @Output() notifyParent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  notifyMyParent(){
    this.notifyParent.emit("Notification from the Child");
  }

}
