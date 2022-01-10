import { Component, OnInit } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public AlarmDistrict(event: any){
    alert("Bạn chưa chọn Tỉnh/ Thành Phố!");
  }

  public name = 'Longmv';
  public age = 115;
  public danhmuc = ['STT', 'Ten Trai Cay', 'Gia Thanh', 'Can Nang', 'tinh trang Sale'];
  public traiCay = ['Tao','Nho', 'Cam'];
  
  public traiCay2 = [{ten: 'Tao', gia: 12, canNang: 89, sale: true},{ten: 'Nho', gia: 13, canNang: 82, sale: false},{ten: 'Cam', gia: 14, canNang: 83, sale: true}];
  public district: string[] = [];
  public vietnam = [{city: "Chọn Tỉnh/ Thành Phố", district: ["Chọn Quận/ Huyện"]},
                    {city: "An Giang", district: ["Thành phố Long Xuyên","Thành phố Châu Đốc","Thị xã Tân Châu","Huyện An Phú","Huyện Châu Phú","Huyện Châu Thành","Huyện Chợ Mới","Huyện Phú Tân","Huyện Thoại Sơn","Huyện Tịnh Biên","Huyện Tri Tôn"]},
                    {city: "Bà Rịa - Vũng Tàu", district: ["Thành phố Vũng Tàu","Thị xã Bà Rịa","Thị xã Phú Mỹ","Huyện Châu Đức","Huyện Côn Đảo","Huyện Đất Đỏ","Huyện Long Điền","Huyện Tân Thành","Huyện Xuyên Mộc"]},
                    {city: "Bạc Liêu" , district: ["Thành phố Bạc Liêu","Huyện Đông Hải","Huyện Giá Rai","Huyện Hòa Bình","Huyện Hồng Dân","Huyện Phước Long","Huyện Vĩnh Lợi"] },
                    {city: "Bắc Giang"  , district: ["Thành phố Bắc Giang","Huyện Hiệp Hòa","Huyện Lạng Giang","Huyện Lục Nam","Huyện Lục Ngạn","Huyện Sơn Động","Huyện Tân Yên","Huyện Việt Yên","Huyện Yên Dũng","Huyện Yên Thế"]},
                    {city: "Bắc Ninh"  , district: ["Thành phố Bắc Ninh","Thị xã Từ Sơn","Huyện Gia Bình","Huyện Lương Tài","Huyện Quế Võ","Huyện Thuận Thành","Huyện Tiên Du","Huyện Yên Phong"]},
                    {city:  "Bến Tre" , district: ["Thành phố Bến Tre","Huyện Ba Tri","Huyện Bình Đại","Huyện Châu Thành","Huyện Chợ Lách","Huyện Giồng Trôm","Huyện Mỏ Cày Bắc","Huyện Mỏ Cày Nam","Huyện Thạnh Phú"]},
                                  
]  

  public counter = 0;
  public counterBinhPhuong = 0;
  constructor(private common: CommonService) { }
 public changeCity(event: any): void {
   console.log('event', event.target.value);
   const city = event.target.value;
   if (!city) {
     return;
   }
   console.log('city', city);
  //  //Cách 1
  //  const search = this.vietnam.filter((data2) => data2.city ===city );
  //  console.log('search', search);
  //  if(search && search.length>0) {
  //    this.district = search[0].district;
  //  }
  //Cách 2
  this.district = this.vietnam.find(data2 =>data2.city ===city)?.district || [];
   
 }
 public ngOnInit(): void {
   this.counter = this.common.counter;
   this.counterBinhPhuong = this.common.mu2(this.counter);
   this.common.counter++;

   console.log('trai cay =', this.traiCay);
   console.log('trai cay =', this.traiCay2);
  }

}
