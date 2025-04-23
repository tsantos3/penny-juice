// Mobile menu toggle
document.getElementById('hamburger-menu').addEventListener('click', function() {
  const nav = document.querySelector('nav ul');
  
  if (nav.style.display === 'flex') {
      nav.style.display = 'none';
  } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.top = '100%';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.backgroundColor = 'var(--off-white)';
      nav.style.padding = '16px';
      nav.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
  }
  
  // Toggle hamburger icon animation
  const spans = this.querySelectorAll('span');
  spans.forEach(span => {
      span.classList.toggle('active');
  });
});

// Close mobile menu when window resizes
window.addEventListener('resize', function() {
  if (window.innerWidth >= 768) {
      const nav = document.querySelector('nav ul');
      nav.style.display = 'flex';
      nav.style.position = 'static';
      nav.style.flexDirection = 'row';
      nav.style.padding = '0';
      nav.style.boxShadow = 'none';
  }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add active class to current page in navigation
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(item => {
  if (item.href === currentLocation) {
      item.classList.add('active');
  }
});