function i(){
document.getElementById('a').remove();
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const w = window.innerWidth;
const h = window.innerHeight;

const BG_COLOR = '	#2a2139';
const COLOR_FROM = '#ff2644';
const COLOR_TO = '#ff257e';

let t = 0;

function init(){
    t = 0;
    canvas.width = w;
    canvas.height = h;

    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0,0,w,h);
    ctx.translate(w/2,h/2);
    animate();
}

function getPosition(t, r){
    const x = r * (16 * Math.pow(Math.sin(t), 3));
    const y = r * (-13 * Math.cos(t) + 5 * Math.cos(2 * t) + 2 * Math.cos(3 * t) + Math.cos(4 * t));
    return {x,y};
}

function createG(){
    const g = ctx.createLinearGradient(0, -100, 0, 100);
    g.addColorStop(0, COLOR_FROM);
    g.addColorStop(1, COLOR_TO);
    return g;
}

function animate(){
    if(t < 2 * Math.PI){
        const {x,y} = getPosition(t, 10);
        const g = createG();
        ctx.moveTo(0,0);
        ctx.lineTo(x,y);
        ctx.strokeStyle = g;
        ctx.lineWidth = 5;
        ctx.stroke();

        t += Math.PI / 180;
        window.requestAnimationFrame(animate);

    }
    ctx.font = 'bold 30px Poppins';
    ctx.textAlign = 'center';
    ctx.fillStyle = BG_COLOR;
    let text =  "a + z"
    ctx.fillText(text, 0, 0);
    ctx.fillText('4ever', 0, 30)

}
init();
window.addEventListener('resize', () => {
    init(window.innerWidth, window.innerHeight);
})



}



