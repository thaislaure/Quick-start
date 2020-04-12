"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano de Tal', email: 'fulano@email.com', telefone: '(00)99988889' },
            { id: 2, nome: 'ana de Tal', email: 'fulano@email.com', telefone: '(00)99988889' },
            { id: 3, nome: 'seu de Tal', email: 'fulano@email.com', telefone: '(00)99988889' },
            { id: 4, nome: 'bob de Tal', email: 'fulano@email.com', telefone: '(00)99988889' },
            { id: 5, nome: 'marcos de Tal', email: 'fulano@email.com', telefone: '(00)99988889' },
            { id: 6, nome: 'joao de Tal', email: 'fulano@email.com', telefone: '(00)99988889' },
        ];
        let carros = [
            { id: 1, descricao: 'Camato' },
            { id: 2, descricao: 'Mustang' }
        ];
        return {
            'contatos': contatos,
            'carros': carros
        };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map