// Обновленный список продуктов с изображениями и единицами измерения
const products = [
    {
        id: 1,
        name: "Кабель ВВГнг 3х2,5",
        category: "Кабели и провода",
        price: 85.50,
        unit: "метр",
        rating: 4.5,
        image: "https://stroybaza61.ru/wp-content/uploads/2016/10/1e5f298bae36b5789efe4c7748841f34.jpg",
        description: "Кабель силовой ВВГнг 3х2,5 мм², не распространяющий горение, для стационарной прокладки в электрических сетях номинальным напряжением до 1000 В.",
        specifications: {
            "Сечение": "3х2,5 мм²",
            "Количество жил": "3",
            "Напряжение": "до 1000 В",
            "Материал жилы": "медь",
            "Изоляция": "ПВХ пластикат"
        }
    },
    {
        id: 2,
        name: "Светильник LED офисный",
        category: "Светильники",
        price: 2450.00,
        unit: "шт",
        rating: 4.8,
        image: "https://led-portal.ru/upload/resize_cache/iblock/496/7q1idqsb1214ntpy43xxbqun8wyirn1r/500_500_140cd750bba9870f18aada2478b24840a/ppl_588_g_prisma_36w_4000k_4.jpg",
        description: "Светодиодный светильник для офисных помещений, мощность 36 Вт, цветовая температура 4000K, степень защиты IP20.",
        specifications: {
            "Мощность": "36 Вт",
            "Цветовая температура": "4000K",
            "Световой поток": "3600 лм",
            "Степень защиты": "IP20",
            "Размеры": "600x600 мм"
        }
    },
    {
        id: 3,
        name: "Автоматический выключатель 16А",
        category: "Автоматические выключатели",
        price: 320.00,
        unit: "шт",
        rating: 4.7,
        image: "https://cdn.vseinstrumenti.ru/images/goods/elektrika-i-svet/ustrojstva-zaschity-kontrolya-i-upravleniya/7772398/560x504/195477687.jpg",
        description: "Автоматический выключатель однополюсный 16А, характеристика С, для защиты от токов перегрузки и короткого замыкания.",
        specifications: {
            "Номинальный ток": "16 А",
            "Количество полюсов": "1",
            "Характеристика": "C",
            "Напряжение": "230/400 В",
            "Отключающая способность": "4,5 кА"
        }
    },
    {
        id: 4,
        name: "Щит распределительный 12 модулей",
        category: "Электрощитовое оборудование",
        price: 1250.00,
        unit: "шт",
        rating: 4.6,
        image: "https://khv.energosf.ru/upload/iblock/f02/t2wxj3lux3selxp5wbb6h4mimyaxrm2b/pb40_n_12.jpg",
        description: "Распределительный щит навесной на 12 модулей, степень защиты IP65, материал корпуса - пластик.",
        specifications: {
            "Количество модулей": "12",
            "Материал": "пластик",
            "Степень защиты": "IP65",
            "Цвет": "белый",
            "Размеры": "350x250x120 мм"
        }
    },
    {
        id: 5,
        name: "Розетка двойная с заземлением",
        category: "Розетки и выключатели",
        price: 185.00,
        unit: "шт",
        rating: 4.4,
        image: "https://ir.ozone.ru/s3/multimedia-f/wc1000/6662494923.jpg",
        description: "Розетка двойная с заземлением, для скрытой установки, номинальный ток 16А, с защитными шторками.",
        specifications: {
            "Количество гнезд": "2",
            "Номинальный ток": "16 А",
            "Напряжение": "250 В",
            "Заземление": "есть",
            "Материал": "термопласт"
        }
    },
    {
        id: 6,
        name: "Лампа светодиодная 10Вт E27",
        category: "Светильники",
        price: 120.00,
        unit: "шт",
        rating: 4.5,
        image: "https://www.electricmir.ru/content/images/thumbs/0014286_lampa-svetodiodna-led-10vt-e27-bela-94388-nll-a60_300.png",
        description: "Светодиодная лампа 10Вт, аналог лампы накаливания 75Вт, цоколь E27, цветовая температура 2700K.",
        specifications: {
            "Мощность": "10 Вт",
            "Цветовая температура": "2700K",
            "Световой поток": "800 лм",
            "Цоколь": "E27",
            "Срок службы": "25000 ч"
        }
    },
    {
        id: 7,
        name: "Кабель NYM 3х1,5",
        category: "Кабели и провода",
        price: 65.30,
        unit: "метр",
        rating: 4.3,
        image: "https://yugkabel.ru/upload/webp/resize_cache/103/600_600_1/z21df8uvyw9dxa5jc84h89tp138v64z5.webp",
        description: "Кабель NYM 3х1,5 мм², с медными жилами, для стационарной прокладки в сухих и влажных помещениях.",
        specifications: {
            "Сечение": "3х1,5 мм²",
            "Количество жил": "3",
            "Напряжение": "до 660 В",
            "Материал жилы": "медь",
            "Изоляция": "ПВХ"
        }
    },
    {
        id: 8,
        name: "Дифференциальный автомат 25А",
        category: "Автоматические выключатели",
        price: 1850.00,
        unit: "шт",
        rating: 4.9,
        image: "https://shop220.ru/images/data/cat/151159_big_1634901189.jpg",
        description: "Дифференциальный автомат 25А, двухполюсный, характеристика С, ток утечки 30мА, защита от поражения электрическим током.",
        specifications: {
            "Номинальный ток": "25 А",
            "Количество полюсов": "2",
            "Ток утечки": "30 мА",
            "Характеристика": "C",
            "Тип УЗО": "AC"
        }
    },
    {
        id: 9,
        name: "Провод ПВС 3х1,5",
        category: "Кабели и провода",
        price: 45.20,
        unit: "метр",
        rating: 4.2,
        image: "https://rkcdn.ru/products/b791d0d2-64d6-11ed-b732-005056013a69/src.jpg",
        description: "Провод ПВС 3х1,5 мм² для подключения электроприборов и оборудования.",
        specifications: {
            "Сечение": "3х1,5 мм²",
            "Количество жил": "3",
            "Напряжение": "до 450 В",
            "Материал жилы": "медь",
            "Изоляция": "ПВХ"
        }
    },
    {
        id: 10,
        name: "Трансформатор 220/12В 50Вт",
        category: "Трансформаторы",
        price: 780.00,
        unit: "шт",
        rating: 4.6,
        image: "https://m.epool.ru/download/catalog/tb110272_1.png",
        description: "Трансформатор понижающий 220В на 12В, мощность 50Вт, для систем освещения.",
        specifications: {
            "Мощность": "50 Вт",
            "Напряжение входное": "220 В",
            "Напряжение выходное": "12 В",
            "Тип": "тороидальный",
            "Защита": "от КЗ"
        }
    }
];

