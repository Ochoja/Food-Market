<template>
  <navbar @showCart = "showCart()"></navbar>
  <div class="site_description">
    Fruit Market 
  </div>

  <h1>Browse</h1>
   <div :key="reset" class="shelf"> <!--bind key force rerender when variable value changes -->
  <items v-for="(item, index) in shelf" :key="index" :product = "item" v-model:cartQuantity = "item.quantity"  @add = "addtoCart(item)" @remove="removeItem(item.cartIndex)" @update="updateCart(item.cartIndex)"></items>
  </div>

  <!-- footer -->
  <foot/>

  <!-- Cart -->
<transition name="slide-fade">
  <div v-if="toggleCart" class="cart">
    <h1 class="cart_head">Cart</h1> <span class="close" @click="showCart()"></span>
    <div class="cart_header">
      <h3>Good</h3>
      <h3>Quantity</h3>
    </div>
    <div v-for="(item, index) in cart" :key="index" class="cartItem">
      <span>{{item.good}}</span>  <span class="itemQty">{{item.quantity}} <span class="cart_remove" @click = "removeItem(item.cartIndex)"><fa icon = "trash-alt" class="icon"/></span></span> 
    </div>


    <div class="checkout" v-if="toggleCheckout">
    <button class="checkout_btn">Proceed to Checkout</button>
    </div>
  </div>
  </transition>


</template>

<script>
import items from './components/items.vue'
import navbar from './components/navbar.vue'
import foot from './components/foot.vue'



export default {
  name: 'App',
  components: {
    items,
    navbar,
    foot
  },
  data() {
    return{
      reset: 0,
      toggleCart: false, //variable helps toggle cart
      shelf: [ 
        {good: "Banana", price: 5, stock: 5, id: 0, quantity: 0, image: "banana.jpg"}, 
        {good: "Orange", price: 8, stock: 5, id: 1, quantity: 0, image: "orange.jpg"}, 
        {good: "Apple", price: 10, stock: 5, id: 2, quantity: 0, image: "apple.jpg"}, 
        {good: "Pineapple", price: 6.99, stock: 5, id: 3, quantity: 0, image: "pineapple.jpeg"},
        {good: "Avocado", price: 7.99, stock: 5, id: 4, quantity: 0, image: "avocado.jpg"},
        {good: "Pear", price: 7.99, stock: 5, id: 5, quantity: 0, image: "pear.jpg"}
        ],
      cart: [], //items added to cart from shelf are pushed to the cart array
      toggleCheckout: true
    }
  },
  methods: {
    showCart(){ //toggles cart with the help of v-if and this.toggleCart
      this.toggleCart = !this.toggleCart;
      if(this.toggleCart == true){ 
        if(this.cart.length == 0){
          this.toggleCheckout = false;
        }
        else{
          this.toggleCheckout = true;
        }
      }
    },
    addtoCart(good){ //adds item to cart array
      good.cartIndex = 0; //sets the cartIndex to 0, because item is first in the cart array
      this.cart.unshift(good); //add item to the cart array
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].cartIndex = this.cart.indexOf(this.cart[i]); //Resets cartIndex of items in cart array
      }
    },
    removeItem(index){
      this.shelf[this.cart[index].id].quantity = 0;
      this.cart.splice(index, 1);
      for (let i = 0; i < this.cart.length; i++) {
        this.cart[i].cartIndex = this.cart.indexOf(this.cart[i]); //Resets cartIndex of items in cart array
      }
      this.reset++; //change variable to force rerender of items in shelf
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Handlee&family=Poppins:ital,wght@0,600;1,500&family=Quicksand:wght@600;700&display=swap');

#app {
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(209,211,215);
  color:rgba(20,15,35);
}

h1{
  text-align: center;
  font-family: 'Poppins', serif;
  padding: 10px 0px 15px 0px;
}

.site_description{
  font-family: 'Handlee', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: rgb(175, 159, 13);
  height: 38vh;
  text-align: center;
  padding-top: 11vh;
  background-image: linear-gradient(
    to right, rgba(20,15,35,0.8), rgba(20,15,35,0.5)
  ), url(./assets/banner.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}


.shelf{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 20px;
  width: 80%;
  margin: auto;
  padding-bottom: 50px;
}

@media (min-width:1500px) {
  .shelf{
    width: 75%;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 35px;
  }
}

@media (max-width: 1018px ) {
    .shelf{
    grid-template-columns: repeat(4, 1fr);
    }
  }

 @media (max-width: 750px ) {
    .shelf{
    grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 500px ) {
    .shelf{
    grid-template-columns: repeat(2, 1fr);
    }
  }

/*Cart portion*/
  .cart{
    font-family: 'Quicksand', sans-serif;
    color: white;
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100%;
    background: rgb(20,15,35);
    box-shadow: -3px -1px 5px 0px rgba(0,0,0,0.75);
  }

  @media (min-width:716px) {
    .cart{
      width: 40%;
      right: 0;
    }
  }

  .cart_header{
    padding-top: 10px;
    padding-left: 10px;
    width: 85%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .cartItem{
    width: 95%;
    margin: 20px auto;
    padding-bottom: 5px;
    border-bottom: 1px solid white;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

/*quantity area in cart grid*/
  .itemQty{
    display: flex;
    justify-content: space-between;
  }

/*remove button*/
  .cart_remove{
    font-size: 1.2em;
  }
  .cart_remove:hover{
    color: red;
  }

  .cart_top{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 10px auto 10px auto;
  }

/*"Cart" text in cart section*/
  .cart_head{
    margin-right: 30px;
  }

  .checkout{
    position:fixed;
    bottom: 20px;
    width: 100%;
    text-align: center;
  }

  @media (min-width:716px) {
    .checkout{
      width: 40%;
    }
  }

.checkout_btn{
    font-family: 'Quicksand', serif;
    font-size: 1.1rem;
    border-radius: 30px;
    padding: 2px 6px ;
    box-shadow: none;
    border: none;
    text-align: center;
}
.checkout_btn:hover{
  color: white;
  background: red;
}
/*close button in cart*/
.close {
  position: absolute;
  right: 20px;
  top: 5px;
  width: 25px;
  height: 30px;
  opacity: 1;
}
.close:hover {
  opacity: 1;
}
.close:before, .close:after {
  position: absolute;
  left: 15px;
  content: ' ';
  height: 25px;
  width: 2px;
  background-color: #fff;
}
.close:before {
  transform: rotate(45deg);
}
.close:after {
  transform: rotate(-45deg);
}

/* transition */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>