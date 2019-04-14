import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.scss']
})
export class CategoryHomeComponent implements OnInit {
  imageBaseUrl = AppConstants.ImageBaseUrl;
  websiteUrl = AppConstants.WebsiteUrl;

  constructor() { }

  ngOnInit() {
  }

}
