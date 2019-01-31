import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NshmpTemplateComponent } from './nshmp-template.component';

describe('NshmpNgTemplateComponent', () => {
  let component: NshmpTemplateComponent;
  let fixture: ComponentFixture<NshmpTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NshmpTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NshmpTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
