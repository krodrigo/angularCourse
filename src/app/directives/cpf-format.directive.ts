import { Directive, AfterViewInit, ElementRef, Renderer2, HostListener } from '@angular/core';
import { FormattedCpfPipe } from '../pipes/formatted-cpf.pipe';

@Directive({
  selector: '[appCpfFormat]'
})
export class CpfFormatDirective implements AfterViewInit {
  private key: string;
  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target'])
  onChange({ value }: { value: string}) {
    if(!this.key || this.key !== 'Backspace') {
      if(value.length == 11) {
        this.element.nativeElement.value = new FormattedCpfPipe().transform(this.element.nativeElement.value);
      }
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyPress({ key}: {key: string}) {
    this.key = key;
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.element.nativeElement, 'maxlength', '11');
  }
}
