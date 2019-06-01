var myImages =["https://www.probytes.net/wp-content/uploads/2018/01/3.jpg", 
               "https://www.codingdojo.com/blog/wp-content/uploads/javascript.jpg",
               "http://javascript-html5-tutorial.com/wp-contentgalleryfun-memes/bill-yeah.jpg",
               "http://cdn.funnyisms.com/6dde095d-2cc2-4b4d-bd77-b7f7399c6ad6.jpg",
               "https://pbs.twimg.com/media/DgtXEXHUYAAMaRG.jpg"];


var captionImages =["When 6/12 of your assignments due this week are for PROG109",
                    "The professor when you say Java and not script",
                    "DBA Students be like..",
                    "We're almost there!",
                    "What do you mean I don't get free tacos?! #tmobiletuesday "];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

function autoSlide(){
if (document.getElementById("auto").checked)
 next(); 
}


setInterval(autoSlide,3000); // Next
