document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Set initial position
    updateSlider();
    
    // Next slide
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    });
    
    // Previous slide
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlider();
    });
    
    // Auto slide every 5 seconds
    let slideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlider();
    }, 5000);
    
    // Pause on hover
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }, 5000);
    });
    
    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        
        // Add animation class
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        slides[currentIndex].classList.add('active');
    }
    
    // Touch support for mobile devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    sliderContainer.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});
    
    sliderContainer.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, {passive: true});
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left - next slide
            currentIndex = (currentIndex + 1) % slideCount;
        } else if (touchEndX > touchStartX + 50) {
            // Swipe right - previous slide
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        }
        updateSlider();
    }
});