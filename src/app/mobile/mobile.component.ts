import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobFormGroup:FormGroup;

  constructor(private formBuilder:FormBuilder)
  {

  }

  ngOnInit() {
    this.mobFormGroup=this.formBuilder.group({
      Prepaid:['',Validators.required],
      Postpaid:['',Validators.required],
      MobileNumber:['',Validators.required],
      Operator:['',Validators.required],
      cAmount:['',Validators.requiredTrue]
    });
  }
  submit()
  {
    console.log(this.mobFormGroup.value);
  }

}