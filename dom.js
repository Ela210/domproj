// var favs = Array.from(document.querySelectorAll(".fa-heart"));
// var supp_btns = array.from(document.querySelectorAll(".fa-trash-alt"));
// var add_btns = array.from(document.querySelectorAll(".plus-btn"));
// var add_btns = array.from(document.querySelectorAll(".minus-btn"));
// var cards = array.from(document.querySelectorAll(".card"));

//declarer tableau
let favs = Array.from(document.querySelectorAll(".fa-heart"));
let deleteBtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
let cards = Array.from(document.querySelectorAll(".card"));
let plusBtns = Array.from(document.querySelectorAll(".plus-btn"));
let minusBtns = Array.from(document.querySelectorAll(".minus-btn"));

// for (let fav of favs) {
//   fav.addEventListener("click", function () {
//     if (fav.style.color === "black") {
//       fav.style.color = "red";
//     } else {
//       fav.style.color = "black";
//     }
//   });
// }

// Favourites
for (let fav of favs) {
  fav.addEventListener("click", function () {
    if (fav.style.color === "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}

// for (let i in supp_btns) {
//   supp_btns[i].addEventListener("click", function () {
//     cards[i].remove();
//   });
// }

// Remove button Part
for (let i in deleteBtns) {
  deleteBtns[i].addEventListener("click", function () {
    cards[i].remove();
    total();
  });
}

for (let plusBtn of plusBtns) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.innerHTML++;
    total();
  });
}

// Minus button
for (let minusBtn of minusBtns) {
  minusBtn.addEventListener("click", function () {
    if (minusBtn.previousElementSibling.innerHTML > 0) {
      minusBtn.previousElementSibling.innerHTML--;
    } else {
      null;
    }
    total();
  });
}
// for (let min of min_btns) {
//   min.addEventListener("click", function () {
//     if (min.previousElementSibling.innerHTML > 0) {
//       min.previousElementSibling.innerHTML--;
//     } else {
//       null;
//     }
//   });
// }

// Total price
function total() {
  let qte = Array.from(document.querySelectorAll(".qute"));
  let price = Array.from(document.querySelectorAll(".unit-price"));
  let s = 0;
  for (let i = 0; i < price.length; i++) {
    s = s + parseFloat(price[i].innerHTML) * parseFloat(qte[i].innerHTML);
  }
  document.getElementById("total-price").innerHTML = s;
}
