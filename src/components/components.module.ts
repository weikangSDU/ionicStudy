import { NgModule } from '@angular/core';
import { ActionSheetComponent } from './action-sheet/action-sheet';
import {BrowserModule} from '@angular/platform-browser'
@NgModule({
	declarations: [ActionSheetComponent],
	imports: [BrowserModule],
	exports: [ActionSheetComponent]
})
export class ComponentsModule {}
