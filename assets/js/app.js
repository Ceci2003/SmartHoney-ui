// SmartHoney App JavaScript

(function() {
  'use strict';

  // Sidebar Toggle
  function initSidebarToggle() {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.app-sidebar');
    
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('show');
      });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        if (sidebar && sidebar.classList.contains('show')) {
          if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('show');
          }
        }
      }
    });
  }

  // Active Nav Highlighting
  function initActiveNav() {
    const currentPage = document.body.getAttribute('data-page');
    if (currentPage) {
      const navLinks = document.querySelectorAll('.app-sidebar .nav-link');
      navLinks.forEach(function(link) {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === currentPage) {
          link.classList.add('active');
        }
      });
    }
  }

  // Toast Demo Triggers (for components page)
  function initToastDemos() {
    const toastTriggers = document.querySelectorAll('[data-toast-trigger]');
    toastTriggers.forEach(function(trigger) {
      trigger.addEventListener('click', function() {
        const toastId = this.getAttribute('data-toast-trigger');
        const toastElement = document.getElementById(toastId);
        if (toastElement) {
          const toast = new bootstrap.Toast(toastElement);
          toast.show();
        }
      });
    });
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    initSidebarToggle();
    initActiveNav();
    initToastDemos();
  });

})();

