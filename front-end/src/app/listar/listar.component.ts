import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpService } from '../http.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Pessoa {
  name: string;
  senha: string;
}


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'senha'];
    users : Pessoa[];
    httpService : HttpService;
    flag = false;

  constructor(httpService : HttpService) { 
    this.httpService = httpService;
    this.users = this.httpService.users;
    this.flag = this.httpService.flag;
  }

  ngOnInit() {
    this.httpService.getUsuarios(this);   
  }

}
