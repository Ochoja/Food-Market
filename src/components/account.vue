<template>
  <div class="account">
    <form action="">
      <h3>Log In</h3>
      <div class="labelGroup">
        <label for="email">E-mail</label>
        <input
          type="email"
          id="email"
          v-model="eMail"
          placeholder="daniel@daniel.com"
        />
      </div>

      <div class="labelGroup">
        <label for="password">Password</label>
        <input type="password" v-model="password" />
      </div>

      <button @click.prevent="submitted()">Log in</button>
    </form>

    <div class="alt">
      <div>Continue with Google</div>
      <div>Continue with Facebook</div>
      <div>Don't have an Account? <a href="">Sign up</a></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      eMail: "",
      password: "",
    };
  },
  methods: {
    submitted() {
      console.log(this.eMail);
      console.log(this.password);
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-bottom: 20px;
}
.account {
  margin: auto;
  padding: 10px;
}

@media (min-width: 600px) {
  .account {
    width: 75%;
  }
}

@media (min-width: 716px) {
  .account {
    width: 45%;
    border: 2px solid black;
  }
}

.labelGroup {
  display: flex;
  width: 95%;
  margin: 4px auto 8px auto;
}

label {
  padding-right: 8px;
  width: 25%;
}

input {
  margin-right: 20px;
  width: 70%;
}

.account > button {
  align-items: center;
}

.alt {
  text-align: center;
}
</style>
