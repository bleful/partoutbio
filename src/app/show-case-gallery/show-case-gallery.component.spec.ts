import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaseGalleryComponent } from './show-case-gallery.component';

describe('ShowCaseGalleryComponent', () => {
  let component: ShowCaseGalleryComponent;
  let fixture: ComponentFixture<ShowCaseGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCaseGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaseGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
