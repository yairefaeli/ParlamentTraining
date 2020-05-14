var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ApolloLink, execute } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { Subject } from 'rxjs';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
var ApolloLinkProviderService = /** @class */ (function () {
    function ApolloLinkProviderService() {
        this.initApolloLink();
    }
    ApolloLinkProviderService.prototype.initApolloLink = function () {
        var httpLink = this.getHttpLink();
        var wsLink = this.getWsLink();
        this.apolloLink = ApolloLink.split(function (op) {
            return (op.query.definitions.find(function (def) { return def.kind === 'OperationDefinition'; }).operation !== 'subscription');
        }, httpLink, wsLink);
    };
    ApolloLinkProviderService.prototype.getHttpLink = function () {
        var httpOpts = {
            uri: "http://localhost:4201/graphql"
        };
        return createHttpLink(httpOpts);
    };
    ApolloLinkProviderService.prototype.getWsLink = function () {
        var wsClient = new SubscriptionClient("ws://localhost:4201/graphql", {
            reconnect: true
        });
        var webSocketLink = new WebSocketLink(wsClient);
        return webSocketLink;
    };
    ApolloLinkProviderService.prototype.execute$ = function (operation) {
        var subject = new Subject();
        var linkObservable = execute(this.apolloLink, operation);
        linkObservable.subscribe(function (res) {
            return subject.next(res);
        });
        return subject;
    };
    ApolloLinkProviderService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ApolloLinkProviderService);
    return ApolloLinkProviderService;
}());
export { ApolloLinkProviderService };
//# sourceMappingURL=apollo-link-provider.service.js.map