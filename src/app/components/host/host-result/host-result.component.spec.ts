import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostResultComponent } from './host-result.component';

describe('HostResultComponent', () => {
  let component: HostResultComponent;
  let fixture: ComponentFixture<HostResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
