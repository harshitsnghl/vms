import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostAddComponent } from './host-add.component';

describe('HostAddComponent', () => {
  let component: HostAddComponent;
  let fixture: ComponentFixture<HostAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
