const ansKiart = [/jonee/i]
const ans = document.getElementById('ansoor');
const coyrle = [document.getElementById('reesht'), document.getElementById('moyll')]
const cramman = document.getElementById('cramman');
const coraa = [new Audio('reesht.m4a'), new Audio('moyll.m4a')];

function checkAns () {
    let res = ansKiart[0].test(ans.firstElementChild.value);
    res ? follaghey(ans, true) : follaghey(ans, false);
}

function follaghey (ans, a) {
    if (a) {
        coraa[1].play();
        ans.style.display = 'none';
        coyrle[1].style.display = 'block';
        cramman.style.display = 'none';
    }
    else {
        coraa[0].play();
        ans.style.display = 'none';
        coyrle[0].style.display = 'block';
        setTimeout(() => {
            coyrle[0].style.display = 'none';
            img === 13 ? ans.style.display = 'block' : ans.style.display = 'none';
        }, 1500);
    }
}

function crooTonnane (taghyrt, target, m) {
    const kiarkyl = document.createElement('span');
    const diameter = Math.max(target.clientWidth, target.clientHeight)*m;
    const radius = diameter/2;

    kiarkyl.style.width = kiarkyl.style.height = `${diameter}px`;
    kiarkyl.style.left = `${taghyrt.clientX - (target.offsetLeft + radius)}px`;
    kiarkyl.style.top = `${taghyrt.clientY - (target.offsetTop + radius)}px`;
    kiarkyl.classList.add('tonnane');
    const tonnane = target.getElementsByClassName('tonnane')[0];

    if (tonnane) {
        tonnane.remove();
    }

    target.appendChild(kiarkyl);
}

cramman.addEventListener('click', (taghyrt) => {
    checkAns();
    crooTonnane(taghyrt, taghyrt.target, 1);
});