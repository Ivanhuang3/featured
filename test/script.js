// 定義語言切換函數，接受語言參數（zh 或 en）
function switchLanguage(lang) {
    const translations = {
        zh: {
            title: '蔬果肉鋪',
            home: '首頁',
            products: '產品',
            about: '關於我們',
            contact: '聯繫我們',
            heroTitle: '蔬果與肉類的完美融合',
            heroText: '將蔬果肉鋪的美味傳遞至全世界',
            productsTitle: '產品',
            productVegetable: '蔬果',
            productMeat: '肉類',
            addToCart: '加入購物車',
            aboutTitle: '關於我們',
            aboutText: '蔬果肉鋪致力於提供最新鮮、最優質的蔬果與肉類產品。我們與當地農民和供應商合作，確保每一件商品都符合高標準的新鮮度和品質。我們的使命是將健康與美味帶到您的餐桌，讓每一位顧客都能享受到大自然的恩賜。',
            contactTitle: '聯繫我們',
            contactNameLabel: '姓名',
            contactEmailLabel: '電子郵件',
            contactMessageLabel: '留言',
            contactSubmit: '送出',
            cartTitle: '購物車',
            clearCart: '清空購物車',
            checkout: '結帳',
            checkoutTitle: '結帳',
            checkoutNameLabel: '姓名',
            checkoutPhoneLabel: '電話',
            checkoutAddressLabel: '配送地址',
            checkoutPaymentLabel: '支付方式',
            checkoutSubmit: '確認訂單',
            contactInfo: '合作詢問: saucyking3@gmail.com',
            copyright: '© 2025 蔬果肉鋪'
        },
        en: {
            title: 'Vegetable & Meat Shop',
            home: 'Home',
            products: 'Products',
            about: 'About Us',
            contact: 'Contact',
            heroTitle: 'The Perfect Fusion of Vegetables and Meat',
            heroText: 'Bringing the Deliciousness of Vegetable & Meat Shop to the World',
            productsTitle: 'Products',
            productVegetable: 'Vegetables',
            productMeat: 'Meat',
            addToCart: 'Add to Cart',
            aboutTitle: 'About Us',
            aboutText: 'Vegetable & Meat Shop is dedicated to providing the freshest and highest-quality vegetables and meat products. We partner with local farmers and suppliers to ensure every item meets our high standards of freshness and quality. Our mission is to bring health and deliciousness to your table, allowing every customer to enjoy nature’s finest offerings.',
            contactTitle: 'Contact Us',
            contactNameLabel: 'Name',
            contactEmailLabel: 'Email',
            contactMessageLabel: 'Message',
            contactSubmit: 'Submit',
            cartTitle: 'Shopping Cart',
            clearCart: 'Clear Cart',
            checkout: 'Checkout',
            checkoutTitle: 'Checkout',
            checkoutNameLabel: 'Name',
            checkoutPhoneLabel: 'Phone',
            checkoutAddressLabel: 'Delivery Address',
            checkoutPaymentLabel: 'Payment Method',
            checkoutSubmit: 'Confirm Order',
            contactInfo: 'Contact: saucyking3@gmail.com',
            copyright: '© 2025 Vegetable & Meat Shop'
        }
    };

    document.title = translations[lang].title;
    document.querySelector('.navbar-brand').textContent = translations[lang].title;
    document.querySelectorAll('.nav-link')[0].textContent = translations[lang].home;
    document.querySelectorAll('.nav-link')[1].textContent = translations[lang].products;
    document.querySelectorAll('.nav-link')[2].textContent = translations[lang].about;
    document.querySelectorAll('.nav-link')[3].textContent = translations[lang].contact;

    const heroTitles = document.querySelectorAll('#hero-title');
    const heroTexts = document.querySelectorAll('#hero-text');
    if (heroTitles.length) heroTitles.forEach(title => title.textContent = translations[lang].heroTitle);
    if (heroTexts.length) heroTexts.forEach(text => text.textContent = translations[lang].heroText);

    const productsTitle = document.getElementById('products-title');
    if (productsTitle) productsTitle.textContent = translations[lang].productsTitle;
    const productVegetable = document.getElementById('product-vegetable');
    const productMeat = document.getElementById('product-meat');
    if (productVegetable) productVegetable.textContent = translations[lang].productVegetable;
    if (productMeat) productMeat.textContent = translations[lang].productMeat;

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    if (addToCartButtons.length) addToCartButtons.forEach(button => button.textContent = translations[lang].addToCart);

    const aboutTitle = document.getElementById('about-title');
    const aboutText = document.getElementById('about-text');
    if (aboutTitle) aboutTitle.textContent = translations[lang].aboutTitle;
    if (aboutText) aboutText.textContent = translations[lang].aboutText;

    const contactTitle = document.getElementById('contact-title');
    const contactNameLabel = document.getElementById('contact-name-label');
    const contactEmailLabel = document.getElementById('contact-email-label');
    const contactMessageLabel = document.getElementById('contact-message-label');
    const contactSubmit = document.getElementById('contact-submit');
    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;
    if (contactNameLabel) contactNameLabel.textContent = translations[lang].contactNameLabel;
    if (contactEmailLabel) contactEmailLabel.textContent = translations[lang].contactEmailLabel;
    if (contactMessageLabel) contactMessageLabel.textContent = translations[lang].contactMessageLabel;
    if (contactSubmit) contactSubmit.textContent = translations[lang].contactSubmit;

    const cartTitle = document.querySelector('h2.text-center');
    if (cartTitle && document.URL.includes('cart.html')) cartTitle.textContent = translations[lang].cartTitle;
    const clearCartButton = document.querySelector('button.btn-primary');
    if (clearCartButton) clearCartButton.textContent = translations[lang].clearCart;
    const checkoutButton = document.querySelector('a.btn-success');
    if (checkoutButton && document.URL.includes('cart.html')) checkoutButton.textContent = translations[lang].checkout;

    const checkoutTitle = document.getElementById('checkout-title');
    const checkoutNameLabel = document.getElementById('checkout-name-label');
    const checkoutPhoneLabel = document.getElementById('checkout-phone-label');
    const checkoutAddressLabel = document.getElementById('checkout-address-label');
    const checkoutPaymentLabel = document.getElementById('checkout-payment-label');
    const checkoutSubmit = document.getElementById('checkout-submit');
    if (checkoutTitle) checkoutTitle.textContent = translations[lang].checkoutTitle;
    if (checkoutNameLabel) checkoutNameLabel.textContent = translations[lang].checkoutNameLabel;
    if (checkoutPhoneLabel) checkoutPhoneLabel.textContent = translations[lang].checkoutPhoneLabel;
    if (checkoutAddressLabel) checkoutAddressLabel.textContent = translations[lang].checkoutAddressLabel;
    if (checkoutPaymentLabel) checkoutPaymentLabel.textContent = translations[lang].checkoutPaymentLabel;
    if (checkoutSubmit) checkoutSubmit.textContent = translations[lang].checkoutSubmit;

    document.getElementById('contact-info').textContent = translations[lang].contactInfo;
    document.getElementById('copyright').textContent = translations[lang].copyright;
}

