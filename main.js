
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
    // used this on first with the matching data-code like KeyD.
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



// const snare = document.querySelector('#snare')
snare.addEventListener('click', (e) =>{
  snareSound.currentTime = 0;
  snareSound.play()
  snare.classList.add('playing')
  console.log(e)
})
floor.addEventListener('click', (e) =>{
  floorSound.currentTime = 0;
  floorSound.play()
  floor.classList.add('playing')
  console.log(e)
})
hihat.addEventListener('click', (e) =>{
  hihatSound.currentTime = 0;
  hihatSound.play()
  hihat.classList.add('playing')
  console.log(e)
})
bass.addEventListener('click', (e) =>{
  bassSound.currentTime = 0;
  bassSound.play()
  bass.classList.add('playing')
  console.log(e)
})
hihatOpen.addEventListener('click', (e) =>{
  hihatOpenSound.currentTime = 0;
  hihatOpenSound.play()
  hihatOpen.classList.add('playing')
  console.log(e)
})
tom.addEventListener('click', (e) =>{
  tomSound.currentTime = 0;
  tomSound.play()
  tom.classList.add('playing')
  console.log(e)
})
tomRight.addEventListener('click', (e) =>{
  tomRightSound.currentTime = 0;
  tomRightSound.play()
  tomRight.classList.add('playing')
  console.log(e)
})

//anime
var btn = document.getElementById("morph")
var btnback = document.getElementById("morphback")

btn.addEventListener("click", function(){
  anime({
    targets: '.polymorph',
    points: [
      { value: [
        '215,110 0,110 0,0 47.7,0 67,76']
      },
      { value: [
        '215,110 0,110 0,0 0,0 67,76']
      },
    ],
    easing: 'easeOutQuad',
    duration: 1200,
    loop: false
  });
  anime({
    targets: '#blip',
    opacity: 1,
    duration: 500,

  })

})
  



  // btnback.onclick = function(){
  //   anime({
  //     targets: '.polymorph',
  //       points: [
  //         { value: [
  //           '215,110 0,110 0,0 47.7,0 67,76,0']
  //         },
  //         { value: [
  //           '215,110 0,110 0,0 47.7,0 215,0']
  //         },
  //       ],
  //       easing:'easeOutQUad',
  //       duration:1200,
  //       loop: false
  //   });
  //   anime({
  //     targets: '#blip',
  //     opacity: 0,
  //     duration: 500,
  
  //   })
  // }