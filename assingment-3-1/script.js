
//generating random colors in Hexa-Decimal form(e.g. #000000).

let hex='#';
let vals='0123456789ABCDEF'
let hexVals=vals.split('');
let colorNums=[];
let color;

function getRandomColor(){
    for(let i=0;i<=5;i++){
        let random=hexVals[Math.floor(Math.random(hexVals)*(vals.length))];
        colorNums.push(random);
    }
    color=hex + colorNums.join('');
    return color;
}

let bgbody=document.querySelector('body');
let random_colour=getRandomColor();
function changeBackgroundColour(){
    return bgbody.style.backgroundColor=random_colour;

}
