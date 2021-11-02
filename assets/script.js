let yourName = "Ella Gading"
//Code to update name display
document.getElementById('credit').textContent = 'Created by Ella Gading'

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

//Gingerbread table count elements:
let Gingerbread = document.querySelector('#qty-gb');

let minusGb = document.querySelector('#minus-gb');
    console.log(minusGb);
let addGb = document.querySelector('#add-gb');
    console.log(addGb);
let totalCookies = document.querySelector('#qty-total');
    console.log(totalCookies.textContent);

//Gingerbread Event Listener for + and - button
minusGb.addEventListener('click', function (){
    console.log('minusgb was clicked!');
    gb = gb - 1
    Gingerbread.textContent = gb;
    totalCookies.textContent = gb + cc + sugar;
})
addGb.addEventListener('click', function(){
    console.log('addgb was clicked!');
    gb = gb + 1
    Gingerbread.textContent = gb;
    totalCookies.textContent = gb + cc + sugar;
})
//Chocolate Chip table count elements:
let Chocolate = document.querySelector('#qty-cc');

let minusCc = document.querySelector('#minus-cc');
    console.log(minusCc);
let addCc = document.querySelector('#add-cc');
    console.log(addCc);

//Chocolate Chip Event Listener for + and - button:
minusCc.addEventListener('click', function(){
    console.log('minuscc was clicked!');
    cc = cc - 1
    console.log(cc);
    Chocolate.textContent = cc;
    totalCookies.textContent = gb + cc + sugar;
})
addCc.addEventListener('click', function(){
    console.log('addcc was clicked!');
    cc = cc + 1
    console.log(cc);
    Chocolate.textContent = cc;
    totalCookies.textContent = gb + cc + sugar;
})
//Sugar Sprinkle table count elements:
let Sugar = document.querySelector('#qty-sugar');

let minusSugar = document.querySelector('#minus-sugar');
    console.log(minusSugar);
let addSugar = document.querySelector('#add-sugar');
    console.log(addSugar);

//Sugar Sprinkle Event Listener for + and - button:
minusSugar.addEventListener('click', function(){
    console.log('minussugar was clicked!');
    sugar = sugar - 1
    console.log(sugar);
    Sugar.textContent = sugar;
    totalCookies.textContent = gb + cc + sugar;
})
addSugar.addEventListener('click', function(){
    console.log('addsugar was clicked!');
    sugar = sugar + 1
    console.log(sugar);
    Sugar.textContent = sugar;
    totalCookies.textContent = gb + cc + sugar; 
})
