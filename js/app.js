"use strict";

/* ==========================================================
   PRODUCT DATA
========================================================== */

const products = [
    {
        id: 1,
        name: "Crispy Chicken Bites",
        category: "Starters",
        price: 690,
        description: "Golden chicken bites served with our signature dip.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=80",
        popular: true
    },

    {
        id: 2,
        name: "Loaded Fries",
        category: "Starters",
        price: 590,
        description: "Crispy fries layered with cheese, herbs and house sauce.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 3,
        name: "Garlic Bread",
        category: "Starters",
        price: 450,
        description: "Toasted artisan bread with garlic butter and herbs.",
        image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 4,
        name: "Truffle Mushroom Pasta",
        category: "Main Course",
        price: 1290,
        description: "Creamy pasta with mushrooms, parmesan and truffle oil.",
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=700&q=80",
        popular: true
    },

    {
        id: 5,
        name: "Grilled Herb Chicken",
        category: "Main Course",
        price: 1490,
        description: "Juicy grilled chicken with herbs, vegetables and jus.",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
        popular: true
    },

    {
        id: 6,
        name: "Creamy Alfredo Pasta",
        category: "Main Course",
        price: 1190,
        description: "Silky parmesan cream sauce tossed with fresh pasta.",
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 7,
        name: "Classic Beef Burger",
        category: "Burgers",
        price: 990,
        description: "Grilled beef patty, cheddar, lettuce and house sauce.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
        popular: true
    },

    {
        id: 8,
        name: "Smoky BBQ Burger",
        category: "Burgers",
        price: 1090,
        description: "Beef patty with smoked cheddar, BBQ sauce and onions.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 9,
        name: "Margherita Pizza",
        category: "Pizza",
        price: 1090,
        description: "Tomato, fresh mozzarella, basil and extra virgin olive oil.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80",
        popular: true
    },

    {
        id: 10,
        name: "Pepperoni Pizza",
        category: "Pizza",
        price: 1390,
        description: "Classic tomato base, mozzarella and spicy pepperoni.",
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 11,
        name: "Chicken Supreme Pizza",
        category: "Pizza",
        price: 1490,
        description: "Chicken, peppers, onions, mushrooms and mozzarella.",
        image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 12,
        name: "Chocolate Lava Cake",
        category: "Desserts",
        price: 690,
        description: "Warm chocolate cake with a rich molten center.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80",
        popular: true
    },

    {
        id: 13,
        name: "Classic Cheesecake",
        category: "Desserts",
        price: 650,
        description: "Creamy baked cheesecake with a delicate biscuit base.",
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 14,
        name: "Fresh Lemonade",
        category: "Drinks",
        price: 390,
        description: "Freshly squeezed lemon with mint and chilled water.",
        image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f2e?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 15,
        name: "Iced Coffee",
        category: "Drinks",
        price: 490,
        description: "Smooth cold coffee served over ice with milk.",
        image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=700&q=80",
        popular: false
    },

    {
        id: 16,
        name: "Classic Cola",
        category: "Drinks",
        price: 250,
        description: "Chilled classic cola served with plenty of ice.",
        image: "https://images.unsplash.com/photo-1581636625402-29b2a704ef13?auto=format&fit=crop&w=700&q=80",
        popular: false
    }
];


/* ==========================================================
   CONSTANTS
========================================================== */

const STORAGE_KEY = "savore_cart";

const DELIVERY_FEE = 200;


/* ==========================================================
   APPLICATION STATE
========================================================== */

let cart = loadCart();

let activeCategory = "All";

let searchTerm = "";

let toastTimeout;


/* ==========================================================
   DOM REFERENCES
========================================================== */

const siteHeader = document.querySelector("#site-header");

const menuGrid = document.querySelector("#menu-grid");

const categoryFilters = document.querySelector("#category-filters");

const menuSearch = document.querySelector("#menu-search");

const clearSearchButton = document.querySelector("#clear-search");

const emptyMenuState = document.querySelector("#empty-menu-state");

const clearMenuStateButton = document.querySelector("#clear-menu-state");

const cartButton = document.querySelector("#cart-button");

const heroCartButton = document.querySelector("#hero-cart-button");

const mobileCartButton = document.querySelector("#mobile-cart-button");

