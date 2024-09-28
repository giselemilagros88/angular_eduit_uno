import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
 
})
export class ResaltarDirective {
  @Input() colorBase : string = '';

  constructor(private el: ElementRef) { 
    console.log("ResaltarDirective constructor");
    console.log(el);
    console.log(this.colorBase);
  }
  ngOnInit(){
    console.log(this.colorBase);
    //this.el.nativeElement.style.backgroundColor = this.colorBase;
  }
  @HostListener('mouseenter') mouseEntro(){
    this.resaltarColor(this.colorBase || 'pink');
  }
  @HostListener('mouseleave') mouseSalio(){
    this.resaltarColor(null);
  }

  private resaltarColor(color: string | null){
    this.el.nativeElement.style.backgroundColor = color;
  }

}
