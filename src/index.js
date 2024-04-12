import { haikuChecker } from './haiku-checker';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

function handleForm() {
  event.preventDefault();
  const poem = document.querySelector("textarea").value;
  const isHaiku = haikuChecker(poem);
  if (isHaiku === true) {
    document.querySelector("p").innerText = 'This poem is a haiku.';
  }
  else {
    document.querySelector("p").innerText = 'This poem is not a haiku.';
  }
  
}

window.addEventListener("load", function() {
  document.querySelector("form").addEventListener("submit", handleForm);
});