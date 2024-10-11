// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("contain").style.top = "0";
  } else {
    document.getElementById("contain").style.top = "-100px";
  }
  document.getElementById('myForm').reset();
}
  
  
 


// document.getElementById('myForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 
    
//     const formData = new FormData(this);  
    

//     const name = formData.get('name');
//     const email = formData.get('email');
//     const subject = formData.get('subject');
//     const message = formData.get('message');
    
//     console.log('Your Name:', name);
//     console.log('Your Email:', email);
//     console.log('Your Subject:', subject);
//     console.log('Your Message:', message);
// });