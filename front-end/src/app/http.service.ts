import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';



@Injectable()
export class HttpService{
    users = [];
    baseURL: string;
    flag = false;
    constructor(private http:HttpClient){
        this.baseURL = 'http://localhost:300/';
    }

    getUsuarios(component){

       this.http.get(this.baseURL, {})
       .subscribe((data: any) => {
        console.log("tamanho: "+data.length);    
        data.forEach(element => {
                this.users.push({
                    nome: element.nome,
                    senha : element.senha
                });
            });
           
        component.flag = true;        
        })
                                   
                                    
    }
    
    cadastrarUsuario(usuario){
        console.log("inspecao:"+this.baseURL+'inserir');
        this.http.post(this.baseURL+'inserir', usuario).subscribe((data: any) => {
        console.log("data resposta: "+data);    
          
        })
    }
    
}