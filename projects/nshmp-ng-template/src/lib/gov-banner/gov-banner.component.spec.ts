import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovBannerComponent } from './gov-banner.component';

describe('GovBannerComponent', () => {
  let component: GovBannerComponent;
  let fixture: ComponentFixture<GovBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
