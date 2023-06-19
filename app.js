let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let logo = document.querySelector('.logo-img');

document.getElementById("bukaNamaBTN").disabled = true;
logo.style.display = "none";

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'Bakso Malang',
        image: '1.PNG',
        price: 25000
    },
    {
        id: 2,
        name: 'Klepon',
        image: '2.PNG',
        price: 12000
    },
    {
        id: 3,
        name: 'Tempe Mendoan (isi 2)',
        image: '3.PNG',
        price: 12000
    },
    {
        id: 4,
        name: 'Tempe Mendoan (isi 3)',
        image: '3.PNG',
        price: 15000
    },
    {
        id: 5,
        name: 'Es Kopi Gula Aren',
        image: '4.PNG',
        price: 15000
    },
    {
        id: 6,
        name: 'Es Degan (gelas)',
        image: '5.PNG',
        price: 8000
    },
    {
        id: 6,
        name: 'Es Degan (batok)',
        image: '6.PNG',
        price: 17000
    }
];

let listCards = [];
function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">Rp. ${value.price.toLocaleString()}</div>
            <button class="addtocart" onclick="addToCard(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
}
initApp();

function addToCard(key) {
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let arrayProductOrder = [];
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `;
            listCard.appendChild(newDiv);
            // nambahin jumlah product
            arrayProductOrder.push(value.name + " (" + value.quantity + "x) ");
            document.getElementById("bukaNamaBTN").disabled = false;
        }
    });

    // console.log(arrayProductOrder.join(', '));

    // ngambil data harga utk dimasukkin ke database
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

    var hargaAkhir =  totalPrice + 13;

    // total harga buat qris payment
    document.querySelector(".total-pesanan-qris").value = hargaAkhir.toLocaleString();

    let productlist, nominal;
    productlist = document.getElementById("productlist").value = arrayProductOrder.join(', ');
    nominal = document.getElementById("nominal").value = totalPrice.toLocaleString();
}

function changeQuantity(key, quantity){
    if (quantity == 0) {
        delete listCards[key];
        document.getElementById("bukaNamaBTN").disabled = true;
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

overlay = document.querySelector(".overlay")

function bukaNama() {
    overlay.style.display = "block";
}

function qrisPaymentSelected() {
    const payMethod = document.querySelector(".payment-method"),
    qrisMethod = document.querySelector(".qris-payment"),
    ANText = document.querySelector(".AN-text"),
    TotalText = document.querySelector(".total-text"),
    NamaPemesanQris = document.querySelector(".nama-pemesan-qris"),
    totalPesananQris = document.querySelector(".total-pesanan-qris");

    payMethod.style.display = "none";
    qrisMethod.style.display = "flex";

    ANText.innerHTML = "Pesanan atas nama : " + NamaPemesanQris.value;
    TotalText.innerHTML = "Total : Rp. " + totalPesananQris.value;

}

function cashPaymentSelected() {
    const payMethod = document.querySelector(".payment-method"),
    qrisMethod = document.querySelector(".qris-payment"),
    ANText = document.querySelector(".AN-text"),
    TotalText = document.querySelector(".total-text"),
    NamaPemesanQris = document.querySelector(".nama-pemesan-qris"),
    qrisIMG = document.querySelector(".qris-img"),
    totalPesananQris = document.querySelector(".total-pesanan-qris");

    payMethod.style.display = "none";
    qrisMethod.style.display = "flex";
    qrisMethod.style.justifyContent = "center";
    qrisIMG.style.display = "none";
    logo.style.display = "block";

    ANText.innerHTML = "Pesanan atas nama : " + NamaPemesanQris.value;
    TotalText.innerHTML = "Total : Rp. " + totalPesananQris.value;

}