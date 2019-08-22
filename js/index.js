var itensCardapioUm = ["Item1", "Item2", "Item3", "Item4"];
var itensCardapioDois = ["Item1", "Item2", "Item3", "Item4", "Item5"];
var itensCardapioTres = ["Item1", "Item2", "Item3", "Item4", "Item5"];
var itensCardapioQuatro = ["Item1", "Item2", "Item3", "Item4", "Item5"];
var itensCardapioCinco = ["Item1", "Item2", "Item3", "Item4", "Item5"];

function carregarCardapio(numeroCardapio){
    let listElement = document.querySelector('ul.lista-cardapio');
    let cardapio = [];
    listElement.innerHTML = '';
    
    switch(numeroCardapio){
        case 1:
        cardapio = itensCardapioUm;
        break;
        case 2:
        cardapio = itensCardapioDois;
        break;
        case 3:
        cardapio = itensCardapioTres;
        break;
        case 4:
        cardapio = itensCardapioQuatro;
        break;
        case 5:
        cardapio = itensCardapioCinco;
        break;
        default:
        cardapio = [];
    }
    
    for(item of cardapio){
        let itemCardapio = document.createElement('li');
        let descCardapio = document.createTextNode(item);
        itemCardapio.setAttribute('class', 'item-cardapio');
        itemCardapio.appendChild(descCardapio);
        listElement.appendChild(itemCardapio);
    }
    
}

function adicionaTitulo(numeroCardapio){
    let mainElement = document.querySelector('main.main-element');
    mainElement.innerHTML = '';
    let articleElement = document.createElement('article');
    let listaElemento = document.createElement('ul');
    listaElemento.setAttribute('class','lista-cardapio');
    let tituloCardapio = '';
    let nomeCardapio = '';
    switch(numeroCardapio){
        case 1:
        tituloCardapio = document.createElement('h3');
        tituloCardapio.setAttribute('id', 'titulo-cardapio');
        nomeCardapio = document.createTextNode("Casamento");
        tituloCardapio.appendChild(nomeCardapio);
        mainElement.prepend(tituloCardapio);
        articleElement.appendChild(listaElemento);
        console.log(mainElement.childNodes);
        mainElement.appendChild(articleElement);
        break;
        case 2:
        tituloCardapio = document.createElement('h3');
        tituloCardapio.setAttribute('id', 'titulo-cardapio');
        nomeCardapio = document.createTextNode("Comidinha de Buteco");
        tituloCardapio.appendChild(nomeCardapio);
        mainElement.prepend(tituloCardapio);
        articleElement.appendChild(listaElemento);
        mainElement.appendChild(articleElement);
        break;
        case 3:
        tituloCardapio = document.createElement('h3');
        tituloCardapio.setAttribute('id', 'titulo-cardapio');
        nomeCardapio = document.createTextNode("Mais Pedido");
        tituloCardapio.appendChild(nomeCardapio);
        mainElement.prepend(tituloCardapio);
        articleElement.appendChild(listaElemento);
        mainElement.appendChild(articleElement);
        break;
        case 4:
        tituloCardapio = document.createElement('h3');
        tituloCardapio.setAttribute('id', 'titulo-cardapio');
        nomeCardapio = document.createTextNode("Churrasco");
        tituloCardapio.appendChild(nomeCardapio);
        mainElement.prepend(tituloCardapio);
        articleElement.appendChild(listaElemento);
        mainElement.appendChild(articleElement);
        break;
        case 5:
        tituloCardapio = document.createElement('h3');
        tituloCardapio.setAttribute('id', 'titulo-cardapio');
        nomeCardapio = document.createTextNode("Frios");
        tituloCardapio.appendChild(nomeCardapio);
        mainElement.prepend(tituloCardapio);
        articleElement.appendChild(listaElemento);
        mainElement.appendChild(articleElement);
        break;
        default:
        break;
    }
    carregarCardapio(numeroCardapio);
}
