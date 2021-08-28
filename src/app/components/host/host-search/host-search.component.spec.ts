import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostSearchComponent } from './host-search.component';

describe('HostSearchComponent', () => {
  let component: HostSearchComponent;
  let fixture: ComponentFixture<HostSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
