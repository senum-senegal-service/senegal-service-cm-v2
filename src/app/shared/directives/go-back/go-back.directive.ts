import { Location } from '@angular/common';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGoBack]',
})
export class GoBackDirective {
  constructor(private elementRef: ElementRef, private location: Location) {
    this.elementRef.nativeElement.addEventListener('click', () => {
      this.location.back();
    });
  }
}
