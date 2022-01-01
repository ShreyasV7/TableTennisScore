const p1 = document.querySelector('#p1Button');
const p2 = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const resetButton = document.querySelector('#reset');
const p2Display = document.querySelector('#p2Display');
const winningTotalSelect = document.querySelector('#playto');



let p2Score = 0;
let p1Score = 0;
let winningScore = 3;
let isGameOver = false;

p1Button.addEventListener('click', function () {
       if (!isGameOver) {

              p1Score++;

              if (p1Score === winningScore) {
                     isGameOver = true;
                     p1Display.classList.add('winner');
                     p2Display.classList.add('looser');
              }
              p1Display.textContent = p1Score;
       }
})

p2Button.addEventListener('click', function () {
       if (!isGameOver) {

              p2Score++;
              if (p2Score === winningScore) {
                     isGameOver = true;
                     p2Display.classList.add('winner');
                     p1Display.classList.add('looser');
              }
              p2Display.textContent = p2Score;
       }

})

winningTotalSelect.addEventListener('change', function () {
       winningScore = parseInt(this.value);
       isGameOver = false;
       p1Score = 0;
       p2Score = 0;
       p1Display.textContent = 0;
       p2Display.textContent = 0;

})

resetButton.addEventListener('click', function () {

       isGameOver = false;
       p1Score = 0;
       p2Score = 0;
       p1Display.textContent = 0;
       p2Display.textContent = 0;

       p1Display.classList.remove('winner');
       p1Display.classList.remove('looser');
       p2Display.classList.remove('winner');
       p2Display.classList.remove('looser');

})