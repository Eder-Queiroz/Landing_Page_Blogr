const hamburguerMobile = document.getElementById('hamburguer');
const productMobile = document.getElementById('product_mobile');
const companyMobile = document.getElementById('company_mobile');
const connectMobile = document.getElementById('connect_mobile');

function toggleMenu(){
    const navMobile = document.getElementById('menu');
    navMobile.classList.toggle('active')
}

function productMobileClick(){
    const mobile1 = document.getElementById('product_mobile');
    mobile1.classList.toggle('active_product');
}

function companyMobileClick(){
    const mobile2 = document.getElementById('company_mobile');
    mobile2.classList.toggle('active_product');
}

function connectMobileClick(){
    const mobile3 = document.getElementById('connect_mobile');
    mobile3.classList.toggle('active_product');
}

hamburguerMobile.addEventListener('click', toggleMenu);
productMobile.addEventListener('click', productMobileClick);
companyMobile.addEventListener('click', companyMobileClick);
connectMobile.addEventListener('click', connectMobileClick);