import { Component } from '@angular/core';

@Component({
  selector: 'app-image-formatter-cell',
  template: `<img class="responsive" border="0" src=\"{{ params.value }}\">`,
  styleUrls: ['./imageformatter.css'],})

export class ImageFormatterComponent {
  params: any;
  agInit(params: any) {
    this.params = params;
  }
}
