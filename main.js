let plusIcon = document.querySelector('.fa-plus');
let minusIcon = document.querySelector('.fa-minus');
let productQuantity = document.querySelector('.product__quantity span');
let initialQuantity = 1;

plusIcon.addEventListener('click', () => {
    initialQuantity++;
    productQuantity.innerHTML = initialQuantity;
})

minusIcon.addEventListener('click', () => {
    if(initialQuantity > 1) {
        initialQuantity--;
        productQuantity.innerHTML = initialQuantity;
    }
})



let largeImage = document.querySelector('.large__image img');
let smallImages = document.querySelectorAll('.small__image');

smallImages.forEach(image => {
    image.addEventListener('click', e => {
        let imgSrc = image.children[0].getAttribute('src');
        largeImage.src = imgSrc;
        smallImages.forEach(image => image.classList.remove('active'));
        image.classList.add('active');
    })
})