const cartCount = document.querySelector("#cart-count");

const mobileCartCount = document.querySelector("#mobile-cart-count");

const cartDrawer = document.querySelector("#cart-drawer");

const cartOverlay = document.querySelector("#cart-overlay");

const closeCartButton = document.querySelector("#close-cart");

const cartContent = document.querySelector("#cart-content");

const cartFooter = document.querySelector("#cart-footer");

const cartSubtotal = document.querySelector("#cart-subtotal");

const cartDelivery = document.querySelector("#cart-delivery");

const cartTotal = document.querySelector("#cart-total");

const checkoutButton = document.querySelector("#checkout-button");

const continueShoppingButton = document.querySelector("#continue-shopping");

const checkoutModal = document.querySelector("#checkout-modal");

const checkoutOverlay = document.querySelector("#checkout-overlay");

const closeCheckoutButton = document.querySelector("#close-checkout");

const checkoutForm = document.querySelector("#checkout-form");

const checkoutItems = document.querySelector("#checkout-items");

const checkoutSubtotal = document.querySelector("#checkout-subtotal");

const checkoutDelivery = document.querySelector("#checkout-delivery");

const checkoutTotal = document.querySelector("#checkout-total");

const successModal = document.querySelector("#success-modal");

const successOverlay = document.querySelector("#success-overlay");

const closeSuccessButton = document.querySelector("#close-success");

const backToMenuButton = document.querySelector("#back-to-menu");

const successOrderId = document.querySelector("#success-order-id");

const successTotal = document.querySelector("#success-total");

const toast = document.querySelector("#toast");

const toastMessage = document.querySelector("#toast-message");

const menuToggle = document.querySelector("#menu-toggle");

const mobileNav = document.querySelector("#mobile-nav");


/* ==========================================================
   PRODUCT HELPERS
========================================================== */

function getProductById(id) {
    return products.find(product => product.id === Number(id));
}


function formatCurrency(amount) {
    return `Rs. ${Number(amount).toLocaleString("en-PK")}`;
}


/* ==========================================================
   CATEGORIES
========================================================== */

function getCategories() {
    const categories = products.map(product => product.category);

    return ["All", ...new Set(categories)];
}


function renderCategories() {
    categoryFilters.innerHTML = getCategories()
        .map(category => {
            const activeClass =
                category === activeCategory ? "active" : "";

            return `
                <button
                    class="category-button ${activeClass}"
                    type="button"
                    data-category="${category}"
                    aria-pressed="${category === activeCategory}"
                >
                    ${category}
                </button>
            `;
        })
        .join("");
}


/* ==========================================================
   PRODUCT FILTERING
========================================================== */

function getFilteredProducts() {

    return products.filter(product => {

        const categoryMatch =
            activeCategory === "All" ||
            product.category === activeCategory;

        const searchableText = `
            ${product.name}
            ${product.category}
            ${product.description}
        `.toLowerCase();

        const searchMatch =
            searchTerm === "" ||
            searchableText.includes(searchTerm.toLowerCase());

        return categoryMatch && searchMatch;
    });
}


/* ==========================================================
   PRODUCT RENDERING
========================================================== */

function renderProducts() {

    const filteredProducts = getFilteredProducts();

    if (filteredProducts.length === 0) {

        menuGrid.innerHTML = "";

        emptyMenuState.classList.remove("hidden");

        return;
    }

    emptyMenuState.classList.add("hidden");

    menuGrid.innerHTML = filteredProducts
        .map((product, index) => {

            const badge = product.popular
                ? `<span class="product-badge">Popular</span>`
                : "";

            return `
                <article
                    class="product-card"
                    style="animation-delay: ${index * 35}ms"
                >

                    <div class="product-image-wrapper">

                        ${badge}

                        <img
                            class="product-image"
                            src="${product.image}"
                            alt="${product.name}"
                            loading="lazy"
                        >

                    </div>


                    <div class="product-content">

                        <p class="product-category">
                            ${product.category}
                        </p>

                        <h3 class="product-name">
                            ${product.name}
                        </h3>

                        <p class="product-description">
                            ${product.description}
                        </p>


                        <div class="product-footer">

                            <strong class="product-price">
                                ${formatCurrency(product.price)}
                            </strong>

                            <button
                                class="add-to-cart"
                                type="button"
                                data-add-to-cart="${product.id}"
                                aria-label="Add ${product.name} to cart"
                            >
                                <span>+</span>
                                Add to Cart
                            </button>

                        </div>

                    </div>

                </article>
            `;
        })
        .join("");
}


