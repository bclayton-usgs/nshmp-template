import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTopNavbarComponent } from './footer-top-navbar.component';

describe('FooterTopNavbarComponent', () => {
  let component: FooterTopNavbarComponent;
  let fixture: ComponentFixture<FooterTopNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterTopNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
