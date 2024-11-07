import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeRoleComponent } from './native-role.component';

describe('NativeRoleComponent', () => {
  let component: NativeRoleComponent;
  let fixture: ComponentFixture<NativeRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NativeRoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NativeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
