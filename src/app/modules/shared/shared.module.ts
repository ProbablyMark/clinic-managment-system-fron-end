import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultBtnComponent } from './default-btn/default-btn.component';
import { DefaultDropDownComponent } from './default-drop-down/default-drop-down.component';
import { DefaultTableComponent } from './default-table/default-table.component';
import { DefaultSearchComponent } from './default-search/default-search.component';
import { DefaultCalendarComponent } from './default-calendar/default-calendar.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DefaultBtnComponent,
    DefaultDropDownComponent,
    DefaultTableComponent,
    DefaultSearchComponent,
    DefaultCalendarComponent,
  ],
  imports: [CommonModule, CalendarModule, CardModule, FormsModule],
  exports: [ButtonModule, TabMenuModule, CardModule, CalendarModule],
})
export class SharedUiModule {}