/* ==========================================================
   SEARCH
========================================================== */

function handleSearch(event) {

    searchTerm = event.target.value.trim();

    clearSearchButton.classList.toggle(
        "visible",
        searchTerm.length > 0
    );

    renderProducts();
}


function clearSearch() {

    searchTerm = "";

    menuSearch.value = "";

    clearSearchButton.classList.remove("visible");

    renderProducts();
}


/* ==========================================================
   CART — LOCAL STORAGE
========================================================== */

function loadCart() {

    try {

        const savedCart =
            localStorage.getItem(STORAGE_KEY);

        if (!savedCart) {
            return [];
        }

        const parsedCart = JSON.parse(savedCart);

        if (!Array.isArray(parsedCart)) {
            return [];
        }

        return parsedCart.filter(item => {

            const product = getProductById(item.id);

            return (
                product &&
                Number.isInteger(item.quantity) &&
                item.quantity > 0
            );
        });

    } catch (error) {

        console.warn(
            "Could not load saved cart.",
            error
        );

        return [];
    }
}


function saveCart() {

    try {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(cart)
        );

    } catch (error) {

        console.warn(
            "Could not save cart.",
            error
        );
    }
}


/* ==========================================================
   CART CALCULATIONS
========================================================== */

function getCartItemCount() {

    return cart.reduce(
        (total, item) => total + item.quantity,
        0
    );
}


function getCartSubtotal() {

    return cart.reduce((total, item) => {

        const product = getProductById(item.id);

        if (!product) {
            return total;
        }

        return total + product.price * item.quantity;

    }, 0);
}


function getDeliveryFee() {

    return cart.length > 0
        ? DELIVERY_FEE
        : 0;
}


function getCartTotal() {

    return getCartSubtotal() + getDeliveryFee();
}


/* ==========================================================
   CART BADGE
========================================================== */

function updateCartCount(animate = false) {

    const count = getCartItemCount();

    cartCount.textContent = count;

    mobileCartCount.textContent = count;

    if (animate) {

        cartCount.classList.remove("bump");

        void cartCount.offsetWidth;

        cartCount.classList.add("bump");
    }
}


/* ==========================================================
   ADD TO CART
========================================================== */

