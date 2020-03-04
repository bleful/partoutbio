import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPopperComponent } from './ngx-popper.component';

describe('NgxPopperComponent', () => {
  let component: NgxPopperComponent;
  let fixture: ComponentFixture<NgxPopperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxPopperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxPopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
