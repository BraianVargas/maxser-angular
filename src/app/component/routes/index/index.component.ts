import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  mobile = false;
  pc = true;
  localImg:any =[];
  localImgMobile:any =[];
  localProductImg:any =[];

  constructor() {
    this.localImg = [
      {first:"active",url:'assets/img/carousel/banners/banner1.webp'},
      {first:"",url:'assets/img/carousel/banners/banner2.webp'},
      {first:"",url:'assets/img/carousel/banners/banner3.webp'},
      {first:"",url:'assets/img/carousel/banners/banner4.webp'},
      {first:"",url:'assets/img/carousel/banners/banner5.webp'},
      {first:"",url:'assets/img/carousel/banners/banner6.webp'},
      {first:"",url:'assets/img/carousel/banners/banner7.webp'}
    ];
    this.localImgMobile = [ 
      {first:"active",url:'assets/img/carousel/banners/mobil/banner1.webp'},
      {first:"",url:'assets/img/carousel/banners/mobil/banner2.webp'},
      {first:"",url:'assets/img/carousel/banners/mobil/banner3.webp'},
      {first:"",url:'assets/img/carousel/banners/mobil/banner4.webp'},
      {first:"",url:'assets/img/carousel/banners/mobil/banner5.webp'},
      {first:"",url:'assets/img/carousel/banners/mobil/banner6.webp'},
      {first:"",url:'assets/img/carousel/banners/mobil/banner7.webp'}
    ];
    this.localProductImg = [
      {first:"active", url:"assets/img/carousel/product1.webp"},
      {first:"", url:"assets/img/carousel/product2.webp"},
      {first:"", url:"assets/img/carousel/product3.webp"},
      {first:"", url:"assets/img/carousel/product4.webp"},
      {first:"", url:"assets/img/carousel/product5.webp"},
      {first:"", url:"assets/img/carousel/product6.webp"},
      {first:"", url:"assets/img/carousel/product7.webp"},
      {first:"", url:"assets/img/carousel/product8.webp"},
      {first:"", url:"assets/img/carousel/product9.webp"},
      {first:"", url:"assets/img/carousel/product10.webp"},
      {first:"", url:"assets/img/carousel/product11.webp"},
      {first:"", url:"assets/img/carousel/product12.webp"},
      {first:"", url:"assets/img/carousel/product13.webp"}
    ];
  }

  slides: any = [[]];
  chunk(arr: any, chunkSize: any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }


  ngOnInit() {
    this.slides = this.chunk(this.localProductImg, 4);
    if (window.screen.width <= 450) { // 768px portrait
      this.mobile=true;
      this.pc=false;
    }
  }
}