function addToCart(productId) {

    const product = getProductById(productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find(
        item => item.id === product.id
    );

    if (existingItem) {

        existingItem.quantity += 1;

    } else {

        cart.push({
            id: product.id,
            quantity: 1
        });
    }

    saveCart();

    updateCartCount(true);

    renderCart();

    showToast("Added to your order ✓");
}


/* ==========================================================
   UPDATE QUANTITY
========================================================== */

function updateQuantity(productId, change) {

    const item = cart.find(
        cartItem => cartItem.id === Number(productId)
    );

    if (!item) {
        return;
    }

    item.quantity += change;

    if (item.quantity <= 0) {

        removeFromCart(productId);

        return;
    }

    saveCart();

    updateCartCount();

    renderCart();

    renderCheckoutSummary();
}


/* ==========================================================
   REMOVE ITEM
========================================================== */

function removeFromCart(productId) {

    const product = getProductById(productId);

    cart = cart.filter(
        item => item.id !== Number(productId)
    );

    saveCart();

    updateCartCount();

    renderCart();

    renderCheckoutSummary();

    if (product) {
        showToast(`${product.name} removed`);
    }
}


/* ==========================================================
   CLEAR CART
========================================================== */

function clearCart() {

    cart = [];

    saveCart();

    updateCartCount();

    renderCart();
}


/* ==========================================================
   CART RENDERING
========================================================== */

function renderCart() {

    if (cart.length === 0) {

        cartContent.innerHTML = `
            <div class="cart-empty">

                <div class="cart-empty-icon">
                    ♡
                </div>

                <h3>Your cart is waiting.</h3>

                <p>
                    Add something delicious from our menu
                    to get started.
                </p>

                <button
                    class="button button-primary"
                    type="button"
                    id="empty-cart-menu"
                >
                    Explore Menu
                </button>

            </div>
        `;

        cartFooter.style.display = "none";

        return;
    }

    cartFooter.style.display = "";

    cartContent.innerHTML = cart
        .map(item => {

            const product = getProductById(item.id);

            if (!product) {
                return "";
            }

            const itemTotal =
                product.price * item.quantity;

            return `
                <article class="cart-item">

                    <div class="cart-item-image">

                        <img
                            src="${product.image}"
                            alt="${product.name}"
                        >

                    </div>


                    <div class="cart-item-main">

                        <div class="cart-item-top">

                            <h3 class="cart-item-name">
                                ${product.name}
                            </h3>

                            <strong class="cart-item-price">
                                ${formatCurrency(itemTotal)}
                            </strong>

                        </div>


                        <div class="cart-item-controls">

                            <div class="quantity-controls">

                                <button
                                    class="quantity-button"
                                    type="button"
                                    data-decrease="${product.id}"
                                    aria-label="Decrease ${product.name} quantity"
                                >
                                    −
                                </button>

                                <span class="quantity-value">
                                    ${item.quantity}
                                </span>

                                <button
                                    class="quantity-button"
                                    type="button"
                                    data-increase="${product.id}"
                                    aria-label="Increase ${product.name} quantity"
                                >
                                    +
                                </button>

                            </div>

                            <button
                                class="remove-item"
                                type="button"
                                data-remove="${product.id}"
                            >
                                Remove
                            </button>

                        </div>

                    </div>

                </article>
            `;
        })
        .join("");


    cartSubtotal.textContent =
        formatCurrency(getCartSubtotal());

    cartDelivery.textContent =
        formatCurrency(getDeliveryFee());

    cartTotal.textContent =
        formatCurrency(getCartTotal());
}


/* ==========================================================
   CART DRAWER
========================================================== */

function openCart() {

    closeMobileMenu();

    renderCart();

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

    cartDrawer.setAttribute("aria-hidden", "false");

    cartOverlay.setAttribute("aria-hidden", "false");

    document.body.classList.add("no-scroll");
}


function closeCart() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

    cartDrawer.setAttribute("aria-hidden", "true");

    cartOverlay.setAttribute("aria-hidden", "true");

    document.body.classList.remove("no-scroll");
}


/* ==========================================================
   CHECKOUT
========================================================== */

function openCheckout() {

    if (cart.length === 0) {

        showToast("Your cart is empty");

        return;
    }

    closeCart();

    renderCheckoutSummary();

    clearValidationErrors();

    checkoutModal.classList.add("open");

    checkoutOverlay.classList.add("open");

    checkoutModal.setAttribute(
        "aria-hidden",
        "false"
    );

    checkoutOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("no-scroll");

    setTimeout(() => {

        document.querySelector("#full-name")?.focus();

    }, 250);
}


function closeCheckout() {

    checkoutModal.classList.remove("open");

    checkoutOverlay.classList.remove("open");

    checkoutModal.setAttribute(
        "aria-hidden",
        "true"
    );

    checkoutOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("no-scroll");
}


function renderCheckoutSummary() {

    checkoutItems.innerHTML = cart
        .map(item => {

            const product = getProductById(item.id);

            if (!product) {
                return "";
            }

            return `
                <div class="checkout-item">

                    <div class="checkout-item-info">

                        <strong>
                            ${product.name}
                        </strong>

                        <span>
                            Qty: ${item.quantity}
                        </span>

                    </div>

                    <strong class="checkout-item-price">
                        ${formatCurrency(
                            product.price * item.quantity
                        )}
                    </strong>

                </div>
            `;
        })
        .join("");

    checkoutSubtotal.textContent =
        formatCurrency(getCartSubtotal());

    checkoutDelivery.textContent =
        formatCurrency(getDeliveryFee());

    checkoutTotal.textContent =
        formatCurrency(getCartTotal());
}


/* ==========================================================
   FORM VALIDATION
========================================================== */

function setFieldError(fieldName, message) {

    const errorElement =
        document.querySelector(
            `[data-error-for="${fieldName}"]`
        );

    const field =
        document.querySelector(
            `[name="${fieldName}"]`
        );

    if (!errorElement || !field) {
        return;
    }

    errorElement.textContent = message;

    field
        .closest(".form-group")
        ?.classList.add("has-error");
}


