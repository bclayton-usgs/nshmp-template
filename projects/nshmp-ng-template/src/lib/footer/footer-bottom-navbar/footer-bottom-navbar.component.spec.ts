import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBottomNavbarComponent } from './footer-bottom-navbar.component';

describe('FooterBottomNavbarComponent', () => {
  let component: FooterBottomNavbarComponent;
  let fixture: ComponentFixture<FooterBottomNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBottomNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBottomNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
