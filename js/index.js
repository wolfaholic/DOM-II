// Unique Event Listener 1 & 2 :  Mouse Enter/Leave Enlarges Selected A Tag and it returns to normal when Mouse Leaves
const navResize = document.querySelectorAll(".nav-link");
navResize.forEach(element => {element.addEventListener('mouseenter', () => {
element.style.transform = "scale(2)";
element.style.transition = "all 0.3s";
})})

navResize.forEach(element => {element.addEventListener('mouseleave', () => {
element.style.transform = "scale(1)"
})})


//Unique Event Listener 3: Changing Image to a new image
const busImage = document.querySelector('.bus-img');
 

busImage.addEventListener('dblclick', () => {
busImage.src = "img/bus.gif";
})

 //Unique Event Listern 4: Click Event, changes background of Footer
const colorChange = document.querySelector("footer");
colorChange.addEventListener('click', () => {
colorChange.style.backgroundColor = "dodgerblue";
})



//Unique Event Listern 5: Mouse Over - 





//Unique Event Listern 6: Mouse out




//Unique Event Listern 7: Key Up




//Unique Event Listern 8: Key Down




//Unique Event Listern 9: Resize




//Unique Event Listern 10: Scroll