function clearFieldError(fieldName) {

    const errorElement =
        document.querySelector(
            `[data-error-for="${fieldName}"]`
        );

    const field =
        document.querySelector(
            `[name="${fieldName}"]`
        );

    if (!errorElement || !field) {
        return;
    }

    errorElement.textContent = "";

    field
        .closest(".form-group")
        ?.classList.remove("has-error");
}


function clearValidationErrors() {

    [
        "fullName",
        "phone",
        "email",
        "address",
        "city"
    ].forEach(clearFieldError);
}


function validateCheckoutForm() {

    clearValidationErrors();

    const formData =
        new FormData(checkoutForm);

    const fullName =
        formData.get("fullName").trim();

    const phone =
        formData.get("phone").trim();

    const email =
        formData.get("email").trim();

    const address =
        formData.get("address").trim();

    const city =
        formData.get("city").trim();


    let isValid = true;


    if (fullName.length < 3) {

        setFieldError(
            "fullName",
            "Please enter your full name."
        );

        isValid = false;
    }


    const phonePattern =
        /^(?:\+92|0092|03)\d{9,10}$/;

    const normalizedPhone =
        phone.replace(/[\s-]/g, "");

    if (!phonePattern.test(normalizedPhone)) {

        setFieldError(
            "phone",
            "Enter a valid Pakistani phone number."
        );

        isValid = false;
    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        setFieldError(
            "email",
            "Please enter a valid email address."
        );

        isValid = false;
    }


    if (address.length < 10) {

        setFieldError(
            "address",
            "Please enter a more complete address."
        );

        isValid = false;
    }


    if (city.length < 2) {

        setFieldError(
            "city",
            "Please enter your city."
        );

        isValid = false;
    }


    return isValid;
}


/* ==========================================================
   ORDER CONFIRMATION
========================================================== */

function generateOrderId() {

    const randomNumber =
        Math.floor(
            10000 + Math.random() * 90000
        );

    return `#SVR-${randomNumber}`;
}


function placeOrder(event) {

    event.preventDefault();

    if (!validateCheckoutForm()) {
        return;
    }

    const customerName =
        document
            .querySelector("#full-name")
            .value
            .trim();

    const finalTotal = getCartTotal();

    const orderId = generateOrderId();

    successOrderId.textContent = orderId;

    successTotal.textContent =
        formatCurrency(finalTotal);

    checkoutForm.reset();

    clearValidationErrors();

    clearCart();

    closeCheckout();

    openSuccessModal();

    showToast(
        `Thank you, ${customerName.split(" ")[0]} ✓`
    );
}


/* ==========================================================
   SUCCESS MODAL
========================================================== */

function openSuccessModal() {

    successModal.classList.add("open");

    successOverlay.classList.add("open");

    successModal.setAttribute(
        "aria-hidden",
        "false"
    );

    successOverlay.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add("no-scroll");
}


function closeSuccessModal() {

    successModal.classList.remove("open");

    successOverlay.classList.remove("open");

    successModal.setAttribute(
        "aria-hidden",
        "true"
    );

    successOverlay.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove("no-scroll");
}


/* ==========================================================
   TOAST
========================================================== */

function showToast(message) {

    clearTimeout(toastTimeout);

    toastMessage.textContent = message;

    toast.classList.add("show");

    toastTimeout = setTimeout(() => {

        toast.classList.remove("show");

    }, 2600);
}


/* ==========================================================
   MOBILE NAVIGATION
========================================================== */

function openMobileMenu() {

    menuToggle.classList.add("active");

    mobileNav.classList.add("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );
}


function closeMobileMenu() {

    menuToggle.classList.remove("active");

    mobileNav.classList.remove("open");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );
}


function toggleMobileMenu() {

    const isOpen =
        mobileNav.classList.contains("open");

    if (isOpen) {
        closeMobileMenu();
    } else {
        openMobileMenu();
    }
}


/* ==========================================================
   EVENT DELEGATION — PRODUCTS
========================================================== */

