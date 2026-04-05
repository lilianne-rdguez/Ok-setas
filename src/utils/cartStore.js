export function getCart() {
    if (typeof window === 'undefined') return [];
    try {
        const cart = localStorage.getItem('growtrades_cart');
        return cart ? JSON.parse(cart) : [];
    } catch {
        return [];
    }
}

export function saveCart(cart) {
    if (typeof window === 'undefined') return;
    localStorage.setItem('growtrades_cart', JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

export function addToCart(product, quantity = 1) {
    const cart = getCart();
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
    saveCart(cart);
}

export function updateQuantity(id, quantity) {
    let cart = getCart();
    const existing = cart.find(item => item.id === id);
    if (existing) {
        if (quantity <= 0) {
            cart = cart.filter(item => item.id !== id);
        } else {
            existing.quantity = quantity;
        }
        saveCart(cart);
    }
}

export function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

export function getCartTotal() {
    const cart = getCart();
    return cart.reduce((total, item) => {
        // Asume precio como "21,50 €"
        const priceStr = item.price.replace(',', '.').replace(/[^\d.-]/g, '');
        const priceNum = parseFloat(priceStr);
        return total + (priceNum * item.quantity);
    }, 0);
}
