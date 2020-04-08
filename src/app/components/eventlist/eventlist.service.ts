import {ApiService} from '../../services/api.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Event} from '../../models/Event';

@Injectable({
  providedIn: 'root'
})

export class EventListService extends ApiService {

  getAllPublicEvents(): Observable<Event[]>{
    console.info('called events service');
    return this.get<Event[]>('/organizations/1/events');
  }
}