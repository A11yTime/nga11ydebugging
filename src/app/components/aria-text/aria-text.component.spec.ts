import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaTextComponent } from './aria-text.component';

describe('AriaTextComponent', () => {
  let component: AriaTextComponent;
  let fixture: ComponentFixture<AriaTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AriaTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriaTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
