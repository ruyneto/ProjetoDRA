import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    users = [];
    baseURL: string;
    flag = false;
    location;
    constructor(private http: HttpClient) {
        this.baseURL = 'http://localhost:300/';
    }

    getUsuario(id) {
        let usuario;
        this.users.forEach(element => {
            if (element._id == id) usuario = element;
        });;
        return usuario;
    }

    getUsuarios() {

        this.http.get(this.baseURL)
            .subscribe((data: any) => {
                this.users.splice(0);
                data.forEach(element => {
                    this.users.push(element);
                    console.log(element);
                });
            })


    }

    cadastrarUsuario(usuario) {
        console.log("inspecao:" + this.baseURL + 'inserir');
        this.http.post(this.baseURL + 'inserir', usuario).subscribe((data: any) => {
            console.log("data resposta: " + data);
            this.getUsuarios();
            this.location.back();
        });

    }

    atualizarUsuario(usuario) {
        //console.log("inspecao:"+this.baseURL+'inserir');
        this.http.put(this.baseURL + 'update', usuario).subscribe((data: any) => {
            console.log("data resposta: " + data);
            this.getUsuarios();
            this.location.back();
        });

    }
    deletarUsuario(usuario) {

        console.log("usuario" + JSON.stringify(usuario));
        this.http.request('delete', this.baseURL + 'deletar', { body: usuario })
            .subscribe((data: any) => {
                /* console.log("data resposta:"+JSON.stringify(data));*/
                this.getUsuarios();
            })
    }
}