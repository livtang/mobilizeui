import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {ErrorService} from './error.service';

@Injectable()
export class ApiService {

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

  constructor(private httpClient: HttpClient, private errorService: ErrorService) {

  }

  get<T>(
    endpoint: string,
  ): Observable<T> {
    return this.httpClient.get<T>(endpoint, this.httpOptions)
      .pipe(
        map(this.extractContentFromResponse()),
        catchError(this.handleError())

      );
  }

  getNext<T>(
    endpoint: string, existingData: T
  ): Observable<T> {
    return this.httpClient.get<T>(endpoint, this.httpOptions)
      .pipe(
        map(this.addContentFromResponse(existingData)),
        catchError(this.handleError())

      );
  }

  private addContentFromResponse<T>(existingData: T) {
    return (response: T) => {
      let content;
      // @ts-ignore
      content = response['data'];
      // tslint:disable-next-line:no-console
      console.info('content: ' + content);
      let nextUrl;
      // @ts-ignore
      nextUrl = response['next'];
      console.info('next: ' + nextUrl);

      // while (nextUrl != null) {
      //   console.log('NOT NULL nextUrl');
      //   this.httpClient.get<T>(nextUrl, this.httpOptions);
      // }
      if (nextUrl === null) {
        console.log('null nextUrl');
      } else {
        console.log('NOT NULL nextUrl');
        this.httpClient.get<T>(nextUrl, this.httpOptions);
      }
      return content as unknown as T;
    };
  }

  private extractContentFromResponse<T>() {
    return (response: T) => {
      let content;
      // @ts-ignore
      content = response['data'];
      // tslint:disable-next-line:no-console
      console.info('content: ' + content);
      let nextUrl;
      // @ts-ignore
      nextUrl = response['next'];
      console.info('next: ' + nextUrl);

      // while (nextUrl != null) {
      //   console.log('NOT NULL nextUrl');
      //   this.httpClient.get<T>(nextUrl, this.httpOptions);
      // }
      // if (nextUrl === null) {
      //    console.log('null nextUrl');
      // } else {
      //    console.log('NOT NULL nextUrl');
      //   this.httpClient.get<T>(nextUrl, this.httpOptions);
      // }
      return content as unknown as T;
    };
  }

  handleError<T>() {
    return (errorResponse: any): Observable<any> => {
      return this.errorService.handleError(errorResponse);
    };
  }

}


