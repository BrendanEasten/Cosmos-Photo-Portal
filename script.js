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
    'Photos/cosmo14.png', 
    'Photos/cosmo16.png',  
    'Photos/cosmo18.png', 
    'Photos/cosmo19.png', 
    'Photos/cosmo20.png', 
    'Photos/cosmo21.png', 
    'Photos/cosmo22.png', 
    'Photos/cosmo23.png', 
    'Photos/cosmo24.png', 
    'Photos/cosmo25.png', 
    'Photos/cosmo26.png', 
    'Photos/cosmo27.png', 
    'Photos/cosmo28.png', 
    'Photos/cosmo29.png', 
    'Photos/cosmo30.png', 
    'Photos/cosmo31.png', 
    'Photos/cosmo32.png', 
    'Photos/cosmo33.png', 
    'Photos/cosmo34.png', 


];

// Get the image element and button
const cosmoPhoto = document.getElementById('cosmo-photo');
const newPhotoButton = document.getElementById('new-photo-btn');

// Keep track of the last displayed photo index
let lastPhotoIndex = -1;

// Add a click event to the button
newPhotoButton.addEventListener('click', () => {
    let randomPhoto;
    
    // Ensure a new photo is chosen
    do {
        randomPhoto = Math.floor(Math.random() * cosmoPhotos.length);
    } while (randomPhoto === lastPhotoIndex);
    
    // Set the image src to the new random photo
    cosmoPhoto.src = cosmoPhotos[randomPhoto];
    
    // Update the lastPhotoIndex to the current photo
    lastPhotoIndex = randomPhoto;
});