/*
Complete following tasks with DOM Manipulation and Events

- Add or remove class from an element */
  element.classList.add('className')
  element.classList.add('className')

/*
- Attach or detach an event handler */
  element.addEventListener(event, function doSmth() {})
  element.removeEventListener(event, function doSmth() {})

/*
- Create an element */
  let elenemtName = document.createElement('tagName')
  elenemtName.setAttribute('attributeName', 'attributeValue')
  parentElement.appendChild(elementName)

/*
- Detect the dark mode */
  function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  // But it's only for WebKit. Maybe we can use smth like
  document.querySelectorAll('dark-mode')

/*
- Scroll to top of the page */
  window.scrollTo(0, 0)

/*
- Load a css file dynamically*/
  function CSSLoad(file) {
  const link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("type", "text/css");
  link.setAttribute("href", file);
  document.getElementsByTagName("head")[0].appendChild(link);
}

/*
- Replace the broken images with an image telling visitors that they are not found */
  const images = document.querySelectorAll('img');
  images.forEach.call(images, function(element) {
    elenemt.addEventListener('error', function(event) {
        event.target.src = 'path-to-404-image';
    })
  })

/*
- Select the children of an element */
  parentElement.children

/* *************************************************** */
