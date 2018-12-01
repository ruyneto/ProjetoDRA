import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListarService } from './http.service';
import { AppComponent } from './app.component';
import { ListarComponent } from './listar/listar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CadastrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ListarService],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
