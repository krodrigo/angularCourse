import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { FormattedCpfPipe } from '../pipes/formatted-cpf.pipe';

@Directive({
  selector: '[appCpf]'
})
export class CpfDirective {

  private key: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target'])
  onchage({ value }: { value: string}) {
    if(!this.key || this.key !== 'Backspace') {
      this.element
      .nativeElement.value = new FormattedCpfPipe()
      .transform(value);
    }
  }

  @HostListener('keydown', ['$event'])
  onKeyPres({ key }: { key: string}) {
   this.key = key;
  }

  ngAfterViewInit() {
    this.renderer
    .setAttribute(this.element
      .nativeElement, 'maxlength', '14');
  }

}
