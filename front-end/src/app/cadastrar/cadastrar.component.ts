import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


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

   constructor(public httpService : HttpService, private route: ActivatedRoute,  private location: Location) { 
    
    this.httpService.location = location;
  }
  ngOnInit() {
  
  }
  cadastrar(){
    this.httpService.cadastrarUsuario(this.usuario);
  /* console.log("nome: "+this.usuario.nome);
  console.log("senha: "+this.usuario.senha); */
  }
}
