// Sample art data (would normally come from backend/API)
const artData = [
    {
        id: 1,
        title: "Sunset Dreams",
        artist: "Maria Chen",
        price: 249.99,
        image: "images/Roscent.jpg",
        category: "painting"
    },
    {
        id: 2,
        title: "Digital Waves",
        artist: "Alex Johnson",
        price: 199.99,
        image: "images/costaa.webp",
        category: "digital"
    }
    // More items...
];

// DOM elements
const artGrid = document.getElementById('featured-art');
const cartCount = document.getElementById('cart-count');

// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartCount();

// Display art items
function displayArtItems(items) {
    artGrid.innerHTML = '';

    items.forEach(item => {
        const artItem = document.createElement('div');
        artItem.className = 'art-item';
        artItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="art-image">
            <div class="art-details">
                <h3>${item.title}</h3>
                <p>by ${item.artist}</p>
                <p>$${item.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${item.id}">Add to Cart</button>
                <button class="view-details" data-id="${item.id}">View Details</button>
            </div>
        `;
        artGrid.appendChild(artItem);
    });

    // Add event listeners
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', addToCart);
    });

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', viewDetails);
    });
}

// Add to cart function
function addToCart(e) {
    const id = parseInt(e.target.getAttribute('data-id'));
    const item = artData.find(item => item.id === id);

    const existingItem = cart.find(cartItem => cartItem.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${item.title} added to cart!`);
}

// Update cart count
function updateCartCount() {
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = count;
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// View details
function viewDetails(e) {
    const id = parseInt(e.target.getAttribute('data-id'));
    // In a real app, this would navigate to a details page
    console.log(`Viewing details for item ${id}`);
}

// Initial display
displayArtItems(artData);


function initImageZoom() {
    const images = document.querySelectorAll('.art-image');

    images.forEach(image => {
        image.addEventListener('click', () => {
            const modal = document.createElement('div');
            modal.className = 'image-modal';
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <img src="${image.src.replace('thumbnail', 'large')}" alt="${image.alt}">
                    <div class="image-details">
                        <h3>${image.dataset.title}</h3>
                        <p>Artist: ${image.dataset.artist}</p>
                        <p>${image.dataset.description}</p>
                    </div>
                </div>
            `;

            document.body.appendChild(modal);

            modal.querySelector('.close-modal').addEventListener('click', () => {
                modal.remove();
            });
        });
    });
}



// Shopping cart functionality
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        // Implementation
    }

    removeItem(itemId) {
        // Implementation
    }

    calculateTotal() {
        // Implementation
    }

    checkout() {
        // Implementation
    }
}


// User registration
document.getElementById('register-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        userType: e.target.userType.value // 'guest' or 'artist'
    };

    try {
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect based on user type
            if (formData.userType === 'artist') {
                window.location.href = '/artist-dashboard';
            } else {
                window.location.href = '/gallery';
            }
        } else {
            showError(data.message);
        }
    } catch (error) {
        showError('Registration failed. Please try again.');
    }
});