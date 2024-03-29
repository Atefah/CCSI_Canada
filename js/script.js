  // Get references to all the "Read More" links and associated additional content paragraphs
  const readMoreLinks = document.querySelectorAll('.read-more-link');
  const additionalContents = document.querySelectorAll('.additional-content');
  
  // Add a click event listener to each "Read More" link
  readMoreLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the link from navigating to a new page
  
        // Toggle the visibility of the corresponding additional content
        if (additionalContents[index].style.display === 'none' || additionalContents[index].style.display === '') {
            additionalContents[index].style.display = 'block';
            link.textContent = 'Read Less';
        } else {
            additionalContents[index].style.display = 'none';
            link.textContent = 'Read More';
        }
    });
  });

