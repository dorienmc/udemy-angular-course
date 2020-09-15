import { Directive, ElementRef, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor = 'transparant';
  @Input('appBetterHighlight') highLightColor = 'blue';
  @HostBinding(`style.backgroundColor`) backgroundColor = 'transparent';

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.highLightColor;
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseleave') mouseLeave(eventData: Event) {
     this.backgroundColor = this.defaultColor;
  }

}
