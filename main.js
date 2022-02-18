// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heartButton = document.querySelectorAll('.like-glyph') //pulls all hearts by class
for (i = 0; i < heartButton.length; i++) { //loops over each heart
  heartButton[i].addEventListener('click', (e) => {  //add listener for click event
    mimicServerCall()
      .then(resp => {
        if (resp === "Pretend remote server notified of action!") {
          if (e.target.textContent === EMPTY_HEART) { //match current status of heart
            e.target.textContent = FULL_HEART; //change heart status
            e.target.classList.add('activated-heart') //add class to heart for styling
          } else if (e.target.textContent === FULL_HEART) {
            e.target.textContent = EMPTY_HEART;
            e.target.classList.remove('activated-heart') //remove class for styling
          }
        }
      })
      .catch(err => {
        const hiddenClass = document.querySelector('.hidden')
        hiddenClass.classList.remove('hidden');
        setTimeout(() => hiddenClass.classList.add('hidden'), 3000)
      })
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
