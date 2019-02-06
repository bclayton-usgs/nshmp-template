import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovBannerHeaderComponent } from './gov-banner-header.component';

describe('GovBannerHeaderComponent', () => {
  let component: GovBannerHeaderComponent;
  let fixture: ComponentFixture<GovBannerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovBannerHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovBannerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
