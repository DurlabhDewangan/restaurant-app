// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// ====================== DOM ELEMENTS ======================
const categoryButtons = document.querySelectorAll('.category-btn');
const searchInput = document.getElementById('menu-search');
const menuContainer = document.getElementById('menu-container');
const noResults = document.getElementById('no-results');
// const hamburgerBtn = document.getElementById('hamburger-btn');
// const mobileMenu = document.getElementById('mobile-menu');
// const hamburger = document.querySelector('.hamburger');
// const backToTopBtn = document.getElementById('backToTop');
// const navbar = document.getElementById('navbar');

// // ====================== MOBILE MENU TOGGLE ======================
// hamburgerBtn.addEventListener('click', () => {
//     mobileMenu.classList.toggle("open");
//     hamburger.classList.toggle("active");
//     document.body.classList.toggle("overflow-hidden");
// });


// // Close mobile menu when clicking on links
// document.querySelectorAll("#mobile-menu a").forEach(link =>{
//     link.addEventListener('click',()=>{
//         hamburger.classList.remove("active");
//         mobileMenu.classList.remove("open");
//         document.body.classList.remove("overflow-hidden");
//     })
// })
// // ====================== SMOOTH SCROLLING ======================
// document.querySelectorAll('a[href^="#"').forEach(anchor =>{
//     anchor.addEventListener('click',function(e){
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior:"smooth",
//             block :"center"
//         });
//     });
// });


// Back to top functionality
// backToTopBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     window.scrollTo({top:0,behavior:"smooth"})
// })
// ====================== MENU FUNCTIONALITY ======================
/**
 * Renders menu items to the DOM
 * @param {Array} items - Array of menu item objects
 */
function renderMenuItems(items) {
    menuContainer.innerHTML = '';
    
    if (items.length === 0) {
        noResults.classList.remove('hidden');
        return;
    }
    
    noResults.classList.add('hidden');
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg';
        menuItem.dataset.category = item.category;
        menuItem.innerHTML = `
            <div class="menu-card ">
                <div class="relative overflow-hidden">
                    <img src="${item.image}" 
                         alt="${item.name}" 
                         class="menu-card-img transition-transform duration-500 hover:scale-110"
                         loading="lazy">
                    <span class="absolute top-4 right-4 bg-yellow-300 text-red-500 px-3 py-1 rounded-full text-sm font-bold">₹${item.price}</span>
                </div>
                <div class="p-6 flex-grow">
                    <h3 class="text-xl font-bold mb-2">${item.name}</h3>
                    <p class="text-gray-600 mb-4">${item.description}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-sm font-medium ${item.vegetarian ? 'text-green-600' : 'text-red-600'}">
                            ${item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                        </span>
                    </div>
                </div>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });
}

/**
 * Filters menu items by category
 * @param {string} category - Category to filter by ('all' shows all items)
 */
function filterByCategory(category) {
    if (category === 'all') {
        renderMenuItems(allMenuItems);
        return;
    }
    
    const filteredItems = allMenuItems.filter(item => item.category === category);
    renderMenuItems(filteredItems);
    
}

/**
 * Searches menu items by name or description
 * @param {string} term - Search term to filter by
 */
function searchMenuItems(term) {
    const filteredItems = allMenuItems.filter(item => {
        return item.name.toLowerCase().includes(term) || 
               item.description.toLowerCase().includes(term);
    });
    renderMenuItems(filteredItems);
}

// ====================== EVENT LISTENERS ======================
// Category button click handlers
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Filter by category
        filterByCategory(button.dataset.category);
    });
});

// Search input handler
searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    
    // If search term is empty, show items based on active category
    if (term === '') {
        const activeCategory = document.querySelector('.category-btn.active');
        filterByCategory(activeCategory ? activeCategory.dataset.category : 'all');
        return;
    }
    
    searchMenuItems(term);
});

// ====================== INITIAL LOAD ======================
// Set 'All' category as active and render all menu items
document.querySelector('.category-btn[data-category="all"]').classList.add('active');
renderMenuItems(allMenuItems);

// In menu.html
document.querySelectorAll('a[href^="index.html#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Extract the hash fragment (e.g., "#contact-section")
        const hash = this.hash;
        
        // Navigate to index.html first
        window.location.href = 'index.html';
        
        // Store the target section in sessionStorage
        sessionStorage.setItem('scrollTo', hash);
    });
});

// In index.html (add this at the bottom of your existing JS)
document.addEventListener('DOMContentLoaded', function() {
    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
        const target = document.querySelector(scrollTo);
        if (target) {
            setTimeout(() => { // Small delay to ensure page loads
                target.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
        sessionStorage.removeItem('scrollTo'); // Clean up
    }
});