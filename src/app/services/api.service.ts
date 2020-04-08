import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { catchError, map } from "rxjs/operators";
import {ErrorService} from "./error.service";

@Injectable()
export class ApiService {

  baseUrl = 'https://api.mobilize.us/v1';

  httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json"})};

  constructor(private httpClient: HttpClient, private errorService: ErrorService) {

  }

  get<T>(
    endpoint: string,
  ): Observable<T> {
    return this.httpClient.get<T>(this.baseUrl + endpoint, this.httpOptions)
      .pipe(
          map(this.extractContentFromResponse()),
          catchError(this.handleError())
      
      );
  }

  private extractContentFromResponse<T>() {
    return (response: T) => {
      const content = response["data"];
      console.info(content);
      return content as T;
    }
  }

  handleError<T>(){
    return (errorResponse: any): Observable<any> => {
      return this.errorService.handleError(errorResponse);
    }
  }
  
};


