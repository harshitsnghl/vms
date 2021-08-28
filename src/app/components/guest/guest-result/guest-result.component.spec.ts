import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestResultComponent } from './guest-result.component';

describe('GuestResultComponent', () => {
  let component: GuestResultComponent;
  let fixture: ComponentFixture<GuestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
