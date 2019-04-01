import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appConsoleEntry]'
})
export class ConsoleEntryDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log("this.highlight('yellow');");
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log(this.el.nativeElement);
    console.log("this.highlight(null);");
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}