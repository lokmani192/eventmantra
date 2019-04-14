import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../app.constants';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.scss']
})
export class RegistryComponent implements OnInit {
  imageBaseUrl = AppConstants.ImageBaseUrl;
  slides = [
    { img: this.imageBaseUrl + "assets/Images/brands/1.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/2.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/3.png" },
    { img: this.imageBaseUrl + "assets/Images/brands/4.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/5.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/6.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/7.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/8.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/9.png" },
    { img: this.imageBaseUrl + "assets/Images/brands/10.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/11.jpg" },
    { img: this.imageBaseUrl + "assets/Images/brands/12.png" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
