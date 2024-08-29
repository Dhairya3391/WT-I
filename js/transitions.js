// Immediately-invoked function expression to avoid polluting global scope
(function() {
  // Create and append overlay element
  const overlay = document.createElement('div');
  overlay.classList.add('page-transition-overlay');
  document.body.appendChild(overlay);

  // Add transition class to body
  document.body.classList.add('page-transition');

  // Function to handle page transitions
  function pageTransition(event) {
    const targetUrl = event.currentTarget.href;
    
    // Check if it's an internal link
    if (targetUrl.includes(window.location.origin) || targetUrl.startsWith('/') || targetUrl.startsWith('./') || targetUrl.startsWith('../')) {
      event.preventDefault();
      
      // Determine transition effect
      const transitionEffect = event.currentTarget.dataset.transition || 'fade';

      // Activate overlay
      overlay.classList.add('active');

      // Apply transition effect to current page content
      document.body.classList.add(`${transitionEffect}-out`);

      // After transition, load new page
      setTimeout(() => {
        window.location.href = targetUrl;
      }, 500); // Match this with your transition duration
    }
  }

  // Add click event listeners to all links
  document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.getElementsByTagName('a');
    Array.from(allLinks).forEach(link => {
      link.addEventListener('click', pageTransition);
    });
  });

  // Handle browser back/forward buttons
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      // Remove transition classes
      overlay.classList.remove('active');
      document.body.classList.remove('fade-out', 'slide-out', 'scale-out');
    }
  });
})();