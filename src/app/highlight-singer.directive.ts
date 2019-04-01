import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[app-highlight-singer]'
})
export class HighlightSingerDirective {
  @Input('app-highlight-singer') highlightSinger: string;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() { }

  @HostListener('mouseenter') onMouseEnter() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('selected : ' + this.highlightSinger);
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }

  @HostListener('mouseleave') onMouseLeave() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('mouse Leave : ' + this.highlightSinger);
    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
} 