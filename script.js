document.addEventListener('DOMContentLoaded', function() {
  // Check if the current page is "mean.html"
  if (window.location.href.includes("mean.html")) {
    // Array of different text options
    const textOptions = [
      "WILL YOU GIVE ME ANOTHER CHANCE",
      "WHY SO MEAN?",
      "PLEASE, I'M BEGGING YOU",
      "Im gonna go cry NOW :(",
      "What a rude person",
      "it doesnt have to end like this",
      "MY SNOW WHITE",
      "MY CINDERALLALALALLA"
    ];

    // Array of different picture URLs
    const pictureURLs = [
      "https://i.kym-cdn.com/entries/icons/mobile/000/026/489/crying.jpg",
      "https://i.pinimg.com/564x/7c/d0/67/7cd067f486977c1bbe6fca6883ec2863.jpg",
      "https://i.pinimg.com/564x/88/22/a4/8822a400b3db09b0cf34a94611215cd0.jpg",
      "https://i.pinimg.com/736x/f3/8f/77/f38f77ffa1ad80f37d04cce9cb6b0e7e.jpg",
      "https://i.pinimg.com/564x/1f/a2/52/1fa25294da70ab8d3ac520c8b135e3b9.jpg",
      "https://i.pinimg.com/736x/4f/31/fc/4f31fcf0501ed5dc4bcb4c1c105304c0.jpg", 
      "https://i.pinimg.com/564x/78/5b/27/785b27933f28b7f2a6ba043b9e689aa7.jpg",
      "https://i.pinimg.com/736x/d5/c7/8b/d5c78bba416323e097a07d712bd62305.jpg",
      "https://i.pinimg.com/564x/c7/27/c5/c727c5a498ad65aa582d46d98dc457d0.jpg"
    ];

    let pictureIndex = 0; // Initialize picture index
    let displayedPictures = []; // Track the currently displayed pictures

    // Function to generate and display moving text
    function generateMovingText() {
      // Remove the previously displayed text and pictures
      const previousText = document.querySelector('.moving-text-container');
      if (previousText) {
        previousText.remove();
      }
      displayedPictures.forEach(picture => picture.remove());
      displayedPictures = [];

      // Randomly select text from textOptions array
      const randomText = textOptions[Math.floor(Math.random() * textOptions.length)];

      // Create a div for the moving text container
      const movingTextContainer = document.createElement('div');
      movingTextContainer.classList.add('moving-text-container');

      // Set random position for the text container
      movingTextContainer.style.top = Math.random() * (window.innerHeight - 50) + 'px';
      movingTextContainer.style.left = Math.random() * (window.innerWidth - 200) + 'px';

      // Create a div for the text content
      const movingText = document.createElement('div');
      movingText.classList.add('moving-text');
      movingText.textContent = randomText; // Set random text content

      // Append text to the container
      movingTextContainer.appendChild(movingText);

      // Append container to the body
      document.body.appendChild(movingTextContainer);

      // Display two pictures
      for (let i = 0; i < 2; i++) {
        const img = document.createElement('img');
        img.src = pictureURLs[pictureIndex];
        img.style.position = 'absolute';
        img.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        img.style.left = Math.random() * (window.innerWidth - 200) + 'px';
        img.style.width = '150px'; // Adjust size as needed
        document.body.appendChild(img);
        displayedPictures.push(img);

        // Increment picture index for next cycle
        pictureIndex = (pictureIndex + 1) % pictureURLs.length;
      }
    }

    // Find the "No" button on the mean.html page and add event listener
    const noButton = document.getElementById('text5');
    if (noButton) {
      noButton.addEventListener('click', generateMovingText);
    }
  }
});
