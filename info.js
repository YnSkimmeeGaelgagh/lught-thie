const info = ['LUGHT-THIE', 'dooinney', 'ben', 'inneen', 'mac', 'cloan', '(names)', "Çhalse ta'n ennym orrym.", `Ta <span class="grammar posspro">my</span> <span class="grammar mutation">ven</span> enmyssit Aalish.`, "Ta daa chloan aym. Un vac as un inneen.", "Ta my vac enmyssit Juan.", "Ta my 'neen enmyssit Jonee.", "GOOIN LHIU?", "Cre'n ennym t'er my 'neen?"];
const sheean = [new Audio('lught-thie.m4a'), new Audio('dooinney.m4a'), new Audio('ben.m4a'), new Audio('inneen.m4a'), new Audio('mac.m4a'), new Audio('cloan.m4a'), new Audio('enmyn.m4a'), new Audio('chalse.m4a'), new Audio('aalish.m4a'), new Audio('daa-chloan.m4a'), new Audio('juan.m4a'), new Audio('jonee.m4a'), new Audio('gooin.m4a'), new Audio('cre-neen.m4a')];
const cloieBut = document.getElementById('cloie');

function changeInfo () {
    document.getElementById('info-box').innerHTML = info[img];
}

cloieBut.addEventListener('click', cloieSheean);


function cloieSheean () {
    sheean[img].play();
    let tl = gsap.timeline();
    tl.to(cloieBut.firstChild, {opacity: .25, scale: 1.5, duration: 1});
    tl.to(cloieBut.firstChild, {opacity: 1, scale: 1, duration: 1});
    
}