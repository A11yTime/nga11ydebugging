import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AriaRoleComponent } from './aria-role.component';

describe('AriaRoleComponent', () => {
  let component: AriaRoleComponent;
  let fixture: ComponentFixture<AriaRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AriaRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AriaRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
