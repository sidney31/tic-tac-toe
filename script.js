let who = 0;
let e;

let player1 = 0, player2 = 0;


function clear() {
    getWho()
    for (let i = 1; i< 10; i++){
        eval(`box${i}.innerHTML = "";`)
        eval(`box${i}.style.pointerEvents="auto";`)
    }
}

function getWho(){
    if (!who) {
        motion.innerHTML = "Ходит крестик!";
    } else {
        motion.innerHTML = "Ходит нолик!";
    }
    who = !who
}
o = "<i class='fa fa-circle-thin fa-5x'></i>";
x = "<i class='fa fa-times fa-5x'></i>";
function win(){
    for (let j = 0; j < 2; j++) {
        if ((eval(`box1.innerHTML == ${o || x} && box2.innerHTML == ${o || x} && box3.innerHTML == ${o || x}`))){
            console.log('yes')
            if (j) {
                motion.innerHTML = 'Победил нолик!'; 
                player2++;
            }else{
                motion.innerHTML = 'Победил крестик!';
                player1++;
            }

            all.style.pointerEvents='auto';
            setTimeout(() => {
                clear();
                all.style.pointerEvents = 'none';
                counter.innerHTML = `<div>Крестик: ${player1}</div> <div>Нолик: ${player2}</div>`;}, 3000);
        }
    }
}
document.addEventListener('click', e => {
    for (let i = 1; i < 10; i++){
        if (eval(`e.target.id == "box${i}"`)){
            if (who) {
                eval(`box${i}.innerHTML = "<i class='fa fa-times fa-5x'></i>";`)
            } else {
                eval(`box${i}.innerHTML = "<i class='fa fa-circle-thin fa-5x'></i>";`)
            }
            eval(`box${i}.style.pointerEvents="none"`)
            getWho()
            win()
        }
    }
})
button.onclick = function(){
    clear()
};