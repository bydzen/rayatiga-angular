import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingPricingComponent } from './hosting-pricing.component';

describe('HostingPricingComponent', () => {
  let component: HostingPricingComponent;
  let fixture: ComponentFixture<HostingPricingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostingPricingComponent]
    });
    fixture = TestBed.createComponent(HostingPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
