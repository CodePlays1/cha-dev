//Header fixed

window.onscroll = function () {
  const docScrollTop = document.documentElement.scrollTop;

  if (window.innerWidth > 991) {
    if (docScrollTop > 100) {
      document.querySelector("header").classList.add("fixed");
    } else {
      document.querySelector("header").classList.remove("fixed");
    }
  }
}

//navbar links

const navbar = document.querySelector(".navbar");
a = navbar.querySelectorAll("a")

a.forEach(function (element) {
  element.addEventListener("click", function () {
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active")
    }
    this.classList.add("active");
    document.querySelector(".navbar").classList.toggle("show");
  })
})


//Portfolio Gallery

const filterBtn = document.querySelector("#filterBtn").children;
const item = document.querySelector(".gallery").children;

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    for (let j = 0; j < filterBtn.length; j++) {
      filterBtn[j].classList.remove("active");
    }
    this.classList.add("active");
    const target = this.getAttribute("data-target");
    for (let k = 0; k < item.length; k++) {
      item[k].style.display = "none";
      if (target == item[k].getAttribute("data-id")) {
        item[k].style.display = "block";
      }
      if (target == "all") {
        item[k].style.display = "block";
      }
    }
  });
}

const closeLightbox = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = lightbox.querySelector("img");

lightbox.addEventListener("click", function (event) {
  if (event.target != lightboxImg) {
    lightbox.classList.remove("show");
    lightbox.classList.add("hide");
  }
});

closeLightbox.addEventListener("click", function () {
  lightbox.classList.remove("show");
  lightbox.classList.add("hide");
});

const gallery = document.querySelector(".gallery");

const galleryItem = document.querySelectorAll(".item");

galleryItem.forEach(function (element) {
  element.querySelector(".fa-plus").addEventListener("click", function () {
    lightbox.classList.remove("hide");
    lightbox.classList.add("show");
    lightboxImg.src = element.querySelector("img").getAttribute("src");
  });
});



//Footer Year 
var year = document.getElementById("year");
year.textContent = new Date().getFullYear();

// DOM Elements
const sendButton = document.getElementById("send");
const popup = document.getElementById('popup');
const popupMessage = document.querySelector(".popup-content p");


// Function to send email using EmailJS
function SendMail() {
  // Get form values
  const params = {
      from_name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      message: document.getElementById("text").value.trim(),
  };

  // Validate form fields
  if (!params.from_name || !params.email || !params.message) {
      alert("Please fill out all fields before sending.");
      return; // Stop execution if validation fails
  }

  console.log("Sending email with params:", params);

  // Send email using EmailJS
  emailjs.send("service_jhtml96", "template_3vo0dza", params)
      .then(function (res) {
          // On success
          popup.style.display = 'flex';
          popupMessage.textContent = "Your email has been received. Thank you!";
          setInterval(() => {
            window.location.reload(true);
        }, 3000); // Refreshes the page every 5 seconds (5000ms)
        

      })
      .catch(function (error) {
          // On error
          popup.style.display = 'flex';
        popupMessage.textContent = "Something went wrong. Please try later.";
        setInterval(() => {
          window.location.reload(true);
      }, 3000); // Refreshes the page every 5 seconds (5000ms)
      


      });
}

// Event listener for the send button
sendButton.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent form submission
  SendMail(); // Call the SendMail function
});

// Close the popup when the close button is clicked
document.querySelector(".close").addEventListener("click", function () {
  popup.style.display = 'none';
});

// Close the popup if clicked outside
window.addEventListener("click", function (event) {
  if (event.target === popup) {
      popup.style.display = 'none';
  }
});