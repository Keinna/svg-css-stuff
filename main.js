function changeColor() {
    const colors = [ 'pink', 'orange' , 'red', 'purple', 'blue', 'teal']
    const rando = () => colors[Math.floor (Math.random() * colors.length)];
    document.getElementById("changeColor").style.cssText = `
    --dark-color: ${rando()};
    --light-color: ${rando()};`
  }