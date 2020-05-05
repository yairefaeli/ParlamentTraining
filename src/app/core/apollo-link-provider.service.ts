import { Injectable } from '@angular/core';
import { ApolloLink, execute, GraphQLRequest, FetchResult } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { Observable, Subject } from 'rxjs';

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
    this.apolloLink = httpLink;
  }

  private getHttpLink() {
    const httpOpts: any = {
      uri: `http://localhost:3000/graphql`
    };
    return createHttpLink(httpOpts)
  }

  execute$(operation: GraphQLRequest): Observable<FetchResult> {
    const subject = new Subject();
    const linkObservable = execute(this.apolloLink, operation);

    linkObservable.subscribe(res =>
      subject.next(res)
    )

    return subject as Observable<FetchResult>;
  }
}
