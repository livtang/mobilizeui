import { EventListService } from "./eventlist.service";
import { Component} from '@angular/core';

@Component({
  selector: 'eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.css'],
  providers:[EventListService]
})

export class EventListComponent{

  events: Event[];

  eventsColumnDefs = [
        {headerName: 'Event Name', field: 'title'},
        {headerName: 'Summary', field: 'created_date'}
         
    ];

  rowData = this.events;

  constructor(private eventListService: EventListService) {
  this.showAllEvents();
  }

  dataSource = this.events;
  columnsToDisplay = ['Title', 'Summary'];

  showAllEvents() {
    this.eventListService.getAllPublicEvents().subscribe(
      result => {
        this.events = result as Event[];
        console.log(this.events[0]);
      },
      err => {
        console.error(err);
      }
    )
  }



}