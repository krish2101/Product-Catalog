import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProductComponent } from './shared/product/product.component';
import { routes } from './app.routes';


import { CalendarModule, TabViewModule, DataTableModule,InputSwitchModule,FileUploadModule ,
         PanelModule
       } from 'primeng/primeng';
import { SplitButtonModule } from 'primeng/splitbutton';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { HomeComponent } from './shared/home/home.component';
import { ChildComponent } from './child/child.component';
import { CreateratecardComponent } from './shared/createratecard/createratecard.component';
import { ShowingsComponent } from './shared/showings/showings.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    HeaderComponent,
    ProductComponent,
    HomeComponent,
    ChildComponent,
    CreateratecardComponent,
    ShowingsComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, AccordionModule,PanelModule,
    CalendarModule, SplitButtonModule, DataTableModule, DialogModule, HttpModule,InputSwitchModule,FileUploadModule,
    FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), TableModule, TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
