'use strict';

const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
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
let playing = true;

btnroll.addEventListener('click', function()
{
    if(playing)
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
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
  }
}
});
btnhold.addEventListener('click', function()
{
    if(playing)
    {

    scores[activeplayer] += currentscore;
    document.getElementById('score--' + activeplayer).textContent = scores[activeplayer];
   
    if(scores[activeplayer] >= 100)
    {
        dice.classList.add('hidden');
        playing = false;
      
        document.querySelector('.player--' + activeplayer).classList.add('player--winner');
        document.querySelector('.player--' + activeplayer).classList.remove('player--active');
        dice.classList.add('hidden');
        btnroll.classList.add('hidden');
        btnhold.classList.add('hidden');
    }
    else
    {
        document.getElementById('current--' + activeplayer).textContent = 0;
        currentscore = 0;
        activeplayer = activeplayer === 0 ? 1 : 0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active'); 
    }
}
});

btnnew.addEventListener('click', function()
{
    playing = true;
    scores = [0, 0];
    currentscore = 0;
    activeplayer = 0;
    score0.textContent = 0;
    score1.textContent = 0;
    current0.textContent = 0;
    current1.textContent = 0;
    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    dice.classList.remove('hidden');
    btnroll.classList.remove('hidden');
    btnhold.classList.remove('hidden');
});