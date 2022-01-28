

// key triggers
// 

window.addEventListener('keydown', (e) =>{
    const audio = document.querySelector(`audio[data-key=${e.key}]`)
    if(!audio) return;
    audio.currentTime = 0; //rewind to start
    
    audio.play();
})

// audio[data-key='${e.key}' | code='${e.code}"]`