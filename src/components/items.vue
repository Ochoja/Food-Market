<template>
  <div class="card">
    <div class="image"><img :src="getImgUrl()" alt="image" /></div>
    <div class="description">
      <div>{{ product.good }}</div>
      <div>${{ product.price }}</div>
      <button @click="increaseQuantity" v-if="itemStatus">Add to Cart</button>
      <div v-else>
        <button @click="increaseQuantity">+</button
        ><strong class="quantity">{{ quantity }}</strong
        ><button @click="decreaseQuantity">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
    },
    cartQuantity: {
      type: Number,
    },
  },
  data() {
    return {
      quantity: this.cartQuantity,
      itemStatus: true,
    };
  },
  methods: {
    getImgUrl() {
      return require("../assets/" + this.product.image);
    },
    increaseQuantity() {
      if (this.quantity == this.product.stock) {
        //Quantity is equal to stock
        console.log("Out of Stock");
      } else {
        ++this.quantity;
        this.$emit("update:cartQuantity", this.quantity); //update value(prop) in parent component
        if (this.quantity > 0) {
          this.itemStatus = false;
          if (this.quantity == 1) {
            this.$emit("add"); //event item adds to cart
          }
        }
      }
    },
    decreaseQuantity() {
      this.quantity--;
      this.$emit("update:cartQuantity", this.quantity); //update prop using emit event
      if (this.quantity == 0) {
        this.itemStatus = !this.itemStatus;
        this.$emit("remove");
      }
    },
  },
  mounted() {
    //check itemStatus on every re-render
    this.$emit("update:cartQuantity", this.quantity); //update value(prop) in parent component
    if (this.quantity > 0) {
      this.itemStatus = false;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  font-family: "Quicksand", sans-serif;
  background-color: white;
  border-radius: 22px;
}
.card:hover {
  background-color: white;
  border-radius: 22px;
  box-shadow: -1px -1px 3px 0px rgb(20, 15, 35);
}

.card > .image {
  height: 170px;
}

@media (min-width: 1500px) {
  .card > .image {
    height: 180px;
  }
}

@media (max-width: 900px) {
  .card > .image {
    height: 150px;
  }
}

@media (max-width: 718px) {
  .card > .image {
    height: 135px;
  }
}

.image > img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px 20px 0 0;
}

.description {
  text-align: center;
  padding: 5px 5px;
}

button {
  font-family: "Quicksand", sans-serif;
  font-size: 0.9em;
  padding: 4px 8px;
  margin: 3px auto;
  border-radius: 5px;
  box-shadow: none;
  background: rgba(20, 15, 35);
  color: white;
  border: none;
}

.quantity {
  padding: 0 5px;
}
</style>
