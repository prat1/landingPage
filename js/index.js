
//declaring global variables
const sections = document.querySelectorAll("section");
let listItem;
let navigationLink;
console.log(sections);

for(section of sections){
  console.log(section);
   listItem = document.createElement('li');
   navigationLink = document.createElement('a');
   console.log(navigationLink);
   //getting the text data from sections
   listItem.innerHTML= section.dataset.sectionName ;
   console.log(listItem);
   //giving properties to the anchor tag
   navigationLink.setAttribute("class","anchorLink");
   //navigationLink.setAttribute("href",`#${section.id}`);
   navigationLink.href ="index.html#"+`${section.id}`;
   navigationLink.setAttribute("id",section.id);
   navigationLink.textContent = section.dataset.sectionName; 

   listItem.appendChild(navigationLink);
   navList.appendChild(listItem);

}

console.log(navList);


/*
const navbarMenu = document.getElementById("navList");
//sections = document.querySelectorAll("section");
function createNav(){
for (let item of sections){
let section = document.createElement("li");
section.className = "menu__link";
console.log(section.className);
section.dataset.nav = item.id;
console.log(section.dataset.nav);
section.innerText = item.dataset.nav;
console.log(section.innerText)
navbarMenu.appendChild(section);
};};
createNav();
//const navList = document.getElementById('navList');
//console.log(navList);
//Helper function to check if an element is in viewport
//if in viewport returns true
/*function isInViewport(element) {
    const distance = element.getBoundingClientRect();
    return (
        distance.top <= 100 &&
        distance.left >= 0 &&
        distance.bottom >= 90 &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth));
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// build the nav menu
//function buildNavBar () {
  /*  const fragment = document.createDocumentFragment();
    for (const section of sections) {
        let newNavItem = document.createElement('li');
        const id = section.id;
        console.log(id);
        const dataNav = section.dataset.nav;
        comsole.log(dataNav);
        newNavItem.innerHTML = `<a class="menu__link ${id}" href="#${id}">${dataNav}</a>`;
        fragment.appendChild(newNavItem);
    }
    navBar.appendChild(fragment);
}

buildNavBar();*/
