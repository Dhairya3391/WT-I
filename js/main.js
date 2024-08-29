// main.js
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add active class to current nav item
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll('nav ul li a');
  menuItems.forEach(item => {
    if(item.href === currentLocation){
      item.classList.add('active');
    }
  });

  // Simple animation for page elements
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  });

  animateElements.forEach(el => observer.observe(el));

  // Example of dynamic content loading (you can customize this based on your needs)
  const loadMoreBtn = document.getElementById('load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function() {
      // Simulate loading more content
      const content = document.createElement('div');
      content.classList.add('card', 'animate-on-scroll');
      content.textContent = 'New dynamically loaded content';
      document.querySelector('main').appendChild(content);
      observer.observe(content);
    });
  }
});