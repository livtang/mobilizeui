import { Injectable } from "@angular/core";
import {Observable, throwError} from 'rxjs';
import {Error} from '../models/Error';

@Injectable()
export class ErrorService{
  handleError(errorResponse: any): Observable<any>{

    console.error(errorResponse.error as Error);
    return throwError(errorResponse.error as Error);

  }
}