import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-ngx-popper',
  templateUrl: './ngx-popper.component.html',
  styleUrls: ['./ngx-popper.component.scss']
})
export class NgxPopperComponent implements AfterViewInit {

  @ViewChild('popperRef', null)
  popperRef: ElementRef;

  @ViewChild('popRef', null)
  popRef: ElementRef;

  popperElem: HTMLElement;
  popElem: HTMLElement;

  public isOpen: boolean = false;

  constructor() { }

  ngAfterViewInit() {
    this.popperElem = this.popperRef.nativeElement;
    this.popElem = this.popRef.nativeElement;
    this.neutralize();
  }

  neutralize() {
    this.popperElem.classList.remove('open', 'close');
  }

  public toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  public open() {
    this.neutralize();

    console.log(this.popperElem.style.width);

    let bounding = this.popElem.getBoundingClientRect();
    
    this.popperElem.style.width = bounding.width + 'px';
    this.popperElem.style.height = bounding.height + 'px';

    this.popperElem.classList.add('open');
    this.isOpen = true;
  }

  public close() {
    this.neutralize();
    
    this.popperElem.style.width = this.popElem.style.width;
    this.popperElem.style.height = this.popElem.style.height;

    this.popperElem.classList.remove('open');
    this.isOpen = false;
  }
}
