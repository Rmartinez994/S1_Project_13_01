"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Rafael Martinez 
   Date:   
   
   Filename: bw_review.js

*/
// Functions List:
window.onload = init();

// init()
// Initializes the contents of the web page and sets up the
// event handlers.
function init() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }
      document.getElementById("comment").addEventListener("keyup", updateCount);
}


// lightStars(e)
// Function that colors the stars representing the user rating
// for the book.
function lightStars() {
      var starNumber = event.target.alt;
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      };
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      };
      document.getElementById("rating").value = starNumber + " stars";
      event.target.addEventListener("mouseleave", turnOffStars);
      event.target.addEventListener("click", function () {
            event.target.removeEventListener("mouseleave", turnOffStars);
      })
}

// turnOffStars(e)
//       Function that restores the stars to empty colors, removing
//       the user rating for the book.
function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}


// updateCount()
//       Updates the count of characters in the wordCountBox
//       element.
function updateCount() {
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";
      }
}

/*=================================================================*/

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}