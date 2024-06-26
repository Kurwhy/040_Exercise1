function showImageInfo(imageName) {
    const popup = document.getElementById('imageInfo');
    const imageNameSpan = document.getElementById('imageName');
    const imageDescriptionSpan = document.getElementById('imageDescription');

    imageNameSpan.textContent = imageName;
    imageDescriptionSpan.textContent = 'This is a beautiful image of ' + imageName;
    
    popup.style.display = 'block';

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.photo') && event.target !== popup) {
            popup.style.display = 'none';
        }
    });

const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.backgroundColor = '#f0f0f0';
        });

        link.addEventListener('mouseout', () => {
            link.style.backgroundColor = 'transparent';
        });
    });

    const images = ['Bromo.jpg', 'iya.jpg', 'beh.jpg'];
        let currentIndex = 0;

        function changeBackground() {
            document.querySelector('header').style.backgroundImage = `url(${images[currentIndex]})`;
            currentIndex = (currentIndex + 1) % images.length;
        }
        setInterval(changeBackground, 5000);
}