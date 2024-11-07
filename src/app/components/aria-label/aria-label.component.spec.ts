import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaLabelComponent } from './aria-label.component';

describe('AriaLabelComponent', () => {
  let component: AriaLabelComponent;
  let fixture: ComponentFixture<AriaLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AriaLabelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriaLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
