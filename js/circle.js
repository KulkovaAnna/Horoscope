let horoscopes = [...document.getElementsByClassName('circular-box')];
function circleIt (items, circleRadius, itemRadius){
    const count = items.length;
    const arc = 2*Math.PI*(1/count);
    for (let i = 0; i < count; i++){
        const angle = (i-3) * arc;
        const x = circleRadius * Math.cos(angle);
        const  y = circleRadius * Math.sin(angle);
        items[i].style.left = 50 - itemRadius*100 + x + '%';
        items[i].style.top  = 50 - itemRadius*100 + y + '%';
    }
}

horoscopes.map(elem => {
    let items = [...elem.getElementsByClassName('circular-box__item')];
    const itemRadius = items[0].offsetWidth/elem.offsetWidth/2;
    const messageBox = document.getElementById("message-box");
    const innerCircleDiameter = elem.offsetWidth;
    messageBox.style.width =  innerCircleDiameter/Math.sqrt(2) + 'px';
    messageBox.style.height = innerCircleDiameter/Math.sqrt(2) + 'px';

    circleIt(items, 40, itemRadius);
    items.forEach(item=>{
        const itemImage = item.querySelector("img");
        item.addEventListener('click', ()=>{
            circleIt(items, 60, itemRadius);
            messageBox.textContent = "Поздравляю, " + itemImage.getAttribute("alt") + ", ты балбес!";
        })
    });
});