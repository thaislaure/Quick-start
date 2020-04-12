import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Contato} from './contatos/contato.model';

export class InMemoryDataService implements InMemoryDbService{

    createDb(): {}{
        let contatos :  Contato[] = [
            {id: 1, nome: 'Fulano de Tal', email: 'fulano@email.com', telefone: '(00)99988889'},
            {id: 2, nome: 'ana de Tal', email: 'fulano@email.com', telefone: '(00)99988889'},
            {id: 3, nome: 'seu de Tal', email: 'fulano@email.com', telefone: '(00)99988889'},
            {id: 4, nome: 'bob de Tal', email: 'fulano@email.com', telefone: '(00)99988889'},
            {id: 5, nome: 'marcos de Tal', email: 'fulano@email.com', telefone: '(00)99988889'},
            {id: 6, nome: 'joao de Tal', email: 'fulano@email.com', telefone: '(00)99988889'},
        ];

        let carros: any[] = [
            {id: 1, descricao: 'Camato'},
            {id: 2, descricao: 'Mustang'}
        ]

        return {
            'contatos' : contatos,
            'carros' : carros
        };
    }
}