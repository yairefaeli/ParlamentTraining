import { TestBed } from '@angular/core/testing';

import { ApolloLinkProviderService } from './apollo-link-provider.service';

describe('ApolloLinkProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApolloLinkProviderService = TestBed.get(ApolloLinkProviderService);
    expect(service).toBeTruthy();
  });
});
