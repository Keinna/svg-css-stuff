const svg = document.getElementById('triangles');

svg.onclick = (e) => {
    const colors = [ 'pink', 'orange' , 'red', 'purple', 'blue', 'teal']
    const rando = () => colors[Math.floor (Math.random() * colors.length)];
    document.documentElement.style.cssText = `
    --dark-color: ${rando()};
    --light-color: ${rando()};`
}