<template>
  <div class="navbar">
    <div class="logo">E-Commerce</div>
    <ul>
      <li>
        <a href="#"><fa icon="home" class="icon" /> Home</a>
      </li>
      <li>
        <a href="#"><fa icon="user" class="icon" />Account</a>
      </li>
      <li>
        <a href="#" @click="toggleCart()"
          ><fa icon="shopping-cart" class="icon" />Cart</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ["showCart"],
  methods: {
    toggleCart() {
      this.$emit("showCart");
    },
  },
};
</script>

<style scoped>
.navbar {
  color: rgb(250, 241, 241);
  display: flex;
  justify-content: flex-end;
  background: rgba(23, 114, 23, 0.95);
  width: 100%;
  position: fixed;
}

.logo {
  font-family: "Poppins", serif;
  font-weight: 700;
  margin-right: auto;
  padding: 10px 5px;
}

ul {
  display: flex;
  list-style-type: none;
  padding: 10px 5px;
}

li {
  padding: 0px 10px;
}

a {
  text-decoration: none;
  color: rgb(250, 241, 241);
}

a:hover {
  color: rgba(20, 15, 35);
}

.icon {
  margin-right: 3px;
}
</style>
