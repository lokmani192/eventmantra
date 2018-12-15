import { Directive, ElementRef, HostListener, Inject } from '@angular/core';
import { FooterComponent} from '../footer'
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[ResizeFooter]'
})
export class ResizeHeaderDirective {

  isFooterFixed: boolean=false;
  constructor(private element: ElementRef, private footer: FooterComponent) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  @HostListener('load', ['$event'])
  onLoad(event) {
    this.resize();
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.resize();
  }

  resize() {
   if (window.innerHeight > this.element.nativeElement.clientHeight) {
     this.isFooterFixed = true;
    }
   //FooterComponent.
   console.log(this.isFooterFixed);
  }

}
