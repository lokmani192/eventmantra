import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppConstants } from '../../app.constants';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../_modals/index';
import { EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  ImageBaseUrl: string;
  websiteUrl: string;
  contactEmail: string;
  contactPhoneNo: string;
  isCollapsed = true;
  @Output() isCollapsedEvent = new EventEmitter();
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    this.ImageBaseUrl = AppConstants.ImageBaseUrl;
    this.websiteUrl = AppConstants.WebsiteUrl;
    this.contactEmail = AppConstants.ContactEmail;
    this.contactPhoneNo = AppConstants.ContactPhoneNo;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
   
  }

  openCenteredModal(content) {
    const modalRef = this.modalService.open(LoginModalComponent, { centered: true, windowClass: 'modal-wrapper no-header in' });
    modalRef.componentInstance.title = 'About';
    //this.modalService.open(content, { size:'lg',centered: true, windowClass:'modal-wrapper no-header active'});
  }
  toggleMenuClick() {
    if (this.isCollapsed) {
      console.log(this.isCollapsed);
      this.isCollapsed = false;
    }
    else {
      this.isCollapsed = true;
      console.log(this.isCollapsed);
    }
    this.isCollapsedEvent.emit(this.isCollapsed);

  }
}
