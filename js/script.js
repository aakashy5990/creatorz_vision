document.addEventListener('DOMContentLoaded', function() {
    const projCountElement = document.getElementById('projCount');
    const clientCountElement = document.getElementById('clientCount');
    const projLine = document.querySelector('.intro_pro_line');
    const clientLine = document.querySelector('.intro_client_line');
    
    // Set initial values
    let projCount = 0;
    let clientCount = 0;
    
    // Initial increment speed
    let initialIncrementSpeed = 30; // milliseconds (initial faster speed)
    let speedIncreaseRate = 0.6; // Rate to increase speed
    let minIncrementSpeed = 5; // Minimum speed limit
    
    // Function to increment counts and update lines
    function incrementCounts() {
        // Update projCount
        if (projCount < 235) {
            projCount += 1; // Increase by 1 each time
        }
        
        // Update clientCount
        if (clientCount < 112) {
            clientCount += 1; // Increase by 1 each time
        }
        
        // Update projCountElement text
        projCountElement.textContent = projCount;
        
        // Update clientCountElement text
        clientCountElement.textContent = clientCount;
        
        // Update line widths
        updateLineWidth(projLine, projCount, 235);
        updateLineWidth(clientLine, clientCount, 112);
        
        // Check if projCount reaches final value to add plus icon
        if (projCount >= 235) {
            projCountElement.innerHTML = '235 <span class="plus_icon">+</span>';
        }
        
        // Gradually increase speed
        if (initialIncrementSpeed > minIncrementSpeed) {
            initialIncrementSpeed *= speedIncreaseRate;
        }
        
        // Stop incrementing when both counts reach their final values
        if (projCount >= 235 && clientCount >= 112) {
            clearInterval(intervalId);
        }
    }
    
    // Function to update line width based on count
    function updateLineWidth(lineElement, count, maxCount) {
        const maxWidth = 100; // Maximum width for the line (adjusted to 150px)
        const incrementStep = maxWidth / maxCount;
        
        // Calculate the new width
        const newWidth = count * incrementStep;
        
        // Limit width to maxWidth
        const finalWidth = Math.min(newWidth, maxWidth);
        
        // Apply the new width to the line element
        lineElement.style.width = finalWidth + '%';
    }
    
    // Call incrementCounts function initially
    incrementCounts();
    
    // Call incrementCounts function every initialIncrementSpeed milliseconds
    const intervalId = setInterval(incrementCounts, initialIncrementSpeed);
});





// cursor js code 
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    
    cursorOutline.animate({
        left: `${posX}px`,
        top:`${posY}px`
    },{ duration:900, fill:"forwards"});

});

// adding scroll arrow 
const scrollarrow = document.querySelector('.scroll_arrow')

window.addEventListener('scroll', () => {
//   console.log(window.pageYOffset)
  if (window.pageYOffset > 224){
    scrollarrow.style.display = "block";
  }
  else{
    scrollarrow.style.display = "none";
  }
})

scrollarrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})



function thanx() {
    var input_name = document.getElementById("name");
    var input_email = document.getElementById("email");
    // var input_number = document.getElementById("input_number");
    var input_text = document.getElementById("review");
  
  
    var input = document.getElementById("name");
    var input = document.getElementById("email");
    // var input = document.getElementById("input_number");
    var input = document.getElementById("review");
  
    var paragraph = document.getElementById("thanx");
  
    if (input_name.value === "" && input_email.value === "" && input_text.value === "") {
      paragraph.textContent = "Please fill all details.";
      // paragraph.textContent = "Thanks for Contacting us..  ! We Will Contact You Soon...";
  
    }
    else if(input.value === ""){
      paragraph.textContent = "Please fill all details.";
      setTimeout(function() {
        paragraph.textContent = "";
        document.getElementById("thanx").reset();
      }, 3000);
    } 
    else {

      document.getElementById('reviewForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission
        // Use EmailJS to send form data
        // service & temp id 
        emailjs.sendForm('service_0g2lryl', 'template_b7ktukj', this)
            .then(function(response) {
                alert('Review submitted successfully!');
            }, function(error) {
                console.log('FAILED...', error);
                alert('There was an error submitting your review. Please try again.');
            });
      });


      paragraph.textContent = "Thanks for Contacting us..  ! We Will Contact You Soon...";
      // paragraph.textContent = "Please fill all details.";
  
      // Clear the form after submission
      setTimeout(function() {
        paragraph.textContent = "";
        document.getElementById("reviewForm").reset();
      }, 3000);
    }
  }


  