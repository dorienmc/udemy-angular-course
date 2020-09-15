import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private rendered: Renderer2) { }

  ngOnInit(): void {
    // this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.rendered.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

}
