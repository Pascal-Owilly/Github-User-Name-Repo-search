import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(private elem:ElementRef) {
    this.elem.nativeElement.style.backgroundColor = "rgb(33,37,41)"
    this.elem.nativeElement.style.color = "white";
    this.elem.nativeElement.style.padding = "20px";
   


   }

}
