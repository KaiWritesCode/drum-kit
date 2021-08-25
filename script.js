const key = document.querySelectorAll('.box')
window.addEventListener('keydown', playSound);



function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const box = document.querySelector(`.box[data-key="${e.keyCode}"]`)
    if (!audio) return; // stops functoin from runnng all together
    audio.play()
    audio.currentTime = 0;
    box.classList.add('playing')
    setTimeout(() => {
    }, 0.07)
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const box = document.querySelectorAll('.box');
box.forEach(box => box.addEventListener('transitionend', removeTransition))