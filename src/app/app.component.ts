import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dropdownData = [
    {
      "label": "male",
      "value": "male"
    },
    {
      "label": "Female",
      "value": "Female"
    }
  ];
}
