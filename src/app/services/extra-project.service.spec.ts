import { TestBed } from '@angular/core/testing';

import { ExtraProjectService } from './extra-project.service';

describe('ExtraProjectService', () => {
  let service: ExtraProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExtraProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
