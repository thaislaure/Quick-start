import  {Http, Headers, Response} from '@angular/http';
import { Injectable} from '@angular/core'
import { Contato} from './contato.model';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { ServiceInterface} from './../interfaces/service.interface';

@Injectable()
export class ContatoService implements ServiceInterface<Contato>{

    private contatoUrl: string = 'app/contatos';
    private headers : Headers =  new Headers({'Content-Type': 'application/json'})

    constructor(
        private http: Http
    ){}

    findAll(): Promise<Contato[]>{
        return this.http.get(this.contatoUrl)
        .toPromise()
        .then(response => response.json().data as Contato[])
        .catch(this.handleError);
    }

    find(id: number): Promise<Contato>{
        return this.findAll()
        .then((contatos : Contato[]) => contatos.find((contato) => contato.id === id));
    }

    create(contato: Contato): Promise<Contato>{
        return this.http
        .post(this.contatoUrl, JSON.stringify(contato), {headers : this.headers })
        .toPromise()
        .then((response : Response) => response.json().data as Contato)
        .catch(this.handleError);
    }

    update(contato: Contato): Promise<Contato>{
        const url = `${this.contatoUrl}/${contato.id}`;
        return this.http
        .put(url, JSON.stringify(contato), {headers : this.headers })
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError); 
    }

    delete(contato: Contato): Promise<Contato>{
        const url = `${this.contatoUrl}/${contato.id}`;
        return this.http
        .delete(url, {headers : this.headers })
        .toPromise()
        .then(() => contato as Contato)
        .catch(this.handleError); 
    }

    private handleError(err: any) : Promise<any>{
        return Promise.reject(err.message || err);
    }

    getContatosSlowly(): Promise<Contato[]>{
        return new Promise((resolve, reject) =>{
            setTimeout(resolve,2000);
        })
        .then(() => {
            return 'Curso Angular';
        })
        .then((param: string) => {
            console.log(param);
        })
        .then(() => {
            return this.findAll();
         });
    }

    search(term : string): Observable<Contato[]>{
        return this.http
        .get(`${this.contatoUrl}/?nome=${term}`)
        .map((res: Response) => res.json().data as Contato[]);

    }

}