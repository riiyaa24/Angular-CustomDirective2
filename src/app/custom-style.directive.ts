import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle, ElementRef]',
  standalone: true
})
export class CustomStyleDirective {

  constructor(private el : ElementRef) 
  { 
    this.applyStyle();
  }

  private applyStyle() : void 
  {
    this.el.nativeElement.style.backgroundColor = 'yellow';
    this.el.nativeElement.style.fontWeight = 'bold';
  }

}
