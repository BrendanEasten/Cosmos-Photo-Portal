document.getElementById('year').textContent = new Date().getFullYear();

const cosmoPhotos = [
    'photos/cosmo1.png',
    'photos/cosmo2.png',
    'photos/cosmo3.png',
    'photos/cosmo4.png',
    'photos/cosmo5.png', 
    'photos/cosmo7.png', 
    'photos/cosmo8.png', 
    'photos/cosmo9.png', 
    'photos/cosmo10.png', 
    'photos/cosmo11.png', 
    'photos/cosmo12.png', 
    'photos/cosmo13.png', 
    'photos/cosmo14.png', 
    'photos/cosmo15.png', 
    'photos/cosmo16.png', 
    'photos/cosmo17.png', 
    'photos/cosmo18.png', 


];

// Get the image element and button
const cosmoPhoto = document.getElementById('cosmo-photo');
const newPhotoButton = document.getElementById('new-photo-btn');

// Add a click event to the button
newPhotoButton.addEventListener('click', () => {
    // Generate a random index to pick a photo
    const randomIndex = Math.floor(Math.random() * cosmoPhotos.length);
    
    // Set the image src to a new random photo
    cosmoPhoto.src = cosmoPhotos[randomIndex];
});