const info = ['LUGHT-THIE', 'dooinney', 'ben', 'inneen', 'mac', 'cloan', '', "Çhalse ta'n ennym orrym.", `Ta <span id="my" class="grammar posspro">my</span> <span id="ven" class="grammar mutation">ven</span> enmyssit Aalish.`, "Ta daa chloan aym. Un vac as un inneen.", "Ta my vac enmyssit Juan.", "Ta my 'neen enmyssit Jonee.", "GOOIN LHIU?", "Cre'n ennym t'er my 'neen?"];
const sheean = [new Audio('lught-thie.m4a'), new Audio('dooinney.m4a'), new Audio('ben.m4a'), new Audio('inneen.m4a'), new Audio('mac.m4a'), new Audio('cloan.m4a'), new Audio('enmyn.m4a'), new Audio('chalse.m4a'), new Audio('aalish.m4a'), new Audio('daa-chloan.m4a'), new Audio('juan.m4a'), new Audio('jonee.m4a'), new Audio('gooin.m4a'), new Audio('cre-neen.m4a')];
const cloieBut = document.getElementById('cloie');
const grammFys = [`'my' is a posseive pronoun that causes the first  letter of the next word to mutate.`, `'ven' is the noun 'ben' ('woman' or 'wife'), but the first letter has mutated to 'v' because of 'my.'`];
const grammeydys = document.getElementById('grammeydys');
let raaghyn = [];

crooRaaghyn();

function crooRaaghyn () {
    info.map((e, i) => {
       raaghyn[i] = document.createElement('span');
       raaghyn[i].innerHTML = e;
    });
}

function changeInfo () {
    const shennRaa = document.getElementById('fys').firstChild;
    const raaNoa = raaghyn[img];
    document.getElementById('fys').replaceChild(raaNoa, shennRaa);
}

function cloieSheean () {
    sheean[img].play();
    let tl = gsap.timeline();
    tl.to(cloieBut.firstChild, {opacity: .25, scale: 1.5, duration: 1});
    tl.to(cloieBut.firstChild, {opacity: 1, scale: 1, duration: 1});
    
}

function fysGrammeydys (g) {
    // console.log(grammeydys)
    
    grammeydys.textContent = g;
}

cloieBut.addEventListener('click', cloieSheean);

function grammAarloo () {
    const fysMy = document.getElementById('my');
    fysMy.addEventListener('click', () => {
        fysGrammeydys(grammFys[0]);
    });

    const fysVen = document.getElementById('ven');
    fysVen.addEventListener('click', () => {
        fysGrammeydys(grammFys[1]);
    });
}