import { TestBed, inject } from '@angular/core/testing';

import { HttpmoduleService } from './httpmodule.service';

describe('HttpmoduleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpmoduleService]
    });
  });

  it('should be created', inject([HttpmoduleService], (service: HttpmoduleService) => {
    expect(service).toBeTruthy();
  }));
});
