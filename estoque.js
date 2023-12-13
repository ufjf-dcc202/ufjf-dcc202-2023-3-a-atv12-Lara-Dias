//estoque.js

let estoque ={
    'joao': [{'tipo': "maca", 'qtd': 1},
            {'tipo': "pera", 'qtd': 1}
],   
'maria': [{tipo: "maca", 'qtd': 2},
        {'tipo': "pera", 'qtd': 4}
    ]
};

export function getEstoque(){
    return structuredClone(estoque); //clona a estrutura do estoque para não ser alterada fora da função
}

export function transacao(origem, destino, quantidade, fruta){
    if(origem === 'pomar'){
        estoque[destino][0].qtd += quantidade;
    }
}
