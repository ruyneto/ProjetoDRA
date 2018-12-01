import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListarService } from './listar/listar.service';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ListarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
