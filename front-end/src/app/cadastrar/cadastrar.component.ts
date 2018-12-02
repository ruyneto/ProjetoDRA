import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuario = {
    "nome" : "",
    "senha" : ""
  }

  httpService : HttpService;
  constructor(httpService : HttpService) { 
    this.httpService = httpService;
    //this.flag = this.httpService.flag;
  }
  ngOnInit() {
  
  }
  cadastrar(){
    this.httpService.cadastrarUsuario(this.usuario);
  /* console.log("nome: "+this.usuario.nome);
  console.log("senha: "+this.usuario.senha); */
  }
}
