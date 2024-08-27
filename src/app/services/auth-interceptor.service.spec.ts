import { TestBed } from '@angular/core/testing';

import { AuthInterceptor } from './auth-interceptor.service';  // Corrija a importação

describe('AuthInterceptor', () => {  // Use o nome correto aqui também
  let service: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
