import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Paytm';
  Book=[{name:"Event"},{name:"hotel"},{name:"flight"},{name:"train"},{name:"ticket"},]

  ngOnInt(){}
}
