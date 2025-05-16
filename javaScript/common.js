


// Page Loader Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Show loader immediately
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    `;
    loader.innerHTML = `
        <div class="loader-content" style="text-align: center;">
            <div class="spinner" style="
                width: 50px;
                height: 50px;
                border: 5px solid #f3f3f3;
                border-top: 5px solid #E74C3C;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                margin: 0 auto 20px;">
            </div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Hide loader when everything is loaded
    window.addEventListener('load', function() {
        setTimeout(() => {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.remove();
            }, 500);
        }, 500); // Minimum show time for better UX
    });
});

// Main Application Code (from your big JS)
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: false,
        mirror: true
    });

    // Mobile menu toggle
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');
    const backToTopBtn = document.getElementById('backToTop');

    if (hamburgerBtn && mobileMenu && hamburger) {
        hamburgerBtn.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('overflow-hidden');
        });

        // Close mobile menu when clicking on links
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('overflow-hidden');
            });
        });
    }

    // Smooth scrolling for navigation links

    // Back to top button
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

  

    // Newsletter form
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing to our newsletter!');
            this.reset();
        });
    }

});

// Add CSS for the loader animation
const loaderStyle = document.createElement('style');
loaderStyle.textContent = `
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;
document.head.appendChild(loaderStyle);