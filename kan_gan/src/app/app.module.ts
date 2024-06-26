import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { CommonModule, JsonPipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';  
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabComponent } from './tab/tab.component';
import { MatCheckboxModule} from '@angular/material/checkbox';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DxBulletModule, DxChartComponent, DxChartModule, DxCheckBoxModule, DxDataGridModule, DxFormModule, DxGanttModule, DxPivotGridComponent, DxPivotGridModule, DxScrollViewModule, DxSelectBoxModule, DxSortableModule, DxTemplateModule } from 'devextreme-angular';
import { RouteReuseStrategy } from '@angular/router';
import { KanbanComponent } from './kanban/kanban.component';
import { KanbanService } from './kanban.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GanttComponent } from './gantt/gantt.component';
import { GraficoComponent } from './grafico/grafico.component';
import { GanttService } from './gantt/gantt.service';
import { GraficoService } from './grafico/grafico.service';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TabComponent,
    KanbanComponent,
    GanttComponent,
    GraficoComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatListModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule,
    MatCheckboxModule,
    DragDropModule,
    CommonModule,DxBulletModule,
    DxDataGridModule,
    DxTemplateModule,
    ReactiveFormsModule,
    DxPivotGridModule,
    DxChartModule,
    DxFormModule,
    DxScrollViewModule,
    DxSortableModule,
    HttpClientModule,
    BrowserModule,
    DxGanttModule,
    DxCheckBoxModule,
    DxSelectBoxModule,
    AppRoutingModule,
    DxChartModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    FormsModule, 
    ReactiveFormsModule, 
    JsonPipe,
    MatFormFieldModule,

  

  
  
  ],
  providers: [KanbanService,GanttService,GraficoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