menuGrid.addEventListener("click", event => {

    const addButton =
        event.target.closest("[data-add-to-cart]");

    if (!addButton) {
        return;
    }

    const productId =
        Number(addButton.dataset.addToCart);

    addToCart(productId);
});


/* ==========================================================
   EVENT DELEGATION — CATEGORIES
========================================================== */

categoryFilters.addEventListener(
    "click",
    event => {

        const categoryButton =
            event.target.closest("[data-category]");

        if (!categoryButton) {
            return;
        }

        activeCategory =
            categoryButton.dataset.category;

        renderCategories();

        renderProducts();
    }
);


/* ==========================================================
   EVENT DELEGATION — CART
========================================================== */

cartContent.addEventListener("click", event => {

    const increaseButton =
        event.target.closest("[data-increase]");

    const decreaseButton =
        event.target.closest("[data-decrease]");

    const removeButton =
        event.target.closest("[data-remove]");

    const emptyMenuButton =
        event.target.closest("#empty-cart-menu");


    if (increaseButton) {

        updateQuantity(
            increaseButton.dataset.increase,
            1
        );

        return;
    }


    if (decreaseButton) {

        updateQuantity(
            decreaseButton.dataset.decrease,
            -1
        );

        return;
    }


    if (removeButton) {

        removeFromCart(
            removeButton.dataset.remove
        );

        return;
    }


    if (emptyMenuButton) {

        closeCart();

        document
            .querySelector("#menu")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    }
});


/* ==========================================================
   SEARCH EVENTS
========================================================== */

menuSearch.addEventListener(
    "input",
    handleSearch
);

clearSearchButton.addEventListener(
    "click",
    clearSearch
);

clearMenuStateButton.addEventListener(
    "click",
    clearSearch
);


/* ==========================================================
   CART EVENTS
========================================================== */

cartButton.addEventListener(
    "click",
    openCart
);

heroCartButton.addEventListener(
    "click",
    openCart
);

mobileCartButton.addEventListener(
    "click",
    openCart
);

closeCartButton.addEventListener(
    "click",
    closeCart
);

cartOverlay.addEventListener(
    "click",
    closeCart
);

continueShoppingButton.addEventListener(
    "click",
    closeCart
);

checkoutButton.addEventListener(
    "click",
    openCheckout
);


/* ==========================================================
   CHECKOUT EVENTS
========================================================== */

closeCheckoutButton.addEventListener(
    "click",
    closeCheckout
);

checkoutOverlay.addEventListener(
    "click",
    closeCheckout
);

checkoutForm.addEventListener(
    "submit",
    placeOrder
);


/* ==========================================================
   SUCCESS EVENTS
========================================================== */

closeSuccessButton.addEventListener(
    "click",
    closeSuccessModal
);

successOverlay.addEventListener(
    "click",
    closeSuccessModal
);

backToMenuButton.addEventListener(
    "click",
    () => {

        closeSuccessModal();

        document
            .querySelector("#menu")
            ?.scrollIntoView({
                behavior: "smooth"
            });
    }
);


/* ==========================================================
   MOBILE MENU EVENTS
========================================================== */

menuToggle.addEventListener(
    "click",
    toggleMobileMenu
);


mobileNav.addEventListener(
    "click",
    event => {

        const link =
            event.target.closest("a");

        if (link) {
            closeMobileMenu();
        }
    }
);


/* ==========================================================
   FOOTER CATEGORY LINKS
========================================================== */

document
    .querySelectorAll("[data-footer-category]")
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                activeCategory =
                    link.dataset.footerCategory;

                renderCategories();

                renderProducts();

                document
                    .querySelector("#menu")
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });
            }
        );
    });


/* ==========================================================
   HEADER SCROLL STATE
========================================================== */

window.addEventListener(
    "scroll",
    () => {

        siteHeader.classList.toggle(
            "scrolled",
            window.scrollY > 20
        );
    },
    {
        passive: true
    }
);


/* ==========================================================
   ESCAPE KEY
========================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape") {
            return;
        }

        closeMobileMenu();

        closeCart();

        closeCheckout();

        closeSuccessModal();
    }
);


/* ==========================================================
   INITIALIZATION
========================================================== */

function initializeApp() {

    renderCategories();

    renderProducts();

    renderCart();

    updateCartCount();

    renderCheckoutSummary();
}


initializeApp();