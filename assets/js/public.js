// SmartHoney Public/Marketing JavaScript

(function() {
  'use strict';

  // Navbar transparency on scroll
  function initNavbarTransparency() {
    const navbar = document.querySelector('.public-navbar');
    const hero = document.querySelector('.hero-section');
    
    if (navbar && hero) {
      function updateNavbar() {
        const heroBottom = hero.offsetTop + hero.offsetHeight;
        if (window.scrollY > heroBottom - 100) {
          navbar.classList.remove('transparent');
        } else {
          navbar.classList.add('transparent');
        }
      }
      
      updateNavbar();
      window.addEventListener('scroll', updateNavbar);
    }
  }

  // FAQ Accordion
  function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function(question) {
      question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(function(item) {
          item.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
          faqItem.classList.add('active');
        }
      });
    });
  }

  // Smooth scroll for anchor links
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initNavbarTransparency();
    initFAQ();
    initSmoothScroll();
  });

})();

