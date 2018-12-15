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
  ImageBaseUrl: string;
  websiteName: string;
  contactEmail: string;
  contactPhoneNo: string;
  companyName: string;
  socialLinks: SocialLink[];
  aboutLinks: SocialLink[];
  
  constructor() {
    this.websiteName = AppConstants.WebsiteName;
    this.contactEmail = AppConstants.ContactEmail;
    this.contactPhoneNo = AppConstants.ContactPhoneNo;
    this.ImageBaseUrl = AppConstants.ImageBaseUrl;
    this.companyName = AppConstants.CompanyName;
    this.socialLinks = AppConstants.SocialLinks;
    this.aboutLinks = AppConstants.AboutLinks;
  }

  ngOnInit() {
  }

  

}
