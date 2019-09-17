alert("welcome");


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/firefox2.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}

let thisButton = document.querySelector('button');
let thisHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Enter name here.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      thisHeading.innerHTML = 'Mozilla is so fun, ' + myName;
    }
  }

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    thisHeading.textContent = 'Mozilla is so fun, ' + storedName;
}

thisButton.onclick = function() {
    setUserName()
}