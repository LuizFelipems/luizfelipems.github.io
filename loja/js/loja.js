/* Variáveis Globais */
var arrayPreco = [];

function comprarProd(idBtn, nMenu, ndel, preco) {
    //var cont = 0;
    
    document.getElementById(nMenu).style.display = "block"; // recoloca a tag <p> da div do menu
    
    if (idBtn == 1) {
        var prod = {
            nome : "CITZEN",
            descricao: "Relógio Citzen prata Masculino",
            preco: preco, 
            remov: "<a id=del1>X</a>",
        };
    }
    else if (idBtn == 2) {
        var prod = {
            nome : "FOSSIL",
            descricao: "Relógio Fossil marrom Masculino",
            preco: preco, 
            remov: "<a id=del2>X</a>",
        }; 
    }
    else if (idBtn == 3) {
        var prod = {
            nome : "KSBROS",
            descricao: "Relógio Fossil cinza Masculino",
            preco: preco, 
            remov: "<a id=del3>X</a>",
        }; 
    }
    else if (idBtn == 4) {
        var prod = {
            nome : "KSBROS",
            descricao: "Relógio Fossil marron Feminino",
            preco: preco, 
            remov: "<a id=del4>X</a>",
            }; 
    }
    else if (idBtn == 5) {
        var prod = {
            nome : "KSBROS",
            descricao: "Relógio Fossil azul Masculino",
            preco: preco, 
            remov: "<a id=del5>X</a>",
            }; 
    }
    //cont++;
    
    document.getElementById(nMenu).innerHTML = 
        prod.nome + " | " + prod.descricao + " | " + "R$ " + prod.preco + " " + prod.remov;
    
    document.getElementById(ndel).style.color = "#ff0000"; // Mudando cor da fonte
    
    document.getElementById(ndel).onclick = function() {
        //alert("Funcionou!!!");
        document.getElementById(nMenu).innerHTML = " "; // Limpa o texto
        document.getElementById(nMenu).style.display = "none"; // Retira a tag
        
        // Removendo os produtos do carrinho
        if (ndel == "del5") {
            arrayPreco.splice(0, 1); // posicao 0, um item.
            //alert(arrayPreco.length);
            somarTotalPrec();
        }
        else if (ndel == "del4") {
            arrayPreco.splice(1, 1); // posicao 1, um item.
            //alert(arrayPreco.length);
            somarTotalPrec();
        }
        else if (ndel == "del3") {
            arrayPreco.splice(2, 1); // posicao 2, um item.
            //alert(arrayPreco.length);
            somarTotalPrec();
        }        
        else if (ndel == "del2") {
            arrayPreco.splice(3, 1); // posicao 3, 1 item.
            //alert(arrayPreco.length);
            somarTotalPrec();
        }
        else if (ndel == "del1") {
            arrayPreco.splice(4, 1); // posicao 4, um item.
            //alert(arrayPreco.length);
            somarTotalPrec();
        }
    };
     
    adicionarPreco(prod);
    somarTotalPrec();
};
// Adicionar Produto ao carrinho
function adicionarPreco(prod) {
    arrayPreco.push(prod.preco);
    //alert(arrayPreco.length);
    //alert(typeof(arrayPreco.prod.preco));

};

// Somando os produtos do carrinho
function somarTotalPrec() {
    var soma = 0;
    var i;
    
    for (i = 0; i < arrayPreco.length; i++) {
        soma = soma + arrayPreco[i];
    }
    //alert(soma);
    document.getElementById("totalC").innerHTML = 
        "Total: " + soma;
};

// Criando Div descrição

