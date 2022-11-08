const perg = document.querySelector('.personagem');
const bug = document.querySelector('.bug');
const bug2 = document.querySelector('.bug2');
const nuvem = document.querySelector('.nuvem');
const score = document.querySelector('.score');
const local = document.querySelector('.game-board');
const imgEspace = document.querySelector('#Espaco');
const imgEspace1 = document.querySelector('#Espaco1')
const ImgArvore = document.querySelector('.fundoImg');
let pontos = 0;
let vida = true;
var number = 4;




const jump = () => {
    if (vida == true) {
        perg.classList.add('jump');
        perg.src = './img/pulo_parado.gif';

        setTimeout(() => {

            perg.src = './img/Ultimo_Perg.gif';
            perg.classList.remove('jump');

            if (vida == false) {
                perg.src = './img/death-perg.png';
            }

        }, 520);
    }
}

console.log(vida)

const map = setInterval(() => {
    local.classList.add('noite');
    local.classList.remove('dia');
    setTimeout(() => {
        local.classList.remove('noite');
        local.classList.add('dia');
    }, 10000)
}, 20000);

setTimeout(() => {
    local.classList.add('magica')
    setTimeout(() => {
        local.classList.remove('magica')
    }, 16000)   
}, 15000)


setInterval(() => {
    imgEspace.innerHTML = `<img src="img/clouds.png" class="nuvem1">`;
}, 10000);

if ( pontos%100 == 0) {
    number = number-0.1;
}



const loop = setInterval(() => {

    /*console.log(loop)*/

    const bugPosition = bug.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const pergPosition = +window.getComputedStyle(perg).bottom.replace('px', '');

    /*setTimeout(() => {
        imgEspace2.innerHTML = `<img src="../Img/Inimigo correndo.gif" class="bug2" >`;
    
    const nada = setInterval(() => {
    
            var n = 1;
            const position = +window.getComputedStyle(imgEspace).left.replace('px', '');
            console.log(position);
        
            if (n < 1000 ) {
                imgEspace2.classList.add('bug2');
                    
            }
            if (position <= 20 && position > 0 && pergPosition < 30){

        
                perg.src = './img/death-perg.png';
                perg.style.width = '80px'
                perg.style.marginLeft = '30px'
        
                vida = false;

                $("#exampleModalCenter").modal();
                clearInterval(loop);
    
            }
        
        n++
        }, 10);
    
    
    }, 3000);

    /*setTimeout(() => {
        imgEspace1.innerHTML = `<img src="../Img/Inimigo correndo.gif" class="bug3" >`;
    
    const nada = setInterval(() => {
    
            var n = 1;
            const position = +window.getComputedStyle(imgEspace1).left.replace('px', '');
            console.log(position);
        
            if (n < 1500 ) {
                imgEspace1.classList.add('bug3');
                    
            }
            if (position <= 20 && position > 0 && pergPosition < 30){

        
                perg.src = './img/death-perg.png';
                perg.style.width = '80px'
                perg.style.marginLeft = '30px'
        
                vida = false;

                $("#exampleModalCenter").modal();
                clearInterval(loop);
                clearInterval(nada);
    
            }
        
        n++
        }, 10);
    
    
    }, 3800);*/


    /*console.log(pergPosition);*/



    if (bugPosition <= 68 && bugPosition > 0 && pergPosition < 20 ) {

        bug.style.animation = 'none';
        bug.style.left = `${bugPosition}px`;

        perg.style.animation = 'none';
        perg.style.bottom = `${pergPosition}px`;

        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;

        perg.src = './img/death-perg.png';
        perg.style.width = '80px'
        perg.style.marginLeft = '30px'

        local.style.animation = 'none';

        vida = false;

        $("#exampleModalCenter").modal();
        clearInterval(loop);


    }

    if ( pontos%100 == 0) {

        number = number-0.1;

    }

if (number >= 0.7) {

    if (bugPosition > 0 && bugPosition <= 10 ){

        bug.style.animation = 'none'

        console.log("esse codigo foi executado")

            setTimeout(() => {

                bug.style.animation = '';

                bug.style.animationDuration = `${number}s`;

                console.log(number)

            }, 100);

    }

}
    pontos++;
    score.innerHTML = `Score : ${pontos}`;

}, 10);

const morte = setInterval(() => {
    if (vida == false) {
        perg.src = './img/death-perg.png';
    } else {
        clearInterval(morte)
    }
}, 10)



document.addEventListener("keydown", (e) => {
    if ((e.code === "ArrowUp") | (e.code === "Space")) {
        jump();
    }
});