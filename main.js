
function changeColor() {
    const colors = [ 'pink', 'orange' , 'red', 'purple', 'blue', 'teal']
    const rando = () => colors[Math.floor (Math.random() * colors.length)];
    document.getElementById("changeColor").style.cssText = `
    --dark-color: ${rando()};
    --light-color: ${rando()};`
  }


   /* Toggle Animations */
   const jstoggle = document.getElementById('js-toggle-stars');
   jstoggle.addEventListener('click', () => {
     const animations = document.querySelectorAll('.star');
     animations.forEach(animation => {
       const running = animation.style.animationPlayState || 'running';
       animation.style.animationPlayState = running === 'running' ? 'paused' : 'running';
     })
   });

// key triggers drums

function playDrums (e){
    const audio = document.querySelector(`audio[data-key=${e.key}]`)
    // used this on first with the matching data-code lijk KeyD.
    // const play = document.querySelector(`[data-code=${e.code}]`)
    // found out that you can use the same data selector again
    const play = document.querySelector(`[data-key=${e.key}]`)
    if(!audio) return;
    audio.currentTime = 0; //rewind to start  
    audio.play();
    play.classList.add('playing')
};

function removeTransition(e){
if(e.propertyName !== 'transform') return //skip this if there is no transform
this.classList.remove('playing')
}


const keys = document.querySelectorAll('.key-code')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))


window.addEventListener('keydown', playDrums )

