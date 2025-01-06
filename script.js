'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');


const dice = document.querySelector('.dice');
const btnnew = document.querySelector('.btn--new');
const btnroll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');



 score0.textContent = 0;
 score1.textContent = 0;
 dice.classList.add('hidden');

let currentscore =0;
let scores = [0, 0];
let activeplayer = 0;


btnroll.addEventListener('click', function()
{
const dicenum = Math.trunc(Math.random() * 6) + 1;
 dice.classList.remove('hidden');
 dice.src = `dice-${dicenum}.png`;

 if (dicenum !== 1)
     {
    currentscore += dicenum;
    document.getElementById('current--' + activeplayer).textContent = currentscore;
  } 
  else
   {
    document.getElementById('current--' + activeplayer).textContent = 0;
    currentscore = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
  }
});
