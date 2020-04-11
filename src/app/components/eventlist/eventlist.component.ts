/* tslint:disable:no-console */
import { EventListService } from './eventlist.service';
import {Component, OnInit} from '@angular/core';
import {ImageFormatterComponent} from '../imageformatter/imageformatter.component';
import {GridApi, GridOptions} from 'ag-grid-community';

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

  gridApi: GridApi;

  events: Event[];

  eventsColumnDefs = [
        {headerName: 'Event Name', field: 'title', resizable: true, cellRenderer: (params: { value: string; }) => {
            return '<a href="#">' + params.value + '</a>';
          }},
        {headerName: 'Location', field: 'location.region', resizable: true},
        {headerName: 'Summary', field: 'description', resizable: true},
        {headerName: 'Logo', field: 'featured_image_url' , autoWidth: true,  autoHeight: true,
          cellRendererFramework: ImageFormatterComponent }

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
