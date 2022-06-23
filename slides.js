let slideAmt = 0;
let img = 0;
document.getElementById("pic0").style.opacity = 1;
const panels = gsap.utils.toArray(".panel");
let progbars = [];
const bOp = document.getElementById('backward');
bOp.style.opacity = .25;
const fOp = document.getElementById('forward');
const lChev = document.getElementById('l-chev');
const rChev = document.getElementById('r-chev');

for (let i = 0; i < panels.length-1; i++) {
    progbars[i] = document.createElement('td');
    progbars[i].setAttribute('class', 'progress');
    document.getElementById('progbar').append(progbars[i]);
}

function slide (s) {
    if (slideAmt > -1 * (panels.length-1) && s === 'f') {
        slideAmt -= 1;
        img += 1;
        picOpacity();
        progbars[(slideAmt*-1)-1].style.backgroundColor = 'gold';
    }
    if (slideAmt < 0 && s === 'b') {
        slideAmt += 1;
        img -= 1;
        picOpacity();
        progbars[(slideAmt*-1)].style.backgroundColor = 'darkolivegreen';
    }
    gsap.to(panels, {xPercent: slideAmt*100});
}

function picOpacity () {
    if (img > 0) gsap.to("#pic" + (img-1), {opacity: .25});
    if (img < panels.length-1) gsap.to("#pic" + (img+1), {opacity: .25});
    gsap.to("#pic" + img, {opacity: 1});

    if (img === panels.length-1) {
        fOp.style.opacity = .25;
        rChev.classList.remove("raad");
    }
    else {
        fOp.style.opacity = 1;
        rChev.classList.add("raad");
    }
    if (img === 0) {
        bOp.style.opacity = .25;
        lChev.classList.remove("raad");
    }
    else {
        bOp.style.opacity = 1;
        lChev.classList.add("raad");
    }
    
    changeInfo();
}