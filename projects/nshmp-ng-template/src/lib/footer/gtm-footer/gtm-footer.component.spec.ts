import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmFooterComponent } from './gtm-footer.component';

describe('GtmFooterComponent', () => {
  let component: GtmFooterComponent;
  let fixture: ComponentFixture<GtmFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtmFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