// Категории
const categories = [
    { id: 1, name: "Кабели и провода", icon: "fas fa-bolt", count: 5 },
    { id: 2, name: "Светильники", icon: "fas fa-lightbulb", count: 5 },
    { id: 3, name: "Автоматические выключатели", icon: "fas fa-toggle-on", count: 3 },
    { id: 4, name: "Электрощитовое оборудование", icon: "fas fa-th-large", count: 2 },
    { id: 5, name: "Розетки и выключатели", icon: "fas fa-plug", count: 2 },
    { id: 6, name: "Трансформаторы", icon: "fas fa-sync-alt", count: 2 },
    { id: 7, name: "Аксессуары", icon: "fas fa-tools", count: 1 }
];

// Инициализация корзины
let cart = JSON.parse(localStorage.getItem('elmaxo_cart')) || [];

// Основные функции
function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElements = document.querySelectorAll('.cart-count');
    cartCountElements.forEach(el => {
        el.textContent = count;
    });
}

function addToCart(productId, quantity = 1) {
    // Проверяем, передано ли количество с товаром 10 (трансформатор)
    if (productId === 10) {
        const quantityInput = document.getElementById('productQuantity');
        if (quantityInput && quantity === 1) {
            quantity = parseInt(quantityInput.value) || 1;
        }
    }
    
    const existingItem = cart.find(item => item.productId === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }
    
    localStorage.setItem('elmaxo_cart', JSON.stringify(cart));
    updateCartCount();
    
    // Показываем уведомление
    const product = getProductById(productId);
    if (product) {
        const unitText = product.unit === 'метр' ? 'м' : 'шт';
        showNotification(`Товар "${product.name}" (${quantity} ${unitText}) добавлен в корзину!`);
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.productId !== productId);
    localStorage.setItem('elmaxo_cart', JSON.stringify(cart));
    updateCartCount();
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
}

