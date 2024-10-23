const track = document.querySelector('.carousel-track');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

let position = 0; //To keep track of the current slide (0 or 1)
const moveAmount = track.offsetWidth; //The amount to move the track

rightButton.addEventListener('click', () => {
  position = Math.max(position - 1, -1); 
  track.style.transform = `translateX(${position * 100}%)`;
  checkButtons();
});

leftButton.addEventListener('click', () => {
  position = Math.min(position + 1, 0);
  track.style.transform = `translateX(${position * 100}%)`;
  checkButtons();
});

function checkButtons() {
  if (position === -1) {
    rightButton.style.display = 'none';
    leftButton.style.display = 'block';
  } else if (position === 0) {
    leftButton.style.display = 'none';
    rightButton.style.display = 'block';
  } else {
    leftButton.style.display = 'block';
    rightButton.style.display = 'block';
  }
}



//SEARCH BAR FUNCTION

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-bar');
  const searchResults = document.getElementById('search-results');
  const sections = document.querySelectorAll('.content-section');
  
  const originalContent = searchResults.innerHTML;
  
  searchResults.style.display = 'none';
  
  function searchSite() {
      const query = searchInput.value.toLowerCase().trim();
      
      if (!query) {
          searchResults.style.display = 'none';
          searchResults.innerHTML = originalContent;
          return;
      }
      
      let hasMatch = false;
      
      // Reset to original content before searching
      searchResults.innerHTML = originalContent;
      
      const currentSections = searchResults.querySelectorAll('.content-section');
      
      currentSections.forEach(section => {
          const title = section.getAttribute('data-title').toLowerCase();
          const content = section.getAttribute('data-content').toLowerCase();
          
          if (title.includes(query) || content.includes(query)) {
              section.style.display = 'block';
              hasMatch = true;
          } else {
              section.style.display = 'none';
          }
      });
      
      //Show results container
      searchResults.style.display = 'block';
      
      //If no matches found, show "No results" message
      if (!hasMatch) {
          searchResults.innerHTML = '<p class="no-results">No results found.</p>';
      }
  }
  
  if (searchInput) {
      searchInput.addEventListener('input', searchSite);
      
      //Close search results when clicking outside
      document.addEventListener('click', function(event) {
          if (!searchResults.contains(event.target) && event.target !== searchInput) {
              searchResults.style.display = 'none';
              searchResults.innerHTML = originalContent;
          }
      });
      
      //Show results when clicking on search input
      searchInput.addEventListener('click', function(event) {
          if (this.value.trim()) {
              searchResults.style.display = 'block';
              searchSite(); //Re-run search to show current results
          }
      });
      
      //Reset search results when clearing input
      searchInput.addEventListener('search', function() {
          if (!this.value) {
              searchResults.style.display = 'none';
              searchResults.innerHTML = originalContent;
          }
      });
  }
});
  

  
// Toggle the mobile navigation when the hamburger menu is clicked
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburgerMenu && mobileNav) {
      hamburgerMenu.addEventListener('click', function() {
          mobileNav.classList.toggle('show');
      });
  } else {
      console.error('Hamburger menu or mobile navigation not found');
  }
});


