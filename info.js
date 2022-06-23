const info = ['LUGHT-THIE', 'dooinney', 'ben', 'inneen', 'mac', 'cloan', '(names)', "Çhalse ta'n ennym orrym.", `Ta <span class="grammar posspro">my</span> <span class="grammar mutation">ven</span> enmyssit Aalish.`, "Ta daa chloan aym. Un vac as un inneen.", "Ta my vac enmyssit Juan.", "Ta my 'neen enmyssit Jonee.", "GOOIN LHIU?", "Cre'n ennym t'er my 'neen?"];
const sheean = [new Audio('sample.wav')]

function changeInfo () {
    document.getElementById('info-box').innerHTML = info[img];
}

function cloieSheean () {
    sheean[0].play();
}