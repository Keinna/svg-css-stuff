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