// Art Gallery Application
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
            // In a real app, this would fetch from an API
            this.artData = [
                {
                    id: 1,
                    title: "Sunset Dreams",
                    artist: "Maria Chen",
                    artistId: 101,
                    price: 249.99,
                    image: "images/sunset-dreams.jpg",
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
                    image: "images/digital-waves.jpg",
                    description: "Digital art piece showcasing abstract wave patterns.",
                    category: "digital",
                    dimensions: "Digital file",
                    medium: "Digital art",
                    year: 2023
                }
                // More artworks...
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
                    id: 101,
                    name: "Maria Chen",
                    specialty: "Oil Paintings",
                    bio: "Contemporary artist specializing in landscape oil paintings.",
                    image: "images/artists/maria-chen.jpg"
                },
                {
                    id: 102,
                    name: "Alex Johnson",
                    specialty: "Digital Art",
                    bio: "Digital artist creating abstract and surreal compositions.",
                    image: "images/artists/alex-johnson.jpg"
                }
                // More artists...
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
                    <p class="price">$${art.price.toFixed(2)}</p>
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
        // Image zoom
        document.querySelectorAll('.art-image').forEach(img => {
            img.addEventListener('click', (e) => this.showImageModal(e.target));
        });

        // Add to cart
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const id = parseInt(e.target.dataset.id);
                this.addToCart(id);
            });
        });

        // View details
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
                    <p><strong>Price:</strong> $${artItem.price.toFixed(2)}</p>
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
                <p><strong>Price:</strong> $${artItem.price.toFixed(2)}</p>
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

// Initialize the gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const gallery = new ArtGallery();

    // Mobile menu toggle
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    if (toggleButton && nav) {
        toggleButton.addEventListener('click', function () {
            nav.classList.toggle('active');
        });
    }
});