//função para criar uma nova div
/*
function adicionarDescricao(num) {
    if (num == 1) {
        var novadiv = document.createElement('div'); //cria o elemento div

         novadiv.setAttribute('id', 'descricao'); //Atribui nome da div

         novadiv.style.width = '80%'; // Largura da div

         novadiv.style.height = '150px'; //Altura da div

         novadiv.style.position = 'relative'; //Posição absoluta 

         novadiv.style.left = '50px'; // Posicionamento do lado esquerdo

         novadiv.style.top = '-100px'; //Posicionamento no topo

         novadiv.style.backgroundColor = '#f2f2f2'; //Atribui cor do plano de fundo da div

         novadiv.style.border = '1px solid #000' //Borda da div

         novadiv.innerHTML = '<h2>Relógio CITZEN</h2> <hr> <p>Relógio Citzen prata Masculino</p> <p> R$ 1.000,00 </p>' // Conteúdo da div

         document.body.appendChild(novadiv); // Anexa a nova div no corpo da pág ...
    }
        else if (num == 2) {
        var novadiv = document.createElement('div'); //cria o elemento div

         novadiv.setAttribute('id', 'descricao'); //Atribui nome da div

         novadiv.style.width = '80%'; // Largura da div

         novadiv.style.height = '150px'; //Altura da div

         novadiv.style.position = 'relative'; //Posição absoluta 

         novadiv.style.left = '50px'; // Posicionamento do lado esquerdo

         novadiv.style.top = '-100px'; //Posicionamento no topo

         novadiv.style.backgroundColor = '#f2f2f2'; //Atribui cor do plano de fundo da div

         novadiv.style.border = '1px solid #000' //Borda da div

         novadiv.innerHTML = '<h2>Relógio FOSSIL</h2> <hr> <p>Relógio Fossil marrom Masculino</p> <p> R$ 1.000,00 </p>' // Conteúdo da div

         document.body.appendChild(novadiv); // Anexa a nova div no corpo da pág ...
    }
         else if (num == 3) {
         var novadiv = document.createElement('div'); //cria o elemento div

         novadiv.setAttribute('id', 'descricao'); //Atribui nome da div

         novadiv.style.width = '80%'; // Largura da div

         novadiv.style.height = '150px'; //Altura da div

         novadiv.style.position = 'relative'; //Posição absoluta 

         novadiv.style.left = '50px'; // Posicionamento do lado esquerdo

         novadiv.style.top = '-100px'; //Posicionamento no topo

         novadiv.style.backgroundColor = '#f2f2f2'; //Atribui cor do plano de fundo da div

         novadiv.style.border = '1px solid #000' //Borda da div

         novadiv.innerHTML = '<h2>Relógio KSBROS</h2> <hr> <p>Relógio Fossil cinza Masculino</p> <p> R$ 1.000,00 </p>' // Conteúdo da div

         document.body.appendChild(novadiv); // Anexa a nova div no corpo da pág ...
    }
         else if (num == 4) {
         var novadiv = document.createElement('div'); //cria o elemento div

         novadiv.setAttribute('id', 'descricao'); //Atribui nome da div

         novadiv.style.width = '80%'; // Largura da div

         novadiv.style.height = '150px'; //Altura da div

         novadiv.style.position = 'relative'; //Posição absoluta 

         novadiv.style.left = '50px'; // Posicionamento do lado esquerdo

         novadiv.style.top = '-100px'; //Posicionamento no topo

         novadiv.style.backgroundColor = '#f2f2f2'; //Atribui cor do plano de fundo da div

         novadiv.style.border = '1px solid #000' //Borda da div

         novadiv.innerHTML = '<h2>Relógio KSBROS</h2> <hr> <p>Relógio Fossil marron Feminino</p> <p> R$ 1.000,00 </p>' // Conteúdo da div

         document.body.appendChild(novadiv); // Anexa a nova div no corpo da pág ...
    }
         else if (num == 5) {
         var novadiv = document.createElement('div'); //cria o elemento div

         novadiv.setAttribute('id', 'descricao'); //Atribui nome da div

         novadiv.style.width = '80%'; // Largura da div

         novadiv.style.height = '150px'; //Altura da div

         novadiv.style.position = 'relative'; //Posição absoluta 

         novadiv.style.left = '50px'; // Posicionamento do lado esquerdo

         novadiv.style.top = '-100px'; //Posicionamento no topo

         novadiv.style.backgroundColor = '#f2f2f2'; //Atribui cor do plano de fundo da div

         novadiv.style.border = '1px solid #000' //Borda da div

         novadiv.innerHTML = '<h2>Relógio KSBROS</h2> <hr> <p>Relógio Fossil azul Masculino</p> <p> R$ 1.000,00 </p>' // Conteúdo da div

         document.body.appendChild(novadiv); // Anexa a nova div no corpo da pág ...
    }
};
*/
function removerDescricao() {
    document.getElementById("descricao").remove();
};

/* Elementos arrastáveis */
/*
$(function() {
    $("#box1").draggable();
    $("#box2").droppable({
         drop: function(event) {
            $(this).addClass("ui-state-highlight")
            .find("#ai").html("Colocado!!!");
            }
        });
});
*/
$(function() {
    $("#catalogo #box1,#box2,#box3,#box4").draggable({
        helper: "clone"
    });
    $("#carrinho p").droppable({
        drop: function(event, ui) {
            //comprarProd(1, "exibir1", "del1", 1000);
            //alert("Huhuuu!!");
            //$(this).append("<b> Isso </b>.");
            //console.log("huhum");
        }
    });
});