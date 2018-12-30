import { Component, OnInit, Injectable, HostListener, ElementRef, ViewChild } from '@angular/core';
import { AppConstants} from '../../app.constants'
import { SocialLink } from '../../_classes/social-link';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  today: number = Date.now();
  websiteUrl: string;
  ImageBaseUrl: string;
  websiteName: string;
  contactEmail: string;
  contactPhoneNo: string;
  companyName: string;
  socialLinks: SocialLink[];
  aboutLinks: SocialLink[];
  
  constructor() {
    this.websiteUrl = AppConstants.WebsiteUrl;
    this.websiteName = AppConstants.WebsiteName;
    this.contactEmail = AppConstants.ContactEmail;
    this.contactPhoneNo = AppConstants.ContactPhoneNo;
    this.ImageBaseUrl = AppConstants.ImageBaseUrl; 7
    this.companyName = AppConstants.CompanyName;
    this.socialLinks = AppConstants.SocialLinks;
    this.aboutLinks = AppConstants.AboutLinks;
  }

  ngOnInit() {
  }

  

}
