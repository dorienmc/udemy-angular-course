import { Component, OnInit, Input, ViewEncapsulation, OnChanges,
  SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

// tslint:disable-next-line:no-conflicting-lifecycle
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string}; // Typedefinition for the server element
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) content: ElementRef;

  constructor() {
    // console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges called');
    // console.log(changes);
  }

  ngOnInit(): void {
    // console.log('ngOnInit called');
    // console.log('Text content:' + this.header.nativeElement.textContent);
    // console.log('Text content of paragraph:' + this.content.nativeElement.textContent);
  }

  ngDoCheck(): void {
    // console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit called');
    // console.log('Text content:' + this.header.nativeElement.textContent);
    // console.log('Text content of paragraph:' + this.content.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    // console.log('ngOnDestroy called');
  }
}
