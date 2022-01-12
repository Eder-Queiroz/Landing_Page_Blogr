const hamburguerMobile = document.getElementById('hamburguer');
const productMobile = document.getElementById('product_mobile');
const companyMobile = document.getElementById('company_mobile');
const connectMobile = document.getElementById('connect_mobile');

function toggleMenu(){
    const navMobile = document.getElementById('menu');
    navMobile.classList.toggle('active');
}

function productMobileClick(){
    const product = document.getElementById('product_mobile');

    product.classList.toggle('active_menu_mobile');
}

function companyMobileClick(){
    const company = document.getElementById('company_mobile');
    
    company.classList.toggle('active_menu_mobile');
}

function connectMobileClick(){
    const connect = document.getElementById('connect_mobile');
    
    connect.classList.toggle('active_menu_mobile');
}

hamburguerMobile.addEventListener('click', toggleMenu);
productMobile.addEventListener('click', productMobileClick);
companyMobile.addEventListener('click', companyMobileClick);
connectMobile.addEventListener('click', connectMobileClick);