
//declaring global variables
const sections = document.querySelectorAll("section");
let listItem;
let navigationLink;

//helper function to check if the section is in view port or not
// reference: https://gomakethings.com/how-to-test-if-an-element-is-in-the-viewport-with-vanilla-javascript/#:~:text=If%20an%20element%20is%20in%20the%20viewport%2C%20it's%20position%20from,the%20height%20of%20the%20viewport.
var isVisible = function (elem) {
  var boundry = elem.getBoundingClientRect();
    console.log(boundry);
    return (
        boundry.top >= 0 &&
        boundry.left >= 0 &&
        boundry.bottom* 0.60<= (window.innerHeight || document.documentElement.clientHeight) &&
        boundry.right * 0.60 <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//building a nav bar
for(section of sections){
  console.log(section);
   listItem = document.createElement('li');
   //navigationLink = document.createElement('a');
   //console.log(navigationLink);
   //getting the text data from sections
   listItem.innerHTML= `<a class="menu_link ${section.id}" href="#${section.id}">${section.dataset.sectionName}</a>`;
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
 function sectionActive(){
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
}
document.addEventListener('scroll', sectionActive);

// adding eventlisterner for click function
// Scroll to section on link click
const clickLink = document.querySelectorAll(".menu_link");
console.log(clickLink);
for (const links of clickLink) {
    links.addEventListener("click", function clickHandler(a){
        a.preventDefault();
        const hrefs = document.querySelector(links.getAttribute("href"));
        console.log(hrefs);
        hrefs.scrollIntoView({ behavior: "smooth" });
    });
}

//to go to top button implementation
let mybutton = document.getElementById("topButton");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { topScroll()};
function topScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
