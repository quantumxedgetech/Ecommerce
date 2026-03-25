// ===================================
// Product Data
// ===================================
const products = [
    {
        id: 1,
        name: 'Wireless Headphones Pro',
        category: 'electronics',
        price: 299.99,
        rating: 4.8,
        reviews: 1243,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1545127398-14699f92334b?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 2,
        name: 'Smart Watch Ultra',
        category: 'electronics',
        price: 449.99,
        rating: 4.9,
        reviews: 2156,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500&h=500&fit=crop'
        ],
        badge: 'New'
    },
    {
        id: 3,
        name: 'Laptop Pro 15"',
        category: 'electronics',
        price: 1299.99,
        rating: 4.7,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=500&fit=crop'
        ],
        badge: 'Trending'
    },
    {
        id: 4,
        name: 'Mechanical Keyboard',
        category: 'electronics',
        price: 159.99,
        rating: 4.6,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 5,
        name: 'Premium Denim Jacket',
        category: 'fashion',
        price: 89.99,
        rating: 4.5,
        reviews: 423,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1543076659-9380cdf10613?w=500&h=500&fit=crop'
        ],
        badge: 'Sale'
    },
    {
        id: 6,
        name: 'Designer Sneakers',
        category: 'fashion',
        price: 129.99,
        rating: 4.7,
        reviews: 789,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 7,
        name: 'Casual T-Shirt Pack',
        category: 'fashion',
        price: 49.99,
        rating: 4.4,
        reviews: 1023,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 8,
        name: 'Leather Backpack',
        category: 'fashion',
        price: 179.99,
        rating: 4.8,
        reviews: 634,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&h=500&fit=crop'
        ],
        badge: 'New'
    },
    {
        id: 9,
        name: 'Modern Sofa Set',
        category: 'home',
        price: 899.99,
        rating: 4.6,
        reviews: 256,
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&h=500&fit=crop'
        ],
        badge: 'Trending'
    },
    {
        id: 10,
        name: 'Minimalist Desk Lamp',
        category: 'home',
        price: 59.99,
        rating: 4.7,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 11,
        name: 'Ceramic Vase Collection',
        category: 'home',
        price: 79.99,
        rating: 4.5,
        reviews: 412,
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 12,
        name: 'Smart Air Purifier',
        category: 'home',
        price: 249.99,
        rating: 4.8,
        reviews: 723,
        image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop'
        ],
        badge: 'New'
    },
    {
        id: 13,
        name: 'Yoga Mat Premium',
        category: 'sports',
        price: 39.99,
        rating: 4.6,
        reviews: 1456,
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 14,
        name: 'Dumbbell Set 20kg',
        category: 'sports',
        price: 119.99,
        rating: 4.7,
        reviews: 634,
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=500&h=500&fit=crop'
        ],
        badge: 'Sale'
    },
    {
        id: 15,
        name: 'Running Shoes Elite',
        category: 'sports',
        price: 149.99,
        rating: 4.8,
        reviews: 1823,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 16,
        name: 'Fitness Tracker Band',
        category: 'sports',
        price: 79.99,
        rating: 4.5,
        reviews: 945,
        image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1557935728-e6d1eaabe558?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&h=500&fit=crop'
        ],
        badge: 'Trending'
    },
    {
        id: 17,
        name: 'Wireless Mouse',
        category: 'electronics',
        price: 49.99,
        rating: 4.6,
        reviews: 1567,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1586920740099-e6707c0e2e2e?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 18,
        name: '4K Webcam Pro',
        category: 'electronics',
        price: 199.99,
        rating: 4.8,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=500&h=500&fit=crop'
        ],
        badge: 'New'
    },
    {
        id: 19,
        name: 'Bluetooth Speaker',
        category: 'electronics',
        price: 129.99,
        rating: 4.7,
        reviews: 2341,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 20,
        name: 'Designer Watch',
        category: 'fashion',
        price: 299.99,
        rating: 4.9,
        reviews: 678,
        image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500&h=500&fit=crop'
        ],
        badge: 'Trending'
    },
    {
        id: 21,
        name: 'Sunglasses Classic',
        category: 'fashion',
        price: 79.99,
        rating: 4.5,
        reviews: 1234,
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 22,
        name: 'Leather Wallet',
        category: 'fashion',
        price: 59.99,
        rating: 4.6,
        reviews: 945,
        image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&h=500&fit=crop'
        ],
        badge: 'Sale'
    },
    {
        id: 23,
        name: 'Winter Coat Premium',
        category: 'fashion',
        price: 199.99,
        rating: 4.8,
        reviews: 567,
        image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1548126032-079d3e1c8c0e?w=500&h=500&fit=crop'
        ],
        badge: 'New'
    },
    {
        id: 24,
        name: 'Coffee Maker Deluxe',
        category: 'home',
        price: 149.99,
        rating: 4.7,
        reviews: 1456,
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 25,
        name: 'Wall Art Set',
        category: 'home',
        price: 89.99,
        rating: 4.5,
        reviews: 723,
        image: 'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1582037928769-181f2644ecb7?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=500&h=500&fit=crop'
        ],
        badge: null
    },
    {
        id: 26,
        name: 'Throw Pillow Set',
        category: 'home',
        price: 39.99,
        rating: 4.6,
        reviews: 1892,
        image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=500&h=500&fit=crop'
        ],
        badge: 'Sale'
    },
    {
        id: 27,
        name: 'Resistance Bands Kit',
        category: 'sports',
        price: 29.99,
        rating: 4.7,
        reviews: 2134,
        image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    },
    {
        id: 28,
        name: 'Tennis Racket Pro',
        category: 'sports',
        price: 189.99,
        rating: 4.8,
        reviews: 456,
        image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1617883861744-beb916c28ca1?w=500&h=500&fit=crop'
        ],
        badge: 'Trending'
    },
    {
        id: 29,
        name: 'Gaming Headset RGB',
        category: 'electronics',
        price: 159.99,
        rating: 4.7,
        reviews: 1834,
        image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=500&h=500&fit=crop'
        ],
        badge: 'New'
    },
    {
        id: 30,
        name: 'Luxury Handbag',
        category: 'fashion',
        price: 249.99,
        rating: 4.9,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
        gallery: [
            'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&h=500&fit=crop',
            'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop'
        ],
        badge: 'Popular'
    }
];

