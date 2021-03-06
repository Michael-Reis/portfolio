//Menu
class MobileNavbar{
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = 'active';
        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link, index) => {  
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`)
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener('click', this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}
const mobileNavbar = new MobileNavbar(
    '.mobile-menu',
    '.nav-list',
    '.nav-list li',
);
mobileNavbar.init();

//Maquina de escrever
function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
              
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)
        
    });
}
const titulo = document.querySelector('.maquina-escrever');
typeWrite(titulo);

//Scroll TOP
$(document).ready(function () {
    var scrollTop = $('.scrollTop');

    $(window).scroll(function () {
        var topPos = $(this).scrollTop();
        //Quantidade Y que o botão de scroll vai aparecer
        if (topPos > 500) {
            $(scrollTop).css('opacity', '1');
        }else {
            $(scrollTop).css('opacity', '0');
        }
    });

    //Velocidade a animação
    $(scrollTop).click(function () {
        $('html, body').animate(
            {
                scrollTop: 0,
            },
            100
        );
        return false;
    });
});

//Revelar animação
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

//Home delay
sr.reveal('.button',{delay: 200})
sr.reveal('.linguagensProjeto',{delay: 400})
sr.reveal('.imagem-espaco-delay',{delay: 200})
sr.reveal('.imagem-michael-delay',{delay: 600}) 
//Sobre mim delay
sr.reveal('.imagem-delay',{})
sr.reveal('.titulo-delay',{delay: 200})
sr.reveal('.descricao-delay',{delay: 400})
sr.reveal('.cards-interval',{interval: 400})


//Animação conhecimentos
var texto1 = document.querySelector('.mudarTextoDescricao')

    document.querySelector('.html').addEventListener('mouseover', function (){
        texto1.innerHTML = 'HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir. <br><br> 2 anos de experiência'
    })

    document.querySelector('.css').addEventListener('mouseover', function (){
        texto1.innerHTML = 'CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML. <br><br> 2 anos de experiência'
    })

    document.querySelector('.js').addEventListener('mouseover', function (){
        texto1.innerHTML = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. <br><br> 2 ano de experiência'
    })

    document.querySelector('.bootstrap').addEventListener('mouseover', function (){
        texto1.innerHTML = 'Bootstrap é um framework para desenvolvimento de componentes de interface front-end para sites e aplicações web usando HTML, CSS e JavaScript. <br><br> 2 ano de experiência'
    })

    document.querySelector('.sass').addEventListener('mouseover', function (){
        texto1.innerHTML = 'PHP é uma linguagem de programação utilizada do lado do servidor, no caso back-end. <br><br> 3 anos de experiência'
    })

    document.querySelector('.react').addEventListener('mouseover', function (){ 
        texto1.innerHTML = 'Node JS é uma linguagem de programação que é muito utilizada do lado do servidor. <br><br> 1 ano de experiência'
    })

    document.querySelector('.next').addEventListener('mouseover', function (){
        texto1.innerHTML = 'O MySQL é um sistema de gerenciamento de banco de dados relacionais (RBDMs) de código aberto (open source) com um funcionamento baseado em um modelo do tipo cliente-servidor<br><br> 3 anos de experiência'
    })

    document.querySelector('.styled').addEventListener('mouseover', function mudarTexto8(){
        texto1.innerHTML = 'Python é uma linguagem de uso geral, que pode ser utilizada para diversas aplicações. Apresenta uma sintaxe simples, tornando os programas mais legíveis, o que também facilita o aprendizado da linguagem <br><br> 6 mêses de experiência'
    })

    var sairCaixa = document.getElementsByClassName('sairCaixa')

    for (i = 0; i < sairCaixa.length; i++) {
      sairCaixa[i].addEventListener('mouseout', function mudarTextoNormal(){
        texto1.innerHTML = `Estou convencido de que juntos alcançaremos coisas incríveis.💜<br><br>*passe o mouse no card para ler sobre*`
      })
    }



/*
//Validação captcha do contato
valor = document.getElementById('campo').value

function testar() {
    if (valor != 'g') {
        alert('Complete o nome "google" com uma letra para enviar!')
    }
}*/


