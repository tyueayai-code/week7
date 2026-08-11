let score = 0
const scoreDisplay = document.getElementById('score');
const clickBtn = document.getElementById('click-btn');
const clickSound = new Audio('click.mp3');

clickBtn.addEventListener('click',function(e){
    score =score+1;
    scoreDisplay.textContent=score;
    clickSound.currentTime =0;
    clickSound.play();
    createFloatingNumber(e.clientX,e.clientY)
});

function createFloatingNumber(x,y){
    const number=document.createElement('div');
    number.textContent='+1';
    number.className='floating-number';

    number.style.left = x + 'px'
    number.style.top = y + 'px'
    document.body.appendChild(number);

    setTimeout(()=> {
        number.remove();
    }, 1000);
}
