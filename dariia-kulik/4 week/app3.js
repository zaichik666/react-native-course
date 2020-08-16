
/* Add or remove class from an element */
function myFunction() {
  let element = document.getElementById("current-0")
  element.classList.remove('player-current-score')
}
myFunction()

/* Attach or detach an event handler */
document.getElementById("current-1").addEventListener('click', Function1)
document.getElementById("current-1").removeEventListener('click', Function1)

/*Create an element */
let elenemt = document.createElement('tagName')
elenemt.setAttribute('attributeName', 'attributeValue')
parentElement.appendChild(element)

/*Detect the dark mode 
function DarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}*/

function myFunctionD() {
  let element = document.body
  element.classList.toggle("dark-mode")
}

/*Scroll to top of the page */
function scrollToTop() {
  window.scrollTo(0, 0)
}
scrollToTop()



/*Load a css file dynamically*/
function myFunctionC() {
  document.getElementsByTagName("player-name")[0].setAttribute("style1.css", "democlass")
}
// 2 
const cssdyn = document.createElement("link")
cssdyn.setAttribute("rel", "stylesheet")
cssdyn.setAttribute("href", "style1.css")
document.getElementsByTagName("head")[0].appendChild(сssdyn)

/*Select the children of an element */
let child = document.body.children


// Replace the broken images with an image telling visitors that they are not found

const images = document.querySelectorAll('img')
images.forEach.call(images, function (ele) {
  ele.addEventListener('error', function (eve) {
    eve.target.src = 'https://images.app.goo.gl/ConNPad7R48vLaPo8'
  })
})







