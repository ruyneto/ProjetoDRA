import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatSort } from '@angular/material';
import { HttpService } from '../http.service';


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
  //displayedColumns: string[] = ['nome', 'senha'];
  users = [];
  user;
  constructor(public httpService: HttpService) {

    this.users = this.httpService.users;
  }

  ngOnInit() {
    this.httpService.getUsuarios();
  }


  deletar(usuario) {

    if (confirm("Voçê realmente deseja deletar  usuario " + usuario.nome))
      this.httpService.deletarUsuario(usuario);

  }


}
