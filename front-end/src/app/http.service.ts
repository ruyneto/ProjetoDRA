import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable()
export class ListarService{
    users = [];
    baseURL: string;
    flag = false;
    constructor(private http:HttpClient){
        this.baseURL = 'http://localhost:300/';
    }

    getUsuarios(component){

       this.http.get(this.baseURL)
       .subscribe((data: any) => {
        console.log("tamanho: "+data.lista.length);    
        data.lista.forEach(element => {
                this.users.push({
                    nome: element.nome,
                    senha : element.senha
                });
            });
           
        component.flag = true;        
        })
                                   
                                    
    }
   
    

    
}