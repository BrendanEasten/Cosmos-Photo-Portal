document.getElementById('year').textContent = new Date().getFullYear();

const cosmoPhotos = [
    'Photos/cosmo1.png',
    'Photos/cosmo2.png',
    'Photos/cosmo3.png',
    'Photos/cosmo4.png',
    'Photos/cosmo5.png', 
    'Photos/cosmo7.png', 
    'Photos/cosmo8.png', 
    'Photos/cosmo9.png', 
    'Photos/cosmo10.png', 
    'Photos/cosmo11.png', 
    'Photos/cosmo12.png', 
    'Photos/cosmo13.png', 
    'Photos/cosmo14.png', 
    'Photos/cosmo16.png', 
    'Photos/cosmo17.png', 
    'Photos/cosmo18.png', 


];

// Get the image element and button
const cosmoPhoto = document.getElementById('cosmo-photo');
const newPhotoButton = document.getElementById('new-photo-btn');

// Add a click event to the button
newPhotoButton.addEventListener('click', () => {
    // Generate a random index to pick a photo
    const randomPhoto = Math.floor(Math.random() * cosmoPhotos.length);
    
    // Set the image src to a new random photo
    cosmoPhoto.src = cosmoPhotos[randomPhoto];
});