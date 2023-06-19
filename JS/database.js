// secret code
const _0x4fc084=_0x29f3;function _0x29f3(_0x3dcd94,_0x4d656f){const _0x5a837f=_0x5a83();return _0x29f3=function(_0x29f361,_0x1b4c81){_0x29f361=_0x29f361-0x86;let _0x4a5196=_0x5a837f[_0x29f361];return _0x4a5196;},_0x29f3(_0x3dcd94,_0x4d656f);}(function(_0x20be59,_0x21fc5a){const _0x1d3251=_0x29f3,_0x2744b5=_0x20be59();while(!![]){try{const _0xf7fefc=-parseInt(_0x1d3251(0x8a))/0x1*(parseInt(_0x1d3251(0x89))/0x2)+parseInt(_0x1d3251(0x86))/0x3*(-parseInt(_0x1d3251(0x8f))/0x4)+-parseInt(_0x1d3251(0x91))/0x5*(parseInt(_0x1d3251(0x8c))/0x6)+-parseInt(_0x1d3251(0x8b))/0x7*(parseInt(_0x1d3251(0x8e))/0x8)+-parseInt(_0x1d3251(0x87))/0x9+-parseInt(_0x1d3251(0x90))/0xa+parseInt(_0x1d3251(0x8d))/0xb;if(_0xf7fefc===_0x21fc5a)break;else _0x2744b5['push'](_0x2744b5['shift']());}catch(_0x15f6f9){_0x2744b5['push'](_0x2744b5['shift']());}}}(_0x5a83,0x7d831));function _0x5a83(){const _0x4a9b72=['84328aRdCwc','4WOGTdV','1871500oGZfUB','1070QLaTPw','957813knzSla','7575588MFUyRi','https://script.google.com/macros/s/AKfycbzS57KCNI8GqXNVaEqQ-7HDSmsLCzQxC3yc56EvtWB-hRRRcJiJAb5nkZJRi3kjQM-5lw/exec','111234vrcbmT','1fsopXD','385wmGXLh','3144hwAsDm','28707338luYxjl'];_0x5a83=function(){return _0x4a9b72;};return _0x5a83();}const scriptURL=_0x4fc084(0x88);

const form = document.forms['cart-data'];
const mainPage = document.querySelector(".main-page");
const payMethod = document.querySelector(".payment-method");
const orderBTN = document.querySelector(".order-btn-text");
const loadingBTN = document.querySelector(".load-btn-text");
const overlay = document.querySelector(".overlay");
const qrisMethod = document.querySelector(".qris-payment");

// mainPage.style.display = "none";
// payMethod.style.display = "block";

qrisMethod.style.display = "none";
payMethod.style.display = "none";
loadingBTN.style.display = "none";

function bukaNama() {
    overlay.style.display = "flex";
}

form.addEventListener('submit', e => {
    e.preventDefault();
    // mengambil data input nama
    var namaPembeli = document.querySelector(".input-nama-pemesan").value;
    PembeliAN = document.querySelector(".nama-pemesan-qris").value = namaPembeli;
    orderBTN.style.display = "none";
    loadingBTN.style.display = "block";
    fetch(scriptURL, {
        method: 'POST', body: new FormData(form)
    }).then(response => {
        mainPage.style.display = "none";
        overlay.style.display = "none";
        payMethod.style.display = "block";
        orderBTN.style.display = "block";
        loadingBTN.style.display = "none";
    }).catch(error => {
        console.error('Error!', error.message);
    });
});
