//estoque.js

let estoque ={
    'joao': [{'tipo': 'maca', 'qtd': 1}],   
    'maria': [{'tipo': 'maca', 'qtd': 2}]
};

export function getEstoque(){
    return structuredClone(estoque); //clona a estrutura do estoque para não ser alterada fora da função
}

export function limpaEstoque(){
    estoque={};
}

export function transacaoNoEstoque(origem, destino, quantidade, fruta){
    if(origem === 'pomar'){
        const pessoa = estoque[destino];
        for (let i = 0; i < pessoa.length; i++) {
            let monte;
            if(monte.tipo === fruta){
                monte = pessoa[i];
                break;
            }
            if(monte === undefined){
              monte = {'tipo': fruta, 'qtd': 0};
              pessoa.push(monte);
            }
            monte.qtd += quantidade;
        }
    }
}
