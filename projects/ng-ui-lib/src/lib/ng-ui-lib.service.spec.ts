import { TestBed, inject } from '@angular/core/testing';

import { NgUiLibService } from './ng-ui-lib.service';

describe('NgUiLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgUiLibService]
    });
  });

  it('should be created', inject([NgUiLibService], (service: NgUiLibService) => {
    expect(service).toBeTruthy();
  }));
});
