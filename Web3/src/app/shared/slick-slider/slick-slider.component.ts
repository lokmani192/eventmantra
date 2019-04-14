import { Component, OnInit, Input } from '@angular/core';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-slick-slider',
  templateUrl: './slick-slider.component.html',
  styleUrls: ['./slick-slider.component.scss']
})
export class SlickSliderComponent implements OnInit {
  imageBaseUrl = AppConstants.ImageBaseUrl;
  @Input() brand = false;
  @Input() slides = [
    { img: this.imageBaseUrl+"assets/Images/wedding_website/festive_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/template5_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/template1_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/template2_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/template3_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/template4_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/autumn_leaves_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/julia_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/coral_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/paris_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/festive_ver2.jpg" },
    { img: this.imageBaseUrl+"assets/Images/wedding_website/template5_ver2.jpg" },
  ];
  slideConfig = {
    "centerMode": true,"centerPadding":"0px", "slidesToScroll": 1, "mobileFirst": true,
    "responsive": [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          variableWidth: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          variableWidth: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ],
    "prevArrow": '<button type="button" class="slick-prev pink-arrow slick-arrow" style="display: block;"><img src="'+this.imageBaseUrl+'assets/Images/arrow-left-white.png" width="25"></button>',
    "nextArrow": '<button type="button" class="slick-next pink-arrow slick-arrow" style="display: block;"><img src="'+this.imageBaseUrl+'assets/Images/arrow-right-white.png" width="25"></button>'
  };
  constructor() { }

  ngOnInit() {
  }

}
