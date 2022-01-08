import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public name: string = 'LongAbout';

  constructor() { }

  ngOnInit(): void {
  }
  public resetName(): void {
    this.name = '';
  }
}
