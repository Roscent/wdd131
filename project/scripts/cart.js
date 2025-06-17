class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.init();
    }

    init() {
        this.renderCartItems();
        this.setupEventListeners();
        this.updateSummary();
    }

    renderCartItems() {
        const cartItemsContainer = document.getElementById('cart-items');
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.title}</h3>
                    <p>by ${item.artist}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button class="btn btn-quantity decrease">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="btn btn-quantity increase">+</button>
                    </div>
                </div>
                <button class="btn btn-remove">Remove</button>
            </div>
        `).join('');
    }

    setupEventListeners() {
        document.querySelectorAll('.increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
                this.updateQuantity(itemId, 1);
            });
        });

        document.querySelectorAll('.decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
                const item = this.items.find(i => i.id === itemId);
                if (item.quantity > 1) {
                    this.updateQuantity(itemId, -1);
                }
            });
        });

        document.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = parseInt(e.target.closest('.cart-item').dataset.id);
                this.removeItem(itemId);
            });
        });

        const checkoutBtn = document.getElementById('checkout-btn');
        if (checkoutBtn) {
            checkoutBtn.addEventListener('click', () => this.checkout());
        }
    }

    updateQuantity(itemId, change) {
        const item = this.items.find(i => i.id === itemId);
        if (item) {
            item.quantity += change;
            this.saveToStorage();
            this.renderCartItems();
            this.updateSummary();
        }
    }

    removeItem(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
        this.saveToStorage();
        this.renderCartItems();
        this.updateSummary();
        this.updateCartCount();
    }

    updateSummary() {
        const subtotalElement = document.getElementById('subtotal');
        const taxElement = document.getElementById('tax');
        const totalElement = document.getElementById('total');

        if (subtotalElement && taxElement && totalElement) {
            const subtotal = this.calculateSubtotal();
            const tax = subtotal * 0.1;
            const total = subtotal + tax;

            subtotalElement.textContent = `#${subtotal.toFixed(2)}`;
            taxElement.textContent = `#${tax.toFixed(2)}`;
            totalElement.textContent = `#${total.toFixed(2)}`;
        }
    }

    calculateSubtotal() {
        return this.items.reduce((total, item) => {
            return total + (item.price * item.quantity);
        }, 0);
    }

    updateCartCount() {
        const count = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('#cart-count, #cart-link span');
        cartCountElements.forEach(element => {
            element.textContent = count;
        });
    }

    saveToStorage() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    checkout() {
        localStorage.setItem('lastOrder', JSON.stringify(this.items));
        this.items = [];
        this.saveToStorage();
        this.updateCartCount();
        window.location.href = 'thankyou.html';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart-items')) {
        new ShoppingCart();
    }
});