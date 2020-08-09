import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveExample]'
})
export class DirectiveExampleDirective {

  constructor(
   public  el:ElementRef
  ) { 
    
  }
/*
  ngOnInit(){
  var element = this.el;
    element.nativeElement.style.background="blue";
    console.log(element.innerText);
    element.innerText= element.innerText.replace("For", "Function");
  }
  */
}

