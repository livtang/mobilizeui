/* tslint:disable:no-console */
import { EventListService } from './eventlist.service';
import {Component, OnInit} from '@angular/core';
import {ImageFormatterComponent} from '../imageformatter/imageformatter.component';

@Component({
  selector: 'eventlist',
  templateUrl: './eventlist.component.html',
  styleUrls: ['./eventlist.css'],
  providers: [EventListService],
})

export class EventListComponent implements OnInit {

  constructor(private eventListService: EventListService) {
    this.eventListService.getAllPublicEvents().subscribe(result => {
      this.dataSource = result as any as Event[];
    });

  }

  events: Event[];

  eventsColumnDefs = [
        {headerName: 'Event Name', field: 'title', resizable: true, cellRenderer: (params: { value: string; }) => {
            return '<a href="#">' + params.value + '</a>';
          }},
        {headerName: 'Summary', field: 'description', resizable: true},
        {headerName: 'Logo', field: 'featured_image_url' , autoWidth: true,  autoHeight: true, cellRendererFramework: ImageFormatterComponent }

    ];

  dataSource: Event[];

  columnsToDisplay = ['title', 'summary'];

  onCellClicked(event: any) {
    console.log('clicked on cell');
    console.log(event.data);
    if (event.colDef.field === 'title' ) {
      console.log('clicked on title');
      window.location.href = event.data.browser_url;
    }
  }

  ngOnInit(): void {}

}
