import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingContactComponent } from './hosting-contact.component';

describe('HostingContactComponent', () => {
  let component: HostingContactComponent;
  let fixture: ComponentFixture<HostingContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostingContactComponent]
    });
    fixture = TestBed.createComponent(HostingContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
