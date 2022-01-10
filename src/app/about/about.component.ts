import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name: string = 'LongAbout';
  public loginName = 'admin';
  public counter = 0;
  public counterBinhPhuong = 0;
  // public counter = 0;
  // public counterBinhPhuong = 0;
  // constructor(private common: CommonService) { };
  constructor(private common: CommonService) { };

  public ngOnInit(): void {
  // this.counter = this.common.counter;
  //  this.counterBinhPhuong = this.common.mu2(this.counter);
  //  this.common.counter++;
  this.counter = this.common.counter;
   this.counterBinhPhuong = this.common.mu2(this.counter);
   this.common.counter++;
  }
  public resetName(): void {
    this.name = '';
  }
}
