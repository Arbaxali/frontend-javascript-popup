var modal = document.getElementsByClassName('modal');
// Get the button that opens the modal
var btn= document.getElementsByClassName("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");
 


// for(var i=0; i<btn.length; i++)(function(i){
//     console.log(btn[i])
//     btn[i].onclick = function() {
//         modal[i].style.display = "block";
//     }
//     span[i].onclick = function() {
//         modal[0].style.display = "none";
//     }
      
// })(i);

for (var i = 0; i < span.length; i++) {
    span[i].onclick = function() {
       for (var index in modal) {
         if (typeof modal[index].style !== 'undefined') modal[index].style.display = "none";    
       }
    }
   }

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modal) {
      if (typeof modal[index].style !== 'undefined') modal[index].style.display = "none";    
     }
    }
}   

