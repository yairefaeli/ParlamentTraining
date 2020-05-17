import { TestBed } from '@angular/core/testing';
import { ApolloLinkProviderService } from './apollo-link-provider.service';
describe('ApolloLinkProviderService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ApolloLinkProviderService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=apollo-link-provider.service.spec.js.map