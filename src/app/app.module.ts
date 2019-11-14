import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StreetComponent } from './street/street.component';
import { HouseComponent } from './house/house.component';
import { StreetListComponent } from './street/street-list/street-list.component';
import { StreetStartComponent } from './street/street-start/street-start.component';
import { StreetEditComponent } from './street/street-edit/street-edit.component';
import { StreetService } from './service/street.service';
import { StreetDataComponent } from './street/street-list/street-data/street-data.component';
import { HouseListComponent } from './house/house-list/house-list.component';
import { HouseDataComponent } from './house/house-list/house-data/house-data.component';
import { HouseEditComponent } from './house/house-edit/house-edit.component';
import { HouseService } from './service/house.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StreetComponent,
    HouseComponent,
    StreetListComponent,
    StreetStartComponent,
    StreetEditComponent,
    StreetDataComponent,
    HouseListComponent,
    HouseDataComponent,
    HouseEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ StreetService, HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
