import { Injectable } from '@angular/core';
import { ApolloLink, execute, GraphQLRequest, FetchResult } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { Observable, Subject, from } from 'rxjs';
import { OperationDefinitionNode } from 'graphql';
import { WebSocketLink } from 'apollo-link-ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

@Injectable({
  providedIn: 'root'
})
export class ApolloLinkProviderService {
  public apolloLink: ApolloLink;

  constructor() {
    this.initApolloLink();
  }

  private initApolloLink() {
    const httpLink = this.getHttpLink();
    const wsLink = this.getWsLink();
    this.apolloLink = ApolloLink.split(
      op => {
        return (
          (op.query.definitions.find(
            def => def.kind === 'OperationDefinition'
          ) as OperationDefinitionNode).operation !== 'subscription'
        );
      },
      httpLink,
      wsLink
    );
  }

  getHttpLink() {
    const httpOpts: any = {
      uri: `http://localhost:4201/graphql`
    };
    return createHttpLink(httpOpts)
  }

  getWsLink() {
    const wsClient = new SubscriptionClient(
      `ws://localhost:4201/graphql`,
      {
        reconnect: true
      }
    );

    const webSocketLink = new WebSocketLink(wsClient as any)
    return webSocketLink;
  }

  execute$(operation: GraphQLRequest): Observable<FetchResult> {
    const subject = new Subject();
    const linkObservable = execute(this.apolloLink, operation);

    linkObservable.subscribe(res =>
      subject.next(res)
    )

    return subject as Observable<FetchResult>;
  }
  
  // DONT WORK
  // execute$(operation: GraphQLRequest): Observable<FetchResult> {
  //   const linkObservable = execute(this.apolloLink, operation);
    
  //   return from(linkObservable) as Observable<FetchResult>;
  // }
}
