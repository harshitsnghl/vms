import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestSearchComponent } from './guest-search.component';

describe('GuestSearchComponent', () => {
  let component: GuestSearchComponent;
  let fixture: ComponentFixture<GuestSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
