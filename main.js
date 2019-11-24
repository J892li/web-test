// TypeWriter function credit to https://www.youtube.com/watch?v=POX3dT-pB4E 

class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;  // load text
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;   // delet text
  }

    
  type() {
    //  the current index of word
    const current = this.wordIndex % this.words.length;
    // print full text
    const fullTxt = this.words[current];

    // if it is deleting index -1
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //  if it is deleting index text +1
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // add txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 2;
    }

    // when the text is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // wait a bit
      typeSpeed = this.wait;
      // then delete the text
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // index jump to next word
      this.wordIndex++;
      // wait a bit
      typeSpeed = 500;
    }
  // timer
    setTimeout(() => this.type(), typeSpeed);
  }
}


document.addEventListener('DOMContentLoaded', init);  //initialization

// load new text typer
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  new TypeWriter(txtElement, words, wait);
}

//credit to https://stackoverflow.com/questions/48673434/accordion-menu-wondering
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i=i+1) {
  accordions[i].onclick = function() {
    this.classList.toggle('is-open');

    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      //if accordion is open, close it
      content.style.maxHeight = null;
    } else {
      // if accordion closed, add a height to open it
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}

// credit to https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function navFunction() {
  var x = document.getElementById("navtop");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

