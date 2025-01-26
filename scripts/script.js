const portfolioItems = document.querySelectorAll(".portfolio-item");
const modals = document.querySelectorAll(".portfolio-modal");
const closeButtons = document.querySelectorAll(".close");
const navbar = document.querySelector(".navbar");

let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");
const totalTestimonials = testimonials.length;

// Toggle Navbar Menu on Mobile
function openSidebar() {
  navbar.classList.add("show");
  console.log(navbar);
}

function closeSidebar() {
  navbar.classList.remove("show");
  console.log(navbar);
}

// Smooth scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Open modal when portfolio item is clicked
portfolioItems.forEach((item) => {
  item.addEventListener("click", () => {
    const modalId = item.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "flex";
  });
});

// Close modal when close button is clicked
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".portfolio-modal").style.display = "none";
  });
});

// Close modal if clicked outside of modal content
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

// Show the active testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove("active");
    if (i === index) {
      testimonial.classList.add("active");
    }
  });
}

// Show the next testimonial
function nextTestimonial() {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  showTestimonial(currentIndex);
}

// Show the previous testimonial
function prevTestimonial() {
  currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
  showTestimonial(currentIndex);
}

// Add event listeners for the next and previous buttons
document.getElementById("next").addEventListener("click", nextTestimonial);
document.getElementById("prev").addEventListener("click", prevTestimonial);

// Automatically switch testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Initial display
showTestimonial(currentIndex);

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      event.preventDefault(); // Prevent form submission
    }
  });

// document
//   .getElementById("newsletter-form")
//   .addEventListener("submit", function (event) {
//     const newsletterEmail = document.getElementById("newsletter-email").value;

//     if (!newsletterEmail) {
//       alert("Please enter your email to subscribe.");
//       event.preventDefault(); // Prevent form submission
//     }
//   });

// Animate blog posts on scroll into view
// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("animate");
//         observer.unobserve(entry.target);
//       }
//     });
//   },
//   { threshold: 0.5 }
// );

// blogPosts.forEach((post) => {
//   observer.observe(post);
// });
