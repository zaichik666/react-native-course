

// Add or remove class from an element
document.querySelector('.winning-score').classList.remove;

// Attach or detach an event handler

document.querySelector('.dice').addEventListener('click', function(){
   document.querySelector('.dice').style.borderRadius = "20px";
});
// it worked just with a click. Wheen I tried mouseover on text it didn't work at all

// Create an element

function button() {
   var btn = document.createElement("P");
   btn.innerHTML = "Smol text in te left corner hehe";
   document.body.appendChild(btn);
 }

 button();

 // Detect the dark mode

 const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
console.log(isDarkMode);

// found here: https://timonweb.com/javascript/how-to-detect-dark-mode-with-javascript/



// Scroll to top of the page

function scrollToTop() {
   window.scrollTo({
     top: 0,
     behavior: 'smooth'
 })


}

scrollToTop();


// Replace the broken images with an image telling visitors that they are not found

const images = document.querySelectorAll('img');

// Loop over them
[].forEach.call(images, function(ele) {
    ele.addEventListener('error', function(e) {
        e.target.src = 'https://www.google.com/search?q=sorry+broken+url+image&tbm=isch&ved=2ahUKEwinwaj5wJDrAhWOtqQKHeZeAm8Q2-cCegQIABAA&oq=sorry+broken+url+image&gs_lcp=CgNpbWcQA1D4HljGJGDzJmgAcAB4AIABqAGIAbYCkgEDMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=GSwxX-fQJo7tkgXmvYn4Bg&bih=711&biw=687&rlz=1C5CHFA_enUA827UA827#imgrc=swcFrWQTbSm-kM';
    });
});

// Load CSS dynamically 

const cssFile = document.createElement('link');
cssFile.setAttribute('rel', 'stylesheet');
cssFile.setAttribute('href', 'notion-tasks.css');

document.head.appendChild(cssFile);


// Select the children of an element 

var children = document.body.children;
console.log(children);

// link https://htmldom.dev/select-the-children-of-an-element

