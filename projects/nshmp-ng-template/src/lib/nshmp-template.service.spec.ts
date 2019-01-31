import { TestBed } from '@angular/core/testing';

import { NshmpTemplateService } from './nshmp-template.service';

describe('NshmpTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NshmpTemplateService = TestBed.get(NshmpTemplateService);
    expect(service).toBeTruthy();
  });
});
