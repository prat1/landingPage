
//declaring global variables
const sections = document.querySelectorAll("section");
let listItem;
let navigationLink;

//helper function to check if the section is in view port or not
// reference: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/#:~:text=If%20an%20element%20is%20in%20the%20viewport%2C%20it's%20position%20from,the%20height%20of%20the%20viewport.


var isVisible = function (elem) {
    var boundry = elem.getBoundingClientRect();
    return (
        boundry.top >= 0 &&
        boundry.left >= 0 &&
        boundry.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        boundry.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

for(section of sections){
  console.log(section);
   listItem = document.createElement('li');
   //navigationLink = document.createElement('a');
   //console.log(navigationLink);
   //getting the text data from sections
   listItem.innerHTML= `<a class="menu__link ${section.id}" href="#${section.id}">${section.dataset.sectionName}</a>`;
   console.log(listItem);
   //giving properties to the anchor tag
   //navigationLink.setAttribute("class","anchorLink");
   //navigationLink.setAttribute("href",`#${section.id}`);
   //navigationLink.href ="index.html#"+`${section.id}`;
   //navigationLink.setAttribute("id",section.id);
   //navigationLink.textContent = section.dataset.sectionName;

   //listItem.appendChild(navigationLink);
   navList.appendChild(listItem);

}

//console.log(navList);
//document.querySelector(`.${section.id}`);




//Adding event listner for the scrolling action, checking if element is in viewport, also adding active class for sections and links.
// reference: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/#:~:text=If%20an%20element%20is%20in%20the%20viewport%2C%20it's%20position%20from,the%20height%20of%20the%20viewport.

document.addEventListener('scroll', function sectionActive(){
for (section of sections){
  const currentNavItem = document.querySelector(`.${section.id}`);
  if(isVisible(section)){
    section.classList.add("activeSection"); //adding active class for section
    currentNavItem.classList.add("activeLink"); // adding active class for link
      console.log(`current active section is ${section.id}`);
  } else{
    section.classList.remove("activeSection");
    currentNavItem.classList.remove("activeLink");
  }
}
});
