const searchInput = document.getElementById ("search-input")
const searcgBtn = document.getElementById("search-btn");
let productCards = document.querySelectorAll(".product-card");

searchInput.addEventListener('input', function(){
    const searchText = searchInput.value.toLocaleLowerCase().trim();
    for (let i =0; i< productCards.length; i++){
     const productName = productCards[i]. querySelector("h3").textContent.toLocaleLowerCase();
      if(productName.includes(searchText)){
        productCards[i].style.display = "block";
      } else{
        productCards[i].style.display = "none";
      }

    }
});