// 初始化購物車
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 更新購物車計數
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    }
}

// 添加產品到購物車
function addToCart(productId, name, price, image) {
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: productId, name, price: parseInt(price), quantity: 1, image });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert('已將產品添加到購物車！');
}

// 顯示購物車內容（僅在 cart.html 中使用）
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    if (cartItemsContainer && cartTotal) {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.quantity;
            const itemElement = document.createElement('div');
            itemElement.classList.add('col');
            itemElement.innerHTML = `
                <div class="card h-100">
                    <img src="${item.image}" class="card-img-top" alt="${item.name}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">價格: NT$${item.price}</p>
                        <p class="card-text">數量: 
                            <button class="btn btn-sm btn-secondary" onclick="updateQuantity('${item.id}', -1)">-</button>
                            ${item.quantity}
                            <button class="btn btn-sm btn-secondary" onclick="updateQuantity('${item.id}', 1)">+</button>
                        </p>
                        <button class="btn btn-danger" onclick="removeFromCart('${item.id}')">移除</button>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(itemElement);
        });
        cartTotal.textContent = `NT$${total}`;
    }
}

// 更新結帳頁面的總金額（僅在 checkout.html 中使用）
function displayCheckoutTotal() {
    const checkoutTotal = document.getElementById('checkout-total');
    if (checkoutTotal) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        checkoutTotal.textContent = `NT$${total}`;
    }
}

// 更新產品數量
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCart();
            displayCheckoutTotal();
        }
    }
}

// 移除產品
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    displayCheckoutTotal();
}

// 清空購物車
function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
    displayCheckoutTotal();
}

// 處理結帳表單提交
async function handleCheckoutSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('checkout-name').value;
    const phone = document.getElementById('checkout-phone').value;
    const address = document.getElementById('checkout-address').value;
    const payment = document.getElementById('checkout-payment').value;

    if (cart.length === 0) {
        alert('購物車是空的，請先添加產品！');
        return;
    }

    const order = {
        id: Date.now(),
        customer: { name, phone, address },
        paymentMethod: payment,
        items: cart,
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });

        if (response.ok) {
            clearCart();
            alert('訂單已成功提交！感謝您的購買！');
            window.location.href = 'index.html';
        } else {
            throw new Error('提交訂單失敗');
        }
    } catch (error) {
        console.error('錯誤:', error);
        alert('提交訂單時發生錯誤，請稍後再試！');
    }
}

// 處理聯繫表單提交
async function handleContactSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const contact = {
        id: Date.now(),
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };

    try {
        const response = await fetch('http://localhost:3000/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        });

        if (response.ok) {
            alert('留言已成功提交！我們會盡快回覆您！');
            document.getElementById('contact-form').reset(); // 清空表單
        } else {
            throw new Error('提交留言失敗');
        }
    } catch (error) {
        console.error('錯誤:', error);
        alert('提交留言時發生錯誤，請稍後再試！');
    }
}

// 頁面加載時初始化
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    displayCart();
    displayCheckoutTotal();

    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    if (addToCartButtons.length) {
        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                const productId = button.getAttribute('data-product-id');
                const name = button.getAttribute('data-name');
                const price = button.getAttribute('data-price');
                const image = button.getAttribute('data-image');
                addToCart(productId, name, price, image);
            });
        });
    }

    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckoutSubmit);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
});