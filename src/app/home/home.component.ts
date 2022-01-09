import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public name = 'Longmv';
  public age = 115;
  public danhmuc = ['STT', 'Ten Trai Cay', 'Gia Thanh', 'Can Nang', 'tinh trang Sale'];
  public traiCay = ['Tao','Nho', 'Cam'];
  public traiCay2 = [{ten: 'Tao', gia: 12, canNang: 89, sale: true},{ten: 'Nho', gia: 13, canNang: 82, sale: false},{ten: 'Cam', gia: 14, canNang: 83, sale: true}];

  constructor() { }

 public ngOnInit(): void {
   console.log('trai cay =', this.traiCay);
   console.log('trai cay =', this.traiCay2);
  }

}
