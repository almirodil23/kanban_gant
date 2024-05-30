import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { KanbanComponent } from './kanban/kanban.component';

const routes: Routes = [ 
{path:'', component:HomeComponent,},
{path:'tab', component:TabComponent},
{ path: 'kanban/:i', component: KanbanComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

