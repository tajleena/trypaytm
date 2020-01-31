import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Paytm';
  Book=[{name:"Movies", icons:"fa fa-film"},{name:"hotel",icons:"fa fa-hotel"},{name:"flight",icons:"fa fa-plane"},{name:"train",icons:"fa fa-train"},{name:"ticket",icons:"fa fa-ticket"},]

  ngOnInt(){}
}
