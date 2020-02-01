const firstChapter = ["Пыль наконец поуляжется - в прямом или в переносном смысле. ",
   "Если в последнее время в отношениях с друзьями или родными царил хаос, то теперь ситуация станет более управляемой. ",
"Сегодня Вы узнаете нечто важное и необычное из неожиданного источника. ",
"Вам полезно будет немного сбавить обороты в ожидании заслуженного признания и награды. ",
" Некоторые люди могут принять Вашу доброту за наивность и попытаться воспользоваться ею. ",
"\"Копеечка к копеечке\" - сегодня эта фраза будет звучать для Вас в том смысле, что нечто поступает в Вашу жизнь стабильно, медленно и… скучно. ",
"Обычно интуиция дает Вам отличные подсказки - и сегодня Вам стоит прислушаться к ее совету позволить всему случиться в свой срок и своим чередом. ",
"Стоит принять, что другой человек не сомневается в Вас и верит в Ваши способности больше, чем Вы думаете. ",
"Ваша готовность протянуть оливковую ветвь мира запустит долгожданные перемены к лучшему. ",
"Готовность прислушаться к тому, что кто-то хочет или должен сказать Вам, поможет наладить взаимопонимание и принесет результат. "];

const secondChapter = ["Поэтому выделите время на то, чтобы навести в своей жизни порядок и исполнить свои сокровенные желания. ",
"Это даст Вам ощущение контроля, стабильности и уверенности в завтрашнем дне. ",
"Также может быть, что с кем-то из близких станет проще находить общий язык. ",
"Решения, которые Вы будете принимать, окажутся на редкость позитивными и помогут преуспеть в проектах, которые дороги Вам. ",
"Это значит, что Вы будете полны сил и энергии и станете активно проявлять инициативу в самых различных вопросах. ",
"Вы сможете переделать множество дел, причем никакая препона не сможет встать на Вашем пути. ",
"Пользуйтесь моментом, чтобы решить те проблемы, за которые никак не удавалось взяться. ",
"Вы будете точно знать, чего хотите и как этого добиться. Не переживайте, если дело идет не так быстро, как хотелось бы. ",
];

const thirdChapter = [" Скоро Вы увидите значительные подвижки там, где привыкли видеть застой.",
"Прислушайтесь к своему организму, если он просит об отдыхе - отдыхайте!",
"Принимайте витамины, как следует высыпайтесь.",
"Двигаясь в ногу со временем - а лучше опережая его, - Вы преуспеете.",
"В общем и целом лучше занять оборонительную позицию и беречь то, что Вы уже имеете.",
" Если у Вас есть хорошая идея, самое время реализовать ее."];



const horoscopes = [...document.getElementsByClassName('circular-box')];
const messageBox = document.getElementById("message-box");
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
function getRandomElement (array){
    const rand = Math.floor(Math.random()*array.length);
    return array[rand];
}
horoscopes.map(elem => {
    let items = [...elem.getElementsByClassName('circular-box__item')];
    const itemRadius = items[0].offsetWidth/elem.offsetWidth/2;
    const innerCircleDiameter = elem.offsetWidth;
    messageBox.style.width =  innerCircleDiameter/Math.sqrt(2) + 'px';
    messageBox.style.height = innerCircleDiameter/Math.sqrt(2) + 'px';
    circleIt(items, 40, itemRadius);
    items.forEach(item=>{
        item.addEventListener('click', ()=>{
            circleIt(items, 60, itemRadius);
            messageBox.style.display = "flex";
            messageBox.querySelector('h1').textContent = item.querySelector('img').getAttribute('alt');
            messageBox.querySelector('p').textContent = getRandomElement(firstChapter) + getRandomElement(secondChapter) + getRandomElement(thirdChapter);
        })
    });

});