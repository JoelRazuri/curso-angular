import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEstiloHermanos]'
})
export class EstiloHermanosDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'yellow';
    // this.element.nativeElement.style.textTransform = 'capitalize';
  }

}
