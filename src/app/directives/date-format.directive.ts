import { Directive, ElementRef, HostListener, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'input[matDatepicker][appDateFormat]'
})
export class DateFormatDirective implements AfterViewInit {
  private key: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target'])
  onchage({ value }: { value: string}) {
    if(!this.key || this.key !== 'Backspace') {
      if (value.length === 2 || value.length === 5) {
        this.element.nativeElement.value += '/';
      }
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyPres({ key }: { key: string}) {
   this.key = key;
  }

  ngAfterViewInit() {
    this.renderer.setAttribute(this.element.nativeElement, 'maxlength', '10');
  }

}