// ===================================
// Shopping Cart State
// ===================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// ===================================
// DOM Elements
// ===================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartClose = document.getElementById('cartClose');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartEmpty = document.getElementById('cartEmpty');
const cartFooter = document.getElementById('cartFooter');
const totalPrice = document.getElementById('totalPrice');
const productGrid = document.getElementById('productGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// ===================================
// Initialize App
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    renderProducts('all');
    updateCartUI();
    initScrollEffects();
    initSmoothScroll();
});

// ===================================
// Navigation Scroll Effect
// ===================================
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===================================
// Mobile Menu Toggle
// ===================================
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// Close menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-times');
    });
});

// ===================================
// Smooth Scrolling
// ===================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // navbar height
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===================================
// Product Rendering
// ===================================
function renderProducts(filter) {
    const filteredProducts = filter === 'all'
        ? products
        : products.filter(product => product.category === filter);

    productGrid.innerHTML = '';

    filteredProducts.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const stars = generateStars(product.rating);

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <span class="product-price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    Add
                </button>
            </div>
        </div>
    `;

    return card;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHTML = '';

    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }

    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }

    return starsHTML;
}

// ===================================
// Product Filtering
// ===================================
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Filter products
        const filter = btn.dataset.filter;
        renderProducts(filter);
    });
});

// Category cards filtering
document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;

        // Scroll to products section
        document.getElementById('products').scrollIntoView({ behavior: 'smooth' });

        // Update filter
        setTimeout(() => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            renderProducts(category);
        }, 500);
    });
});

// ===================================
// Shopping Cart Functions
// ===================================
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    saveCart();
    updateCartUI();
    showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showToast('Item removed from cart');
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items display
    if (cart.length === 0) {
        cartEmpty.classList.add('show');
        cartFooter.classList.remove('show');
        cartItems.innerHTML = '';
    } else {
        cartEmpty.classList.remove('show');
        cartFooter.classList.add('show');
        renderCartItems();
        updateCartTotal();
    }
}

function renderCartItems() {
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalPrice.textContent = `$${total.toFixed(2)}`;
}

// ===================================
// Cart Sidebar Toggle
// ===================================
cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('active');
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

cartClose.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function closeCart() {
    cartSidebar.classList.remove('active');
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Close cart when clicking "Start Shopping" link
cartEmpty.querySelector('a').addEventListener('click', closeCart);

// ===================================
// Toast Notifications
// ===================================
function showToast(message) {
    toastMessage.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===================================
// Form Handlers
// ===================================
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Message sent successfully! We\'ll get back to you soon.');
    e.target.reset();
});

document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Thanks for subscribing to our newsletter!');
    e.target.reset();
});

// ===================================
// Checkout Functionality
// ===================================
const checkoutModal = document.getElementById('checkoutModal');
const closeCheckout = document.getElementById('closeCheckout');
const checkoutForm = document.getElementById('checkoutForm');
const checkoutSubtotal = document.getElementById('checkoutSubtotal');
const checkoutTax = document.getElementById('checkoutTax');
const checkoutTotal = document.getElementById('checkoutTotal');

const orderConfirmation = document.getElementById('orderConfirmation');
const orderNumber = document.getElementById('orderNumber');
const confirmEmail = document.getElementById('confirmEmail');
const confirmTotal = document.getElementById('confirmTotal');
const orderItemsList = document.getElementById('orderItemsList');
const continueShopping = document.getElementById('continueShopping');

// Payment method elements
const cardPayment = document.getElementById('cardPayment');
const codPayment = document.getElementById('codPayment');
const cardDetailsSection = document.getElementById('cardDetailsSection');
const cardInputs = document.querySelectorAll('.card-input');

// Toggle card details based on payment method
function toggleCardDetails() {
    if (codPayment.checked) {
        cardDetailsSection.classList.add('hidden');
        // Remove required attribute from card inputs
        cardInputs.forEach(input => {
            input.removeAttribute('required');
        });
    } else {
        cardDetailsSection.classList.remove('hidden');
        // Add required attribute to card inputs
        cardInputs.forEach(input => {
            input.setAttribute('required', 'required');
        });
    }
}

// Listen for payment method changes
cardPayment.addEventListener('change', toggleCardDetails);
codPayment.addEventListener('change', toggleCardDetails);

// Initialize on page load
toggleCardDetails();

// Open checkout modal
document.querySelector('.checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1; // 10% tax
    const total = subtotal + tax;

    checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    checkoutTax.textContent = `$${tax.toFixed(2)}`;
    checkoutTotal.textContent = `$${total.toFixed(2)}`;

    checkoutModal.classList.add('active');
    closeCart();
    document.body.style.overflow = 'hidden';
});

// Close checkout modal
closeCheckout.addEventListener('click', () => {
    checkoutModal.classList.remove('active');
    document.body.style.overflow = '';
});

// Close on overlay click
checkoutModal.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
        checkoutModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Handle checkout form submission
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const email = document.getElementById('email').value;

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    // Generate random order number
    const orderNum = Math.floor(10000 + Math.random() * 90000);

    // Populate confirmation modal
    orderNumber.textContent = orderNum;
    confirmEmail.textContent = email;
    confirmTotal.textContent = `$${total.toFixed(2)}`;

    // Populate order items list
    orderItemsList.innerHTML = '';
    cart.forEach(item => {
        const itemEl = document.createElement('div');
        itemEl.style.marginBottom = '8px';
        itemEl.style.padding = '8px';
        itemEl.style.background = 'var(--bg-tertiary)';
        itemEl.style.borderRadius = 'var(--border-radius-sm)';
        itemEl.innerHTML = `
            <strong>${item.name}</strong><br>
            <small>Quantity: ${item.quantity} × $${item.price.toFixed(2)} = $${(item.price * item.quantity).toFixed(2)}</small>
        `;
        orderItemsList.appendChild(itemEl);
    });

    // Close checkout modal
    checkoutModal.classList.remove('active');

    // Show confirmation modal
    setTimeout(() => {
        orderConfirmation.classList.add('active');
    }, 300);

    // Clear cart
    cart = [];
    saveCart();
    updateCartUI();

    // Reset form
    checkoutForm.reset();
});

// Continue shopping button
continueShopping.addEventListener('click', () => {
    orderConfirmation.classList.remove('active');
    document.body.style.overflow = '';

    // Scroll to products
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// Close confirmation on overlay click
orderConfirmation.addEventListener('click', (e) => {
    if (e.target === orderConfirmation) {
        orderConfirmation.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===================================
// Search Button (Placeholder)
// ===================================
document.querySelector('.search-btn').addEventListener('click', () => {
    showToast('Search feature coming soon!');
});


// ===================================
// Image Gallery Enhancement
// ===================================
// Override createProductCard to add gallery support
const originalCreateProductCard = createProductCard;
window.createProductCard = function(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${index * 0.1}s`;

    const stars = generateStars(product.rating);
    const gallery = product.gallery || [product.image];

    card.innerHTML = `
        <div class="product-image">
            <img src="${gallery[0]}" alt="${product.name}" loading="lazy" class="main-product-img" data-product-id="${product.id}">
            ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            ${gallery.length > 1 ? `
                <div class="image-gallery-thumbs">
                    ${gallery.map((img, idx) => `
                        <div class="gallery-thumb ${idx === 0 ? 'active' : ''}" data-index="${idx}" data-product-id="${product.id}">
                            <img src="${img}" alt="${product.name} view ${idx + 1}">
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        <div class="product-info">
            <div class="product-category">${product.category}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-rating">
                <div class="stars">${stars}</div>
                <span class="rating-count">(${product.reviews})</span>
            </div>
            <div class="product-footer">
                <span class="product-price">${product.price.toFixed(2)}</span>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    Add
                </button>
            </div>
        </div>
    `;

    // Add event listeners for gallery thumbnails
    if (gallery.length > 1) {
        setTimeout(() => {
            const thumbs = card.querySelectorAll('.gallery-thumb');
            const mainImg = card.querySelector('.main-product-img');
            
            thumbs.forEach(thumb => {
                thumb.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const index = parseInt(thumb.dataset.index);
                    mainImg.src = gallery[index];
                    
                    // Update active state
                    thumbs.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });
        }, 0);
    }

    return card;
};
