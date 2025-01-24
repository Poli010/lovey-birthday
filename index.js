const lyrics = [
    "Happy birthday to you",
    "Happy birthday to you",
    "Happy birthday dear Lovey",
    "Happy birthday dear Lovey",
    "Happy birthday to you!"
];

function showModal() {
    const modal = document.getElementById('birthdayModal');
    const overlay = document.getElementById('overlay');
    const song = document.getElementById('birthdaySong');
    const lyricsElement = document.getElementById('lyrics');

    modal.style.display = 'block';
    overlay.style.display = 'block';

    let line = 0;
    lyricsElement.innerText = '';
    song.play();

    const displayLyrics = setInterval(() => {
        const showLyrics = setInterval(() => {
            if (line < lyrics.length) {
                lyricsElement.innerText += `${lyrics[line]}\n`;
                line++;
            } else {
                clearInterval(showLyrics);
                setTimeout(() => {
                    closeModal(modal, overlay, song);
                    showBirthdayMessage();
                }, 2000);
            }
        }, 2000);
    },2000)
    

    overlay.onclick = () => closeModal(modal, overlay, song);
}

function closeModal(modal, overlay, song) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    song.pause();
    song.currentTime = 0;
}

function showBirthdayMessage() {
    const messageModal = document.getElementById('messageModal');
    const overlay = document.getElementById('overlay');
    const birthdayImage = document.getElementById('birthdayImage');

    messageModal.style.display = 'block';
    overlay.style.display = 'block';

    const images = [
        'image/2.jpg',
        'image/3.jpg',
        'image/4.jpg',
        'image/5.jpg',
    ];

    let currentImage = 0;

    const changeImage = () => {
        // Add the 'hidden' class to start fading out
        birthdayImage.classList.add('hidden');

        // Wait for the fade-out animation to complete
        setTimeout(() => {
            // Change the image source
            currentImage = (currentImage + 1) % images.length;
            birthdayImage.src = images[currentImage];

            // Remove the 'hidden' class to fade in the new image
            birthdayImage.classList.remove('hidden');
        }, 2000); // Match the CSS transition duration
    };

    // Set an interval to change the image every 3 seconds
    setInterval(changeImage, 3000);

    overlay.onclick = () => {
        messageModal.style.display = 'none';
        overlay.style.display = 'none';
    };
}


function createHeart() {
    const heartsContainer = document.querySelector('.hearts');
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const size = Math.random() * 10 + 10;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 3}s`;

    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 300);
