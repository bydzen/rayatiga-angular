import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostingAboutComponent } from './hosting-about.component';

describe('HostingAboutComponent', () => {
  let component: HostingAboutComponent;
  let fixture: ComponentFixture<HostingAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HostingAboutComponent]
    });
    fixture = TestBed.createComponent(HostingAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
