//         var modal = document.getElementById("myModal");
// // // Get the button that opens the modal
//         var btn = document.getElementById("myBtn");
           

// // // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];
           
        
// // // When the user clicks on the button, open the modal
//         btn.onclick = function() {
//                 modal.style.display = "block";
//             }
// // // When the user clicks on <span> (x), close the modal
//         span.onclick = function() {
//                 modal.style.display = "none";
//             }
// // // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function(event) {
//             if (event.target == modal) {
//                     modal.style.display = "none";
//             }
//         }   

// // function Getid(btn){
// //     var modal = document.getElementById()
// //     console.log(modal)    
// //     modal.style.display = "block";
    
        
// //     } 
    
// Get the modal
var modal = document.getElementsByClassName('modal');

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

// When the user clicks the button, open the modal 
btn[0].onclick = function() {
    modal[0].style.display = "block";
}
console.log(btn[1])
btn[1].onclick = function() {
    modal[1].style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span[0].onclick = function() {
    modal[0].style.display = "none";
}

span[1].onclick = function() { 
    modal[1].style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal[0]) {
         modal[0].style.display = "none";
     }
    if (event.target == modal[1]) {
         modal[1].style.display = "none";
     }  
}