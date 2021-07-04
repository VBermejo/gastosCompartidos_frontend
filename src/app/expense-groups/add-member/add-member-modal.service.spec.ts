import { TestBed } from '@angular/core/testing';

import { AddMemberModalService } from './add-member-modal.service';

describe('AddMemberModalService', () => {
  let service: AddMemberModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMemberModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
