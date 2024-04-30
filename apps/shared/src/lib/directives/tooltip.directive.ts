import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[libTooltip]',
  standalone: true,
})
export class TooltipDirective {
  constructor(private elRef: ElementRef, private rendere: Renderer2) {}
  @Input('libTooltip') tooltipContent: string | null = '';

  createToolTip(): HTMLElement | null {
    if (!this.tooltipContent) return null;
    const tooltip = this.rendere.createElement('div');
    const text = this.rendere.createText(this.tooltipContent);
    this.rendere.appendChild(tooltip, text);
    this.rendere.addClass(tooltip, 'tooltip');
    this.rendere.setStyle(tooltip, 'position', 'absolute');
    return tooltip;
  }

  @HostListener('mouseover')
  onMouseOver() {
    const tooltip = this.createToolTip();
    this.rendere.appendChild(this.elRef.nativeElement, tooltip);
  }
  @HostListener('mouseout')
  onMouseOut() {
    setTimeout(() => {
      const tooltip = this.elRef.nativeElement.querySelector('.tooltip');
      this.rendere.removeChild(this.elRef.nativeElement, tooltip);
    }, 300);
  }
}
