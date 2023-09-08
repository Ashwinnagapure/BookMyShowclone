

// Function to toggle the side menu
function toggleSideMenu() {
    const sideMenu = document.querySelector('.sidemenu');
    sideMenu.classList.toggle('smenu');
  }
  
  // Function to close the side menu
  function closeSideMenu() {
    const sideMenu = document.querySelector('.sidemenu');
    sideMenu.classList.remove('smenu');
  }
  
  // Function to handle clicks anywhere on the document
  function handleClickOutsideMenu(event) {
    const sideMenu = document.querySelector('.sidemenu');
    const selectButton = document.querySelector('.select');
  
    if (!sideMenu.contains(event.target) && !selectButton.contains(event.target)) {
      closeSideMenu();
    }
  }


  
  // Event listener for the select button to toggle the side menu
  document.querySelector('.select').addEventListener('click', toggleSideMenu);
  
  // Event listener for clicks anywhere on the document
  document.addEventListener('click', handleClickOutsideMenu);
  
  const scrollContainer = (scrollAmount) => {
    const container = document.querySelector('#scrollContainer');
    const distanceToScroll = 222 * 5 + 20 * 4 + 50; // 5 images width + 4 margin-right + extra padding
    const scrollLeft = container.scrollLeft + scrollAmount;
    
    // Use CSS animation for smooth scrolling
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = scrollAmount > 0 ? scrollLeft : Math.max(scrollLeft, 0);
    
    // Reset scroll behavior after the animation is done
    setTimeout(() => {
      container.style.scrollBehavior = 'auto';
    }, 2000); // Adjust the duration as needed for slower scroll
  };



  const scrollContainer2 = (scrollAmount) => {
    const container = document.querySelector('#scrollContainer2');
    const distanceToScroll = 222 * 5 + 20 * 4 + 50; // 5 images width + 4 margin-right + extra padding
    const scrollLeft = container.scrollLeft + scrollAmount;
    
    // Use CSS animation for smooth scrolling
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = scrollAmount > 0 ? scrollLeft : Math.max(scrollLeft, 0);
    
    // Reset scroll behavior after the animation is done
    setTimeout(() => {
      container.style.scrollBehavior = 'auto';
    }, 2000); // Adjust the duration as needed for slower scroll
  };


  const scrollContainer3 = (scrollAmount) => {
    const container = document.querySelector('#scrollContainer3');
    const distanceToScroll = 222 * 5 + 20 * 4 + 50; // 5 images width + 4 margin-right + extra padding
    const scrollLeft = container.scrollLeft + scrollAmount;
    
    // Use CSS animation for smooth scrolling
    container.style.scrollBehavior = 'smooth';
    container.scrollLeft = scrollAmount > 0 ? scrollLeft : Math.max(scrollLeft, 0);
    
    // Reset scroll behavior after the animation is done
    setTimeout(() => {
      container.style.scrollBehavior = 'auto';
    }, 2000); // Adjust the duration as needed for slower scroll
  };



  
  const signInButton = document.getElementById('signInButton');

  // Add a click event listener to the button
  signInButton.addEventListener('click', function() {
    // Redirect the user to the login page
    window.location.href = 'login.htm';
  });

  $(document).ready(function() {
    // Add a click event listener to the "Sign In" button
    $("#signInButton").click(function() {
      // Load the content of login.htm into the loginmain div
      $("#loginmain").load("login.htm #loginmain");
    });
  });