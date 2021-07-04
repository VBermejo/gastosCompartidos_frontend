import { TestBed } from '@angular/core/testing';

import { AddPaymentModalService } from './add-payment-modal.service';

describe('AddMPaymenModalService', () => {
  let service: AddPaymentModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPaymentModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