function updateCartQuantity(productId, newQuantity) {
    const product = getProductById(productId);
    if (!product) return;
    
    if (newQuantity < (product.unit === 'метр' ? 0.1 : 1)) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.productId === productId);
    if (item) {
        // Округляем для метражных товаров до 1 десятичного знака
        if (product.unit === 'метр') {
            item.quantity = Math.max(0.1, Math.round(newQuantity * 10) / 10);
        } else {
            item.quantity = Math.max(1, Math.floor(newQuantity));
        }
        
        localStorage.setItem('elmaxo_cart', JSON.stringify(cart));
        updateCartCount();
        if (window.location.pathname.includes('cart.html')) {
            renderCartPage();
        }
    }
}

function getProductById(id) {
    return products.find(p => p.id === id);
}

function showNotification(message) {
    // Проверяем, есть ли уже уведомление
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-check-circle"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Анимация появления
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease-out';
    }, 10);
    
    // Удаляем через 3 секунды
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
}

// Функция для рендеринга корзины
function renderCartPage() {
    const cartContent = document.getElementById('cartContent');
    if (!cartContent) return;
    
    if (cart.length === 0) {
        cartContent.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">
                    <i class="fas fa-shopping-cart"></i>
                </div>
                <h2>Ваша корзина пуста</h2>
                <p>Добавьте товары из каталога, чтобы сделать заказ</p>
                <a href="catalog.html" class="btn" style="margin-top: 20px;">Перейти в каталог</a>
            </div>
        `;
        return;
    }
    
    let total = 0;
    let totalItems = 0;
    const cartItemsHTML = cart.map(item => {
        const product = getProductById(item.productId);
        if (!product) return '';
        
        const itemTotal = product.price * item.quantity;
        total += itemTotal;
        totalItems += item.quantity;
        
        // Форматируем количество в зависимости от единицы измерения
        const quantityDisplay = product.unit === 'метр' ? 
            item.quantity.toFixed(1).replace('.0', '') : 
            Math.floor(item.quantity);
        const unitDisplay = product.unit === 'метр' ? 'м' : 'шт';
        const unitClass = product.unit === 'метр' ? 'unit-meter' : 'unit-piece';
        
        return `
            <div class="cart-item">
                <div class="cart-item-img-container">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="cart-item-info-container">
                    <div class="cart-item-name">
                        <a href="product-${product.id}.html">${product.name}</a>
                        <div class="cart-item-category">${product.category}</div>
                        <div class="cart-item-unit ${unitClass}">Единица измерения: ${product.unit === 'метр' ? 'метр' : 'штука'}</div>
                    </div>
                </div>
                <div class="cart-item-price-unit">
                    <div class="price">${product.price.toFixed(2)} ₽</div>
                    <div class="unit">за ${product.unit}</div>
                </div>
                <div class="cart-item-actions">
                    <div class="cart-quantity-control">
                        <button class="quantity-btn-custom" onclick="updateCartQuantity(${product.id}, ${item.quantity - (product.unit === 'метр' ? 0.1 : 1)})">-</button>
                        <div class="quantity-display-custom">
                            <span>${quantityDisplay} ${unitDisplay}</span>
                        </div>
                        <button class="quantity-btn-custom" onclick="updateCartQuantity(${product.id}, ${item.quantity + (product.unit === 'метр' ? 0.1 : 1)})">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${product.id})" title="Удалить товар">
                        <i class="fas fa-trash"></i> Удалить
                    </button>
                </div>
                <div class="cart-item-total-container">
                    <div class="cart-item-total-price">${itemTotal.toFixed(2)} ₽</div>
                    <div style="font-size: 12px; color: var(--gray);">${quantityDisplay} ${unitDisplay}</div>
                </div>
            </div>
        `;
    }).join('');
    
    const deliveryCost = total > 10000 ? 0 : 500;
    const finalTotal = total + deliveryCost;
    
    cartContent.innerHTML = `
        <div class="cart-container">
            <div class="cart-items">
                <div class="cart-header">
                    <h2>Товары в корзине (${cart.length} позиций)</h2>
                    <button class="btn btn-outline" onclick="clearCart()">
                        <i class="fas fa-trash"></i> Очистить корзину
                    </button>
                </div>
                ${cartItemsHTML}
            </div>
            <div class="order-summary">
                <h2 class="summary-title">Сумма заказа</h2>
                <div class="summary-row">
                    <span>Товары (${totalItems} ${totalItems === 1 ? 'позиция' : totalItems < 5 ? 'позиции' : 'позиций'})</span>
                    <span>${total.toFixed(2)} ₽</span>
                </div>
                <div class="summary-row">
                    <span>Доставка</span>
                    <span>${deliveryCost === 0 ? 'Бесплатно' : deliveryCost.toFixed(2) + ' ₽'}</span>
                </div>
                <div class="summary-row summary-total">
                    <span>Итого к оплате</span>
                    <span style="color: var(--primary); font-size: 24px;">${finalTotal.toFixed(2)} ₽</span>
                </div>
                <div class="delivery-info">
                    <i class="fas fa-info-circle"></i>
                    Бесплатная доставка при заказе от 10 000 ₽
                </div>
                <div class="summary-actions">
                    <button class="btn btn-primary btn-block" onclick="checkout()" style="padding: 15px; font-size: 16px;">
                        <i class="fas fa-check-circle"></i> Оформить заказ
                    </button>
                    <a href="catalog.html" class="btn btn-outline btn-block">
                        <i class="fas fa-arrow-left"></i> Продолжить покупки
                    </a>
                </div>
            </div>
        </div>
    `;
}

function clearCart() {
    if (confirm('Вы уверены, что хотите очистить корзину?')) {
        cart = [];
        localStorage.setItem('elmaxo_cart', JSON.stringify(cart));
        updateCartCount();
        renderCartPage();
    }
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Корзина пуста! Добавьте товары перед оформлением заказа.');
        return;
    }
    
    // Сохраняем заказ для отображения на странице подтверждения
    const order = {
        id: Date.now(),
        date: new Date().toLocaleDateString('ru-RU'),
        items: cart.map(item => {
            const product = getProductById(item.productId);
            return {
                ...item,
                productName: product ? product.name : 'Неизвестный товар',
                productPrice: product ? product.price : 0,
                productUnit: product ? product.unit : 'шт',
                productImage: product ? product.image : ''
            };
        }),
        total: cart.reduce((sum, item) => {
            const product = getProductById(item.productId);
            return sum + (product ? product.price * item.quantity : 0);
        }, 0)
    };
    
    localStorage.setItem('elmaxo_last_order', JSON.stringify(order));
    
    // Перенаправляем на страницу подтверждения заказа
    window.location.href = 'order-confirmation.html';
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Устанавливаем активную ссылку в навигации
    setActiveNavLink();
    
    // Обработчик мобильного меню
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (mobileMenuBtn && mainNav) {
        mobileMenuBtn.addEventListener('click', function() {
            mainNav.classList.toggle('active');
        });
    }
    
    // Инициализация галереи товара
    const productThumbs = document.querySelectorAll('.product-thumb');
    if (productThumbs.length > 0) {
        productThumbs.forEach(thumb => {
            thumb.addEventListener('click', function() {
                const newSrc = this.getAttribute('data-image');
                const mainImg = document.getElementById('mainProductImg');
                if (mainImg && newSrc) {
                    productThumbs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    mainImg.src = newSrc;
                }
            });
        });
    }
    
    // Обработчик изменения количества на странице товара
    const quantityInput = document.getElementById('productQuantity');
    if (quantityInput) {
        const minusBtn = quantityInput.parentElement.querySelector('.quantity-btn.minus');
        const plusBtn = quantityInput.parentElement.querySelector('.quantity-btn.plus');
        
        if (minusBtn) {
            minusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value) || 1;
                if (value > 1) {
                    quantityInput.value = value - 1;
                }
            });
        }
        
        if (plusBtn) {
            plusBtn.addEventListener('click', function() {
                let value = parseInt(quantityInput.value) || 1;
                quantityInput.value = value + 1;
            });
        }
    }
    
    // Если мы на странице корзины, рендерим ее содержимое
    if (window.location.pathname.includes('cart.html')) {
        renderCartPage();
    }
    
    // Если мы на странице контактов или других специфических страницах
    // Здесь можно добавить дополнительную логику для каждой страницы
});

// Делаем функции доступными глобально
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.checkout = checkout;
window.clearCart = clearCart;
window.getProductById = getProductById;
window.renderCartPage = renderCartPage;
// Функция для определения активной страницы в навигации
function setActiveNavLink() {
    // Получаем текущий URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Находим все ссылки в навигации
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Убираем класс active у всех ссылок
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Добавляем класс active к текущей странице
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Проверяем, является ли текущая страница той, на которую ведет ссылка
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
        
        // Для главной страницы (index.html)
        if (currentPage === '' && linkHref === 'index.html') {
            link.classList.add('active');
        }
        
        // Для каталога (catalog.html)
        if (linkHref === 'catalog.html' && currentPage.includes('product-')) {
            link.classList.add('active');
        }
    });
}

