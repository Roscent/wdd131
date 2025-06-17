class ArtGallery {
    constructor() {
        this.artData = [];
        this.artistData = [];
        this.cart = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    async init() {
        await this.loadArtData();
        await this.loadArtistData();
        this.renderGallery();
        this.renderFeaturedArtists();
        this.setupEventListeners();
        this.updateCartCount();
    }

    async loadArtData() {
        try {
            this.artData = [
                {
                    id: 1,
                    title: "Sunset Dreams",
                    artist: "Roscent",
                    artistId: 101,
                    price: 249.99,
                    image: "images/Roscent.jpg",
                    description: "A beautiful oil painting capturing the essence of sunset over mountains.",
                    category: "painting",
                    dimensions: "24 × 36 inches",
                    medium: "Oil on canvas",
                    year: 2023
                },
                {
                    id: 2,
                    title: "Digital Waves",
                    artist: "Alex Johnson",
                    artistId: 102,
                    price: 199.99,
                    image: "images/Bird-Photograph.webp",
                    description: "Digital art piece showcasing abstract wave patterns.",
                    category: "digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2023
                },
                {
                    id: 3,
                    title: "Africa Tribal Mark Painting",
                    artist: "Flora John",
                    artistId: 103,
                    price: 399.99,
                    image: "images/Africa-Tribal-Mark-Painting.webp",
                    description: "Digital art piece showcasing Africa Tribe.",
                    category: "painting",
                    dimensions: "23 × 23 inches",
                    medium: "Digital art",
                    year: 2023
                },
                {
                    id: 4,
                    title: "African-Woman-Painting",
                    artist: "Favor Chinson",
                    artistId: 104,
                    price: 300.99,
                    image: "images/African-Woman-Painting.webp",
                    description: "Digital art piece showcasing Africa.",
                    category: "painting",
                    dimensions: "15 × 24 inches",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 5,
                    title: "Chatsworth house Sculpture",
                    artist: "Chatsworth house",
                    artistId: 105,
                    price: 100.99,
                    image: "images/Chatsworth-house-Sculpture.jpeg",
                    description: "Digital Sculpture art piece patterns.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2022
                },
                {
                    id: 6,
                    title: "Digital Art",
                    artist: "John Thompson",
                    artistId: 106,
                    price: 90.99,
                    image: "images/Digital-Art.webp",
                    description: "Digital art piece showcasing wave patterns.",
                    category: "Digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 7,
                    title: "Explore Photograph",
                    artist: "Felix Shawn",
                    artistId: 107,
                    price: 60.99,
                    image: "images/explore-Photograph.jpeg",
                    description: "Digital Photograph art piece.",
                    category: "Photograph",
                    dimensions: "20 × 25 inches",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 8,
                    title: "Flow Photograph",
                    artist: "Femi Shina",
                    artistId: 108,
                    price: 250.99,
                    image: "images/flow-Photograph.jpeg",
                    description: "Amazing art piece.",
                    category: "Photograph",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2025
                },
                {
                    id: 9,
                    title: "Mike Sculpture",
                    artist: "Mike Francis",
                    artistId: 109,
                    price: 130.50,
                    image: "images/Mike-Sculpture.jpeg",
                    description: "Abstract Digital art piece.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 10,
                    title: "MuseeGranet Sculpture",
                    artist: "Grante Salem",
                    artistId: 110,
                    price: 90.99,
                    image: "images/MuseeGranetSculpture.jpeg",
                    description: "Sculpture art piece.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 11,
                    title: "StockCake Sculpture",
                    artist: "Stock Cake",
                    artistId: 111,
                    price: 255.99,
                    image: "images/StockCakeSculpture.jpeg",
                    description: "Sculpture abstract patterns.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 12,
                    title: "The Guardian Sculpture",
                    artist: "The Guardian",
                    artistId: 112,
                    price: 100.99,
                    image: "images/TheGuardianSculpture.jpeg",
                    description: "Digital Guardian art piece.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 13,
                    title: "the view Digital Art",
                    artist: "Vera Daniels",
                    artistId: 113,
                    price: 80.99,
                    image: "images/theviewDigitalArt.jpeg",
                    description: "Digital abstract wave patterns.",
                    category: "Digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 14,
                    title: "view Digital Art",
                    artist: "Vera Daniels",
                    artistId: 114,
                    price: 70.80,
                    image: "images/viewDigitalArt.jpeg",
                    description: "Abstract Art Patterns.",
                    category: "Digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                }
            ];
        } catch (error) {
            console.error("Error loading art data:", error);
        }
    }

    async loadArtistData() {
        try {
            // In a real app, this would fetch from an API
            this.artistData = [
                {
                    id: 1,
                    title: "Sunset Dreams",
                    artist: "Roscent",
                    artistId: 101,
                    price: 249.99,
                    image: "images/Roscent.jpg",
                    description: "A beautiful oil painting capturing the essence of sunset over mountains.",
                    category: "painting",
                    dimensions: "24 × 36 inches",
                    medium: "Oil on canvas",
                    year: 2023
                },
                {
                    id: 2,
                    title: "Digital Waves",
                    artist: "Alex Johnson",
                    artistId: 102,
                    price: 199.99,
                    image: "images/Bird-Photograph.webp",
                    description: "Digital art piece showcasing abstract wave patterns.",
                    category: "digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2023
                },
                {
                    id: 3,
                    title: "Africa Tribal Mark Painting",
                    artist: "Flora John",
                    artistId: 103,
                    price: 399.99,
                    image: "images/Africa-Tribal-Mark-Painting.webp",
                    description: "Digital art piece showcasing Africa Tribe.",
                    category: "painting",
                    dimensions: "23 × 23 inches",
                    medium: "Digital art",
                    year: 2023
                },
                {
                    id: 4,
                    title: "African-Woman-Painting",
                    artist: "Favor Chinson",
                    artistId: 104,
                    price: 300.99,
                    image: "images/African-Woman-Painting.webp",
                    description: "Digital art piece showcasing Africa.",
                    category: "painting",
                    dimensions: "15 × 24 inches",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 5,
                    title: "Chatsworth house Sculpture",
                    artist: "Chatsworth house",
                    artistId: 105,
                    price: 100.99,
                    image: "images/Chatsworth-house-Sculpture.jpeg",
                    description: "Digital Sculpture art piece patterns.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2022
                },
                {
                    id: 6,
                    title: "Digital Art",
                    artist: "John Thompson",
                    artistId: 106,
                    price: 90.99,
                    image: "images/Digital-Art.webp",
                    description: "Digital art piece showcasing wave patterns.",
                    category: "Digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 7,
                    title: "Explore Photograph",
                    artist: "Felix Shawn",
                    artistId: 107,
                    price: 60.99,
                    image: "images/explore-Photograph.jpeg",
                    description: "Digital Photograph art piece.",
                    category: "Photograph",
                    dimensions: "20 × 25 inches",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 8,
                    title: "Flow Photograph",
                    artist: "Femi Shina",
                    artistId: 108,
                    price: 250.99,
                    image: "images/flow-Photograph.jpeg",
                    description: "Amazing art piece.",
                    category: "Photograph",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2025
                },
                {
                    id: 9,
                    title: "Mike Sculpture",
                    artist: "Mike Francis",
                    artistId: 109,
                    price: 130.50,
                    image: "images/Mike-Sculpture.jpeg",
                    description: "Abstract Digital art piece.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 10,
                    title: "MuseeGranet Sculpture",
                    artist: "Grante Salem",
                    artistId: 110,
                    price: 90.99,
                    image: "images/MuseeGranetSculpture.jpeg",
                    description: "Sculpture art piece.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 11,
                    title: "StockCake Sculpture",
                    artist: "Stock Cake",
                    artistId: 111,
                    price: 255.99,
                    image: "images/StockCakeSculpture.jpeg",
                    description: "Sculpture abstract patterns.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 12,
                    title: "The Guardian Sculpture",
                    artist: "The Guardian",
                    artistId: 112,
                    price: 100.99,
                    image: "images/TheGuardianSculpture.jpeg",
                    description: "Digital Guardian art piece.",
                    category: "Sculpture",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 13,
                    title: "the view Digital Art",
                    artist: "Vera Daniels",
                    artistId: 113,
                    price: 80.99,
                    image: "images/theviewDigitalArt.jpeg",
                    description: "Digital abstract wave patterns.",
                    category: "Digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                },
                {
                    id: 14,
                    title: "view Digital Art",
                    artist: "Vera Daniels",
                    artistId: 114,
                    price: 70.80,
                    image: "images/viewDigitalArt.jpeg",
                    description: "Abstract Art Patterns.",
                    category: "Digital Art",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2024
                }
            ];
        } catch (error) {
            console.error("Error loading artist data:", error);
        }
    }

    renderGallery() {
        const artGrid = document.getElementById('featured-art');
        if (!artGrid) return;

        artGrid.innerHTML = this.artData.map(art => `
            <div class="art-item" data-id="${art.id}">
                <img src="${art.image}" alt="${art.title}" class="art-image" 
                     data-title="${art.title}" 
                     data-artist="${art.artist}"
                     data-description="${art.description}">
                <div class="art-details">
                    <h3>${art.title}</h3>
                    <p>by ${art.artist}</p>
                    <p class="price">#${art.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${art.id}">Add to Cart</button>
                    <button class="btn view-details" data-id="${art.id}">View Details</button>
                </div>
            </div>
        `).join('');
    }

    renderFeaturedArtists() {
        const artistGrid = document.querySelector('.artist-grid');
        if (!artistGrid) return;

        artistGrid.innerHTML = this.artistData.slice(0, 4).map(artist => `
            <div class="artist-card">
                <img src="${artist.image}" alt="${artist.name}" class="artist-image">
                <div class="artist-info">
                    <h3>${artist.name}</h3>
                    <p class="specialty">${artist.specialty}</p>
                    <a href="gallery.html?artist=${artist.id}" class="btn btn-outline">View Artworks</a>
                </div>
            </div>
        `).join('');
    }

    setupEventListeners() {
        document.querySelectorAll('.art-image').forEach(img => {
            img.addEventListener('click', (e) => this.showImageModal(e.target));
        });

        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.addToCart(id);
            });
        });

        document.querySelectorAll('.view-details').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.showArtDetails(id);
            });
        });
    }

    showImageModal(imgElement) {
        const artItem = this.artData.find(item => item.title === imgElement.alt);
        if (!artItem) return;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <img src="${imgElement.src}" alt="${imgElement.alt}" style="max-width: 100%;">
                <div class="image-details">
                    <h3>${artItem.title}</h3>
                    <p><strong>Artist:</strong> ${artItem.artist}</p>
                    <p><strong>Price:</strong> #${artItem.price.toFixed(2)}</p>
                    <p><strong>Medium:</strong> ${artItem.medium}</p>
                    <p><strong>Dimensions:</strong> ${artItem.dimensions}</p>
                    <p><strong>Year:</strong> ${artItem.year}</p>
                    <p>${artItem.description}</p>
                    <button class="btn btn-primary add-to-cart" data-id="${artItem.id}">Add to Cart</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'block';

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.add-to-cart').addEventListener('click', () => {
            this.addToCart(artItem.id);
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    addToCart(artId) {
        const artItem = this.artData.find(item => item.id === artId);
        if (!artItem) return;

        const existingItem = this.cart.find(item => item.id === artId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.cart.push({ ...artItem, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(this.cart));
        this.updateCartCount();
        this.showNotification(`${artItem.title} added to cart!`);
    }

    updateCartCount() {
        const cartCountElements = document.querySelectorAll('#cart-count, #cart-link span');
        cartCountElements.forEach(element => {
            const count = this.cart.reduce((total, item) => total + item.quantity, 0);
            element.textContent = count;
        });
    }

    showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('fade-out');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    showArtDetails(artId) {
        const artItem = this.artData.find(item => item.id === artId);
        if (!artItem) return;

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${artItem.title}</h2>
                <p><strong>Artist:</strong> ${artItem.artist}</p>
                <p><strong>Price:</strong> #${artItem.price.toFixed(2)}</p>
                <p><strong>Medium:</strong> ${artItem.medium}</p>
                <p><strong>Dimensions:</strong> ${artItem.dimensions}</p>
                <p><strong>Year:</strong> ${artItem.year}</p>
                <p><strong>Description:</strong> ${artItem.description}</p>
                <button class="btn btn-primary add-to-cart" data-id="${artItem.id}">Add to Cart</button>
            </div>
        `;

        document.body.appendChild(modal);
        modal.style.display = 'block';

        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.add-to-cart').addEventListener('click', () => {
            this.addToCart(artItem.id);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const gallery = new ArtGallery();

    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (toggleButton && nav) {
        toggleButton.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});