import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name : string = "";
  constructor(private common: CommonService) { }

  ngOnInit(): void {
  }
  public submitForm(): void {
    // console.log('Submit form = ', + this.name);
    this.common.submitData({name: this.name,age: 14});
  }

}
