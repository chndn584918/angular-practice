import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  imgSlides=[
    {img: "assets/images/homebannerthird_big.jpg"},
    {img: "assets/images/olympic_big.jpg"}
  ];
}
