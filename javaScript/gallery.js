document.addEventListener('DOMContentLoaded', () => {
    // Gallery data - in production, this would come from an API
    const galleryData = [
        {
            id: 1,
            imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
            title: 'Signature Dish',
            category: 'food',
            description: 'Our chef\'s special creation with authentic spices'
        },
        {
            id: 2,
            imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Restaurant Interior',
            category: 'interior',
            description: 'Elegant dining area with traditional decor'
        },
        {
            id: 3,
            imageUrl: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1371&q=80',
            title: 'Chef Preparing Food',
            category: 'chefs',
            description: 'Our master chef crafting authentic dishes'
        },
        {
            id: 4,
            imageUrl: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Traditional Cooking',
            category: 'food',
            description: 'Prepared with authentic techniques'
        },
        {
            id: 5,
            imageUrl: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Modern Plating',
            category: 'food',
            description: 'Contemporary presentation of classic dishes'
        },
        {
            id: 6,
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Bar Area',
            category: 'interior',
            description: 'Our fully stocked bar with signature cocktails'
        },
        {
            id: 7,
            imageUrl: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Private Dining',
            category: 'interior',
            description: 'Exclusive space for special occasions'
        },
        {
            id: 8,
            imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
            title: 'Chef Team',
            category: 'chefs',
            description: 'Our talented culinary team'
        },
        {
            id: 9,
            imageUrl: 'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Dessert Selection',
            category: 'food',
            description: 'Traditional Indian sweets with modern twist'
        },
        {
            id: 10,
            imageUrl: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80',
            title: 'Outdoor Seating',
            category: 'interior',
            description: 'Al fresco dining with garden view'
        },
        {
            id: 11,
            imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
            title: 'Wine Collection',
            category: 'interior',
            description: 'Curated selection of international wines'
        },
        {
            id: 12,
            imageUrl: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
            title: 'Live Cooking Station',
            category: 'events',
            description: 'Interactive dining experience'
        }
        // ... (keep all your other gallery items here)
    ];

    // Initialize AOS with configuration
    const initializeAOS = () => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            initClassName: 'aos-init',
            animatedClassName: 'aos-animate'
        });
    };

    // Render gallery items to the DOM
    const renderGallery = (items) => {
        const galleryGrid = document.getElementById('gallery-grid');
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';

        items.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${item.category} aos-init`;
            galleryItem.dataset.category = item.category;
            galleryItem.dataset.id = item.id;
            galleryItem.dataset.aos = 'fade-up';
            galleryItem.dataset.aosDelay = (index % 6) * 100; // Stagger animations

            galleryItem.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}" class="gallery-img" loading="lazy">
                <span class="gallery-category">${item.category}</span>
                <div class="gallery-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;

            galleryGrid.appendChild(galleryItem);
        });

        // Refresh AOS after new items are added
        setTimeout(() => AOS.refresh(), 100);
    };

    // Set up filter buttons functionality
    const setupFilterButtons = () => {
        const filterButtons = document.querySelectorAll('.category-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Filter gallery
                const filterValue = button.dataset.filter;
                filterGallery(filterValue);
            });
        });
    };

    // Filter gallery items by category
    const filterGallery = (category) => {
        const galleryItems = document.querySelectorAll('.gallery-item');
        
        galleryItems.forEach(item => {
            const shouldShow = category === 'all' || item.dataset.category === category;
            item.style.display = shouldShow ? 'block' : 'none';
            
            // Refresh AOS for visible items
            if (shouldShow) {
                item.classList.add('aos-init');
                item.setAttribute('data-aos', 'fade-up');
            }
        });
        
        // Refresh AOS after filtering
        setTimeout(() => AOS.refresh(), 50);
    };

    // Initialize lightbox functionality
    const initializeLightbox = () => {
        const lightbox = document.getElementById('lightbox');
        if (!lightbox) return;

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.getElementById('lightbox-close');
        const prevBtn = document.getElementById('lightbox-prev');
        const nextBtn = document.getElementById('lightbox-next');
        const galleryItems = document.querySelectorAll('.gallery-item');

        let currentIndex = 0;
        let filteredItems = [];


        

        // Open lightbox with clicked image
        const openLightbox = (index) => {
            const activeFilter = document.querySelector('.category-btn.active')?.dataset.filter || 'all';
            filteredItems = Array.from(galleryItems).filter(item => 
                activeFilter === 'all' || item.dataset.category === activeFilter
            ).filter(item => item.style.display !== 'none');

            if (filteredItems.length === 0) return;

            currentIndex = index;
            updateLightboxContent();
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        // Update lightbox content
        const updateLightboxContent = () => {
            if (!filteredItems[currentIndex]) return;
            
            const imgSrc = filteredItems[currentIndex].querySelector('img').src;
            const title = filteredItems[currentIndex].querySelector('h3')?.textContent || '';
            const description = filteredItems[currentIndex].querySelector('p')?.textContent || '';
            
            lightboxImg.src = imgSrc;
            lightboxImg.alt = title;
            lightboxCaption.innerHTML = `<strong>${title}</strong>${description ? '<br>' + description : ''}`;
        };

        // Close lightbox
        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Navigation functions
        const navigate = (direction) => {
            if (filteredItems.length <= 1) return;
            
            currentIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
            updateLightboxContent();
        };

        // Event listeners for gallery items
        galleryItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                const activeFilter = document.querySelector('.category-btn.active')?.dataset.filter || 'all';
                const visibleItems = Array.from(galleryItems).filter(item => 
                    (activeFilter === 'all' || item.dataset.category === activeFilter) && 
                    item.style.display !== 'none'
                );
                
                const itemIndex = visibleItems.findIndex(visibleItem => 
                    visibleItem.dataset.id === item.dataset.id
                );
                
                if (itemIndex !== -1) {
                    openLightbox(itemIndex);
                }
            });
        });

        // Lightbox control event listeners
        closeBtn.addEventListener('click', closeLightbox);
        prevBtn.addEventListener('click', () => navigate(-1));
        nextBtn.addEventListener('click', () => navigate(1));

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!lightbox.classList.contains('active')) return;
            
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    navigate(-1);
                    break;
                case 'ArrowRight':
                    navigate(1);
                    break;
            }
        });
    };

    // Initialize everything
    const init = () => {
        initializeAOS();
        renderGallery(galleryData);
        setupFilterButtons();
        initializeLightbox();
    };

    init();
});

