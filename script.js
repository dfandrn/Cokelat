document.addEventListener('DOMContentLoaded', function() {
            // Mobile Navigation Toggle
            const mobileToggle = document.getElementById('mobileToggle');
            const navMenu = document.getElementById('navMenu');
            
            mobileToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                mobileToggle.innerHTML = navMenu.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('active');
                    mobileToggle.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
            
            // Header scroll effect
            const header = document.getElementById('header');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Back to top button
                const backToTop = document.getElementById('backToTop');
                if (window.scrollY > 300) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });
            
            // Back to top functionality
            document.getElementById('backToTop').addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Product data
            const products = [
                {
                    id: 1,
                    name: "Coklat Tabung Sedang",
                    price: "Rp57.200",
                    status: "down",
                    category: "coklat",
                    description: "Coklat premium dalam kemasan tabung sedang, cocok untuk hadiah."
                },
                {
                    id: 2,
                    name: "Coklat PCS",
                    price: "Rp12.500",
                    status: "down",
                    category: "coklat",
                    description: "Coklat per piece dengan berbagai varian rasa."
                },
                {
                    id: 3,
                    name: "Donat",
                    price: "Rp3.500",
                    status: "up",
                    category: "donat",
                    description: "Donat dengan topping ceres yang lezat dan manis."
                },
                {
                    id: 4,
                    name: "Kue Brownies",
                    price: "Rp250.000",
                    status: "down",
                    category: "kue",
                    description: "Brownies coklat khas dengan tekstur lembut dan padat."
                },
                {
                    id: 5,
                    name: "Kue Ulang Tahun",
                    price: "Rp250.000",
                    status: "down",
                    category: "kue",
                    description: "Kue ulang tahun custom dengan hiasan coklat premium."
                },
                {
                    id: 6,
                    name: "Coklat Varian Toples Mini",
                    price: "Rp100.000",
                    status: "down",
                    category: "coklat",
                    description: "Coklat dalam toples mini, praktis dan cocok untuk oleh-oleh."
                },
                {
                    id: 7,
                    name: "Coklat Bingkisan",
                    price: "Rp380.000",
                    status: "up",
                    category: "coklat",
                    description: "Paket bingkisan coklat premium, bisa custom sesuai permintaan."
                },
                {
                    id: 8,
                    name: "Kue Var Max",
                    price: "Rp280.000",
                    status: "down",
                    category: "kue",
                    description: "Kue coklat dengan ukuran maksimal, cocok untuk acara besar."
                }
            ];
            
            // Render products
            const productGrid = document.getElementById('productGrid');
            
            function renderProducts(filter = 'all') {
                productGrid.innerHTML = '';
                
                const filteredProducts = filter === 'all' 
                    ? products 
                    : products.filter(product => product.category === filter);
                
                filteredProducts.forEach(product => {
                    const productCard = document.createElement('div');
                    productCard.className = 'product-card';
                    productCard.setAttribute('data-category', product.category);
                    
                    const statusClass = product.status === 'down' ? 'price-down' : 'price-up';
                    const statusTag = product.status === 'down' ? 'down' : 'up';
                    const statusText = product.status === 'down' ? 'TURUN' : 'TETAP';
                    
                    productCard.innerHTML = `
                        <div class="product-image">
                            <i class="fas ${product.category === 'coklat' ? 'fa-cookie-bite' : product.category === 'kue' ? 'fa-birthday-cake' : 'fa-donut'}"></i>
                        </div>
                        <div class="product-content">
                            <h3 class="product-title">${product.name}</h3>
                            <p class="product-description">${product.description}</p>
                            <div class="product-price">
                                <span class="price ${statusClass}">${product.price}</span>
                                <span class="price-tag ${statusTag}">${statusText}</span>
                            </div>
                            <a href="https://wa.link/8aa2m5?text=Halo,%20saya%20ingin%20memesan%20${encodeURIComponent(product.name)}" 
                               class="btn btn-primary" 
                               style="margin-top: 15px; width: 100%;" 
                               target="_blank">
                                <i class="fab fa-whatsapp"></i> Pesan Sekarang
                            </a>
                        </div>
                    `;
                    
                    productGrid.appendChild(productCard);
                });
            }
            
            // Initial render
            renderProducts();
            
            // Filter functionality
            document.querySelectorAll('.filter-btn').forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    document.querySelectorAll('.filter-btn').forEach(btn => {
                        btn.classList.remove('active');
                    });
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get filter value
                    const filter = this.getAttribute('data-filter');
                    
                    // Render filtered products
                    renderProducts(filter);
                });
            });
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });
            
            // Active nav link on scroll
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', function() {
                let current = '';
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    
                    if (scrollY >= (sectionTop - 100)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active');
                    }
                });
            });
        });
