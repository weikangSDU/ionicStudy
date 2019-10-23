import { Component } from '@angular/core';

/**
 * Generated class for the ActionSheetComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'action-sheet',
  templateUrl: 'action-sheet.html'
})
export class ActionSheetComponent {

  text: string;
  showText: boolean=true;
  list: Array<string>=['小明','小红','小李']

  constructor() {
    console.log('Hello ActionSheetComponent Component');
    this.text = 'Hello World';
  }

}
