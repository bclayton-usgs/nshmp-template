import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmHeaderComponent } from './gtm-header.component';

describe('GtmHeaderComponent', () => {
  let component: GtmHeaderComponent;
  let fixture: ComponentFixture<GtmHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtmHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
