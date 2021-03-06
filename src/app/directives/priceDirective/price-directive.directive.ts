import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPriceHighlight]'
})
export class PriceDirectiveDirective {

  @Input() appPriceHighlight: string

  @HostListener('mouseenter') onMouseEnter() {
    console.log('enter')
    this.highlight(this.appPriceHighlight)
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('leave')
    this.highlight(null)
  }

  constructor(private el: ElementRef) {
    // console.log(this.color)
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color
  }

}
