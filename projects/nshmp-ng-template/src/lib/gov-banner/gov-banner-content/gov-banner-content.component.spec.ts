import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovBannerContentComponent } from './gov-banner-content.component';

describe('GovBannerContentComponent', () => {
  let component: GovBannerContentComponent;
  let fixture: ComponentFixture<GovBannerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovBannerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovBannerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
