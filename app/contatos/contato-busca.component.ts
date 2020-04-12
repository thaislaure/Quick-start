import { Component, EventEmitter, OnInit, OnChanges, Input, SimpleChanges, SimpleChange, Output } from '@angular/core';
import { Router} from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Contato } from './contato.model';
import { ContatoService } from './contato.service';


@Component({
    moduleId: module.id,
    selector: 'contato-busca',
    templateUrl: 'contato-busca.component.html',
    styles: [`
    .cursor-pointer: hover{
        cursor: pointer;
    }
    `]
})

export class ContatoBuscaComponent implements OnInit, OnChanges {

    @Input() busca: string;
    @Output() buscaChange: EventEmitter<string> =  new EventEmitter<string>();
    contatos: Observable<Contato[]>;
    private termoDaBusca : Subject<any> = new Subject<any>();

    constructor(
        private contatoService: ContatoService,
        private router : Router
    ){}

    ngOnChanges(changes: SimpleChanges): void {
        let busca: SimpleChange = changes['busca'];
        this.search(busca.currentValue);
    }

    ngOnInit() : void { 
        this.contatos = this.termoDaBusca
        .debounceTime(500)
        .distinctUntilChanged()
        .switchMap(term => term ? this.contatoService.search(term): Observable.of<Contato[]>([]))
            .catch(err =>{
            console.log(err);
            return Observable.of<Contato[]>([]);
        })
    }
    
    search(termo: string): void{
        this.termoDaBusca.next(termo);
        this.buscaChange.emit(termo);
    }

    verDetalhe(contato: Contato): void{
        let link = ['contato/save', contato.id];
        this.router.navigate(link);
        this.buscaChange.emit('');
    }

}