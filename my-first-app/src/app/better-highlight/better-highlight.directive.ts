import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding(`style.backgroundColor`) backgroundColor = 'transparent';

  constructor(private elRef: ElementRef, private rendered: Renderer2) { }

  ngOnInit(): void {
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
