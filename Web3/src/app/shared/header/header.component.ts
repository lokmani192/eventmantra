import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AppConstants } from '../../app.constants';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../_modals/login-modal/login-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NgbModalConfig, NgbModal],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  ImageBaseUrl: string;
  constructor(config: NgbModalConfig,private modalService: NgbModal) {
    this.ImageBaseUrl = AppConstants.ImageBaseUrl;
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit() {
  }

  openCenteredModal(content) {
    const modalRef = this.modalService.open(LoginModalComponent, { size: 'lg', centered: true, windowClass: 'modal-wrapper no-header active' });
    modalRef.componentInstance.title = 'About';
    //this.modalService.open(content, { size:'lg',centered: true, windowClass:'modal-wrapper no-header active'});
  }
}
