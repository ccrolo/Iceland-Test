
//Check if it is the landing page

const DOMlocation = window.location;
const landingDOM = DOMlocation.pathname.includes('index');

//Media Queries match

const mediaqueryList = window.matchMedia("(min-width: 768px)");

//BACKGROUND VIDEO

const videoBackground = document.querySelector("#video-background");
landingDOM && mediaqueryList.matches === false && videoBackground.setAttribute("hidden", true);

// MAGNETIC ANIMATION

//DOM elements

const title = document.querySelector(".title-container");
const logo = document.querySelector(".logo-container--landing");
const menu = document.querySelector(".header__menu");

const elementsDOM = [title, logo, menu];

//Animation function

const magneticMovement = (domElement) => {
  document.addEventListener('mousemove', (e) => {
    const x = e.clientX  
    const y = e.clientY  

    const position = domElement.getBoundingClientRect();

    const cx = position.left + position.width / 2;
    const cy = position.top + position.height / 2;

    const dx = cx - x;
    const dy = cy - y;

    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 200;

    if (dist < maxDist) {
      const tx = dx / maxDist;
      const ty = dy / maxDist;
      const tz = 1 - dist / maxDist;
      const transform = `translate3d(${-tx * 50}px, ${-ty * 50}px, ${tz * 50}px)`;
      
      domElement.style.transform = transform;
    } else {
      domElement.style.transform = "";
    };   
  });
};

// This animation will only be activated from the tablets breackpoint onwards

const activateAnimation = () => {
  elementsDOM.forEach(element => mediaqueryList.matches === true && magneticMovement(element))
};

landingDOM && activateAnimation();

//MENU

const navigation = document.querySelector('.navigation');

const menuItems = ["Inicio", "Reservas", "Tours", "Nosotros", "Contacto"]
const item = ""
const itemsArray = []
!landingDOM && menuItems.forEach(
  element => {
    const item  = document.createElement('a');
    item.textContent = element;
    item.classList.add('navigation__item');
    navigation.appendChild(item);
    itemsArray.push(item)
  }
)

// Shoy delayed items

const showDelay = 150
const itemsSorting = [3, 0, 2, 1, 4]

!landingDOM && itemsSorting.forEach((position, i) => {
  setTimeout(() => itemsArray[position].classList.add('show'), showDelay * i);
})


//Social Media Logos

const socialMedia = document.querySelector('.social-media');

const createLogo = (type) => {
  const instagramLogo = document.createElement('img');
  instagramLogo.src = `./resources/videos/instagram${type}.gif`;
  instagramLogo.classList.add('social-media__logo');
  !landingDOM && socialMedia.appendChild(instagramLogo);

  const facebookLogo = document.createElement('img');
  facebookLogo.src = `./resources/videos/facebook${type}.gif`;
  facebookLogo.classList.add('social-media__logo');
  !landingDOM && socialMedia.appendChild(facebookLogo);

}

mediaqueryList.matches === true ? createLogo("-y") : createLogo("-b");


//Quote

const menuSocialMedia = document.querySelector('.menu__social-media');

const quoteDiv = document.createElement('div');
quoteDiv.classList.add('menu__quote')

const quoteText = document.createElement('p');
quoteText.classList.add('menu__quote-text')
quoteText.textContent ="“Excellent service - emailed instructions, no hassle, car was ready as soon as we arrived.”"
quoteDiv.appendChild(quoteText)
!landingDOM && mediaqueryList.matches === true && menuSocialMedia.appendChild(quoteDiv)


//Enter Transition menu 

const socialMediaTransition = document.querySelector('.social-media');
const menuRightTransition = document.querySelector('.menu__right-column');
const quoteTransition = document.querySelector('.menu__quote');

const transitionMenuElements = [socialMediaTransition, menuRightTransition, quoteTransition]

const transitionMenu = (element) => {
  document.addEventListener('DOMContentLoaded', () => {
    !landingDOM &&  element.classList.add('show');
  });
}

transitionMenuElements.forEach( element => transitionMenu(element))


 
