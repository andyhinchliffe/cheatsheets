document.addEventListener('DOMContentLoaded', function () {
    // Select the mobile menu button and the mobile menu
    const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Add a click event listener to the mobile menu button
    mobileMenuButton.addEventListener('click', function () {
      // Toggle the 'hidden' class on the mobile menu
      mobileMenu.classList.toggle('hidden');
  
      // Toggle the 'block' and 'hidden' classes on the mobile menu button icons
      const closedIcon = mobileMenuButton.querySelector('.block');
      const openIcon = mobileMenuButton.querySelector('.hidden');
      closedIcon.classList.toggle('hidden');
      openIcon.classList.toggle('block');
    });
  });
  