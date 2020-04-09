/* tslint:disable:no-console */
import { EventListService } from './eventlist.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.css'],
  providers: [EventListService],
})

export class EventListComponent implements OnInit {
        // result => {
        //   // @ts-ignore
        //   this.dataSource = result as Event[];
        //   console.log(this.dataSource[0]);
        //   console.log(this.dataSource[1]);


     // console;.
    // @ts-ignore

  constructor(private eventListService: EventListService) {
    this.eventListService.getAllPublicEvents().subscribe(result => {
      this.dataSource = result as any as Event[];
    });

    // console.log('hi ' + this.dataSource[0]);
  }

  events: Event[];

  eventsColumnDefs = [
        {headerName: 'Event Name', field: 'title', resizable: true},
        {headerName: 'Summary', field: 'description', resizable: true},
    {
      headerName: 'Details', field: 'browser_url', cellRenderer: (params: { value: string; }) => {
        return '<a href="#">' + params.value + '</a>';
      }
    }
    ];

  dataSource: Event[];

  columnsToDisplay = ['title', 'summary'];

  onCellClicked(event: any) {
    if (event.column.headerName === 'Details' ) {
      console.log('clicked on link');
      // execute the action as you want here in on click of hyperlink
    }
// here you can add multiple if statement based on colId to do the action      //on cell clicked
  }
  ngOnInit(): void {}